const Employee = require('../utils/employee.js');

test('Can instantiate Employee instance', () => {
  const e = new Employee();
  expect(typeof e).toBe('object');
});

test('Can set object properties using the Constructor', () => {
  const e = new Employee('Bob', 1, 'bob@email.com');
  expect(e.name).toBe('Bob');
  expect(e.id).toBe(1);
  expect(e.email).toBe('bob@email.com');
});

test('Get Functions return object properties from the Constructor', () => {
  const e = new Employee('Bob', 1, 'bob@email.com');
  expect(e.getName()).toBe('Bob');
  expect(e.getId()).toBe(1);
  expect(e.getEmail()).toBe('bob@email.com');
});
