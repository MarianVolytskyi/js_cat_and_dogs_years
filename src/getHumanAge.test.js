'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('Cat and dog ages are less than 15 should return [0, 0]', () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  test('Cat and dog ages are between 15 and 24 should return [1, 1]', () => {
    expect(getHumanAge(23, 23)).toEqual([1, 1]);
  });

  test('Cat and dog ages are between 24 and 27 should return [2, 2]', () => {
    expect(getHumanAge(27, 27)).toEqual([2, 2]);
  });

  test('Cat age is 28 and dog age is 28 should return [3, 2]', () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  test('Cat age is 100 and dog age is 100 should return [21, 17]', () => {
    expect(getHumanAge(100, 100)).toEqual([21, 17]);
  });
});
