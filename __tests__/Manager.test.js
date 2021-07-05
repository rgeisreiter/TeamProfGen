const Manager = require("../lib/Manager");

test("Can set office number via constructor argument", () => {
  const testValue = 110;
  const e = new Manager("Ryan", 1, "rgeis@yahoo.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "rgeis@yahoo.com", 110);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 110;
  const e = new Manager("Foo", 1, "rgeis@yahoo.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
