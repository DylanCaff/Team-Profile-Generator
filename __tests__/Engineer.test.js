const { Engineer } = require('../lib/Engineer');

describe('Engineer class', () => {
    test('creates a new Engineer instance', () => {
      const employee = new Engineer('Dylan Cafferatta', 321, 'dylancaff0902@gmail.com', 'dylancaff');
  
      expect(employee.name).toBe('Dylan Cafferatta');
      expect(employee.id).toEqual(expect.any(Number));
      expect(employee.email).toEqual(expect.any(String));
      expect(employee.github).toEqual(expect.any(String));
    });
  
    test('has correct methods', () => {
      const employee = new Engineer('Dylan Cafferatta', 321, 'dylancaff0902@gmail.com', 'jdylancaff');
  
      expect(employee.getName()).toBe(employee.name);
      expect(employee.getId()).toBe(employee.id);
      expect(employee.getEmail()).toBe(employee.email);
      expect(employee.getGithub()).toBe(employee.github);
      expect(employee.getRole()).toBe('Engineer');
    });
  });