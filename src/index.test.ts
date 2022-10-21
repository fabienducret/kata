import { Convertor } from './index';

describe('Index test', () => {
  test('convert -1 to empty string', () => {
    expect(Convertor.toRoman(-1)).toEqual('');
  });

  test('convert 0 to empty string', () => {
    expect(Convertor.toRoman(0)).toEqual('');
  });

  test('convert 1 to I', () => {
    expect(Convertor.toRoman(1)).toEqual('I');
  });

  test('convert 3 to III', () => {
    expect(Convertor.toRoman(3)).toEqual('III');
  });

  test('convert 4 to IV', () => {
    expect(Convertor.toRoman(4)).toEqual('IV');
  });

  test('convert 6 to VI', () => {
    expect(Convertor.toRoman(6)).toEqual('VI');
  });

  test('convert 9 to IX', () => {
    expect(Convertor.toRoman(9)).toEqual('IX');
  });

  test('convert 12 to XII', () => {
    expect(Convertor.toRoman(12)).toEqual('XII');
  });

  test('convert 14 to XIV', () => {
    expect(Convertor.toRoman(14)).toEqual('XIV');
  });

  test('convert 22 to XXII', () => {
    expect(Convertor.toRoman(22)).toEqual('XXII');
  });
});
