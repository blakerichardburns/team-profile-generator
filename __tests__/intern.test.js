const Intern = require('../utils/intern.js');

test("Can instantiate Intern instance", () => {
    const i = new Intern();
    expect(typeof (i)).toBe("object");
});

test("Can set object properties using the Constructor", () => {
    const i = new Intern("Bob", 1, "bob@email.com", "bobschool");
    expect(i.name).toBe("Bob");
    expect(i.id).toBe(1);
    expect(i.email).toBe("bob@email.com");
    expect(i.github).toBe("bobschool");
});

test("Get Functions return object properties from the Constructor", () => {
    const i = new Intern("Bob", 1, "bob@email.com");
    expect(i.getName).toBe("Bob");
    expect(i.getId).toBe(1);
    expect(i.getEmail).toBe("bob@email.com");
    expect(i.getGithub).toBe("bobschool");
});