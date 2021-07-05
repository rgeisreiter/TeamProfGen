const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "CU";
  const e = new Intern("Ryan", 1, "rgeis@yahoo.com", testValue);
  expect(e.school).toBe(testValue);
});

test('getRole() should return "Intern"', () => {
  const testValue = "Intern";
  const e = new Intern("Ryan", 1, "rgeis@yahoo.com", "CU");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "CU";
  const e = new Intern("Ryan", 1, "rgeis@yahoo.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
