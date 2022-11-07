const Engineer = require('../utils/engineer.js');

test("Can instantiate Engineer instance", () => {
    const e = new Engineer();
    expect(typeof (e)).toBe("object");
});

test("Can set object properties using the Constructor", () => {
    const m = new Engineer("Bob", 1, "bob@email.com", "bobgithub");
    expect(m.name).toBe("Bob");
    expect(m.id).toBe(1);
    expect(m.email).toBe("bob@email.com");
    expect(m.github).toBe("bobgithub");
});

test("Get Functions return object properties from the Constructor", () => {
    const m = new Engineer("Bob", 1, "bob@email.com");
    expect(m.getName).toBe("Bob");
    expect(m.getId).toBe(1);
    expect(m.getEmail).toBe("bob@email.com");
    expect(m.getGithub).toBe("bobgithub");
});