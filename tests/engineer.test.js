const Engineer = require('../lib/engineer');

test('engineer object', () => {
    const engineer = new Engineer('Helen', 27, 'helenhosse@gmail.com', 'helen27');
    expect(engineer.github).toEqual(expect.any(String));
});

test('engineer github', () => {
    const engineer = new Engineer ('Helen', 27, 'helenhosse@gmail.com', 'Helen27');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// test('engineer ID', () => {
//     const employee = new employee('Helen', 27, 'helenhosse@gmail.com');
//     expect(employee.getID()).toEqual(expect.any(Number));
// });

// test('engineer email', () => {
//     const employee = new employee('Helen', 27, 'helenhosse@gmail.com');
//     expect(employee.getEmail()).toEqual(epect.stringContaining(employee.email.toString()));
// });

test('engineer role', () => {
    const engineer = new Engineer('Helen', 27, 'helenhosse@gmail.com', 'Helen27');
    expect(engineer.getRole()).toEqual("engineer");
});