const Employee = require('../lib/Employee');


describe('Employee class', () => {
    test('creates new employee', () => {
        const name = 'Dylan Cafferatta';
        const id = 321;
        const email = 'dylancaff0902@gmail.com';
        const employee = new Employee(name, id, email);

        expect(employee.name).toBe(name);
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
    });

    test('checks all methods', () => {
        const name = 'Dylan Cafferatta';
        const id = 321;
        const email = 'dylancaff0902@gmail.com';
        const employee = new Employee(name, id, email);

        expect(employee.getName()).toBe(name);
        expect(employee.getId()).toBe(id);
        expect(employee.getEmail()).toBe(email);
        expect(employee.getRole()).toBe('Employee');
    });
});