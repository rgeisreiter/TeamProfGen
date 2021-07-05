const Employee = require("../lib/Employee");

test("Starting employee class", () => {
  const event = new Employee();
  expect(typeof event).toBe("object");
});

test("Enter name using argument", () => {
  const name = "Ryan";
  const event = new Employee(name);
  expect(event.name).toBe(name);
});

test("Enter id using argument", () => {
  const id = 25;
  const event = new Employee("Ryan", id);
  expect(event.id).toBe(id);
});

test("Enter email using argument", () => {
  const email = "rgeis@yahoo.com";
  const event = new Employee("Ryan", 25, email);
  expect(event.email).toBe(email);
});

test("Get name from getName function", () => {
  const value = "Ryan";
  const event = new Employee(value);
  expect(event.getName()).toBe(value);
});
