const { Manager } = require('../lib/Manager');

test('Creates new Manager', () => {
    const employee = new Manager('Dylan Cafferatta', 321, 'dylancaff0902@gmail.com', 1234567890);

    expect(employee.name).toBe("Dylan Cafferatta");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.officeNumber).toEqual(expect.any(Number));
})

test('Checks all methods for Manager class', () => {
    const employee = new Manager('Dylan Cafferatta', 321, 'dylancaff0902@gmail.com', 1234567890);

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getOfficeNumber()).toBe(employee.officeNumber);
    expect(employee.getRole()).toBe('Manager')

})