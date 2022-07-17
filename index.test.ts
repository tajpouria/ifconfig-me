import publicIP from ".";

it("Fetch and returns my IP.", async () => {
  const ip = await publicIP();
  console.info(ip);
  expect(ip).toBeTruthy();
});
