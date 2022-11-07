const Manager = require('../utils/manager.js');

test("Can instantiate Manager instance", () => {
    const m = new Manager();
    expect(typeof (m)).toBe("object");
});

test("Can set object properties using the Constructor", () => {
    const m = new Manager("Bob", 1, "bob@email.com", 123456789);
    expect(m.name).toBe("Bob");
    expect(m.id).toBe(1);
    expect(m.email).toBe("bob@email.com");
    expect(m.officeNumber).toBe(123456789);
});

test("Get Functions return object properties from the Constructor", () => {
    const m = new Manager("Bob", 1, "bob@email.com", 123456789);
    expect(m.getName()).toBe("Bob");
    expect(m.getId()).toBe(1);
    expect(m.getEmail()).toBe("bob@email.com");
    expect(m.getOfficeNumber()).toBe(123456789);
});