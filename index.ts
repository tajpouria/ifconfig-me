import "isomorphic-fetch";

const qs: Promise<string>[] = [
  (async (): Promise<string> => {
    const res = await fetch("https://api64.ipify.org?format=json");
    const js = (await res.json()) as { ip: string };
    return js.ip;
  })(),
  (async (): Promise<string> => {
    const res = await fetch("https://ip.seeip.org/json");
    const js = (await res.json()) as { ip: string };
    return js.ip;
  })(),
  (async (): Promise<string> => {
    const res = await fetch("http://ip-api.com/json");
    const js = (await res.json()) as { query: string };
    return js.query;
  })(),
  (async (): Promise<string> => {
    const res = await fetch("https://geolocation-db.com/json");
    const js = (await res.json()) as { IPv4?: string; IPv6?: string };
    return (js.IPv4 || js.IPv6) as string;
  })(),
  (async (): Promise<string> => {
    const res = await fetch("https://icanhazip.com");
    const js = (await res.text()) as string;
    return js as string;
  })(),
];

const invert = (p: Promise<any>) => new Promise((res, rej) => p.then(rej, res));
const firstOf = (ps: Promise<any>[]) => invert(Promise.all(ps.map(invert)));

export default async (): Promise<string | null> => {
  let ip: string | null = null;
  try {
    ip = (await firstOf(qs)) as string;
  } catch (error) {
    console.error(
      `(ifconfig-me::FATAL): All IP check queries failed: '${error}'`,
    );
  }
  return ip;
};
