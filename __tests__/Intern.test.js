const { Intern } = require('../lib/Intern');

describe('Intern class tests', () => {
    test('Creates new Intern', () => {
      const employee = new Intern('Dylan Cafferatta', 321, 'dylancaff0902@gmail.com', 'GA Tech');
      expect(employee).toEqual(expect.objectContaining({
        name: 'Dylan Cafferatta',
        id: expect.any(Number),
        email: expect.any(String),
        school: expect.any(String),
      }));
    });
  
    test('Checks all methods for Interns class', () => {
      const employee = new Intern('Dylan Cafferatta', 321, 'dylancaff0902@gmail.com', 'GA Tech');
      expect(employee.getName()).toBe('Dylan Cafferatta');
      expect(employee.getId()).toBe(321);
      expect(employee.getEmail()).toBe('dylancaff0902@gmail.com');
      expect(employee.getSchool()).toBe('GA Tech');
      expect(employee.getRole()).toBe('Intern');
    });
  });