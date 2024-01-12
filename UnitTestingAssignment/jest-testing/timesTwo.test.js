const { default: TestRunner } = require('jest-runner');
const timesTwo = require('./timesTwo');

test('returns the number times 2', () => {
    expect(timesTwo(4)).toBe(8);
})