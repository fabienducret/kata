import { Dictionary } from './dictionary';

describe('Dictionary Replacer', () => {
  test('success', () => {
    expect(true).toBeTruthy();
  });

  test('empty dic', () => {
    const result = Dictionary.replace('', []);

    expect(result).toEqual('');
  });

  test('value with empty dic', () => {
    const result = Dictionary.replace('toto', []);

    expect(result).toEqual('toto');
  });

  test('dic with 1 value', () => {
    const result = Dictionary.replace('$temp$', [['temp', 'tempory']]);

    expect(result).toEqual('tempory');
  });

  test('dic with 2 values', () => {
    const result = Dictionary.replace('$temp$ here comes the name $name$', [
      ['temp', 'temporary'],
      ['name', 'John Doe'],
    ]);

    expect(result).toEqual('temporary here comes the name John Doe');
  });
});
