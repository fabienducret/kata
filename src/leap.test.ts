import { isLeap } from './leap';

describe('Leap year kata', () => {
  test('divisible by 400', () => {
    expect(isLeap(400)).toBeTruthy();
    expect(isLeap(500)).toBeFalsy();
    expect(isLeap(2000)).toBeTruthy();
  });

  test('divisible by 100 but not by 400', () => {
    expect(isLeap(1800)).toBeFalsy();
    expect(isLeap(2100)).toBeFalsy();
  });

  test('divisible by 4 but not 100', () => {
    expect(isLeap(2008)).toBeTruthy();
    expect(isLeap(2012)).toBeTruthy();
    expect(isLeap(2016)).toBeTruthy();
  });

  test('not divisible by 4', () => {
    expect(isLeap(2017)).toBeFalsy();
    expect(isLeap(2018)).toBeFalsy();
    expect(isLeap(2019)).toBeFalsy();
  });
});
