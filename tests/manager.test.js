const Manager = require('../lib/manager');

test('manager object', () => {
    const manager = new Manager('Helen', 27, 'helenhosse@gmail.com', 7206608109);
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.getRole()).toEqual("manager");
});

test('employee role', () => {
    const manager = new Manager('Helen', 27, 'helenhosse@gmail.com', 72066608109);
    expect(manager.getRole()).toEqual("manager");
});