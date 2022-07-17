import publicIP, { _qs } from "./index";

it("All 3rd parties responding.", async () => {
  const res = await Promise.all(_qs);
  for (const ip of res) {
    expect(ip).toBeTruthy();
  }
});

it("Fetch and returns my IP.", async () => {
  const ip = await publicIP();
  expect(ip).toBeTruthy();
});
