const intern = require('../lib/intern');

test('intern object', () => {
    const intern = new intern('Helen', 27, "helenhosse@gmail.com", 'CU');
    expect(intern.school).toEqual(expect.any(String));
});

test('intern school', () => {
    const intern = new intern('Helen', 27, 'helenhosse@gmail.com', 'CU');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('employee role', () => {
    const intern = new intern('Helen', 27, 'helenhosse@gmail.com', 'CU');
    expect(intern.getRole()).toEqual("intern");
});