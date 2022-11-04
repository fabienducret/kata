import { Hangman, State } from './hangman';
import { Errors } from './letter';

describe('Index test', () => {
  let hangman: Hangman;

  beforeEach(() => {
    hangman = new Hangman('floor');
  });

  test('guess and return a state', () => {
    const state = hangman.guess('F');
    expect(state).toEqual(State.InProgress);
  });

  test('should throw if guess word', () => {
    const guess = () => hangman.guess('fl');
    expect(guess).toThrowError(Errors.OnlyCapsLetter);
  });

  test('should throw if guess number', () => {
    const guess = () => hangman.guess('1');
    expect(guess).toThrowError(Errors.OnlyCapsLetter);
  });

  test('should throw if not caps letter', () => {
    const guess = () => hangman.guess('a');
    expect(guess).toThrowError(Errors.OnlyCapsLetter);
  });

  test('guess and return an invalid guess state', () => {
    const letterToGuess = 'Z';

    const state = hangman.guess(letterToGuess);
    const invalidLetters = hangman.invalidLetters();

    expect(invalidLetters.values()[0].value()).toEqual(letterToGuess);
    expect(state).toEqual(State.InvalidGuess);
  });

  test('return a duplicate state', () => {
    hangman.guess('F');
    const state = hangman.guess('F');

    expect(state).toEqual(State.Duplicate);
  });

  test('loose game', () => {
    hangman.guess('X');
    hangman.guess('X');
    const state = hangman.guess('X');

    expect(state).toEqual(State.Loose);
  });

  test('guess and return an valid guess state', () => {
    hangman.guess('F');
    hangman.guess('L');
    hangman.guess('O');
    const state = hangman.guess('R');

    expect(state).toEqual(State.Win);
  });

  test('guess unordered and return an valid guess state', () => {
    hangman.guess('R');
    hangman.guess('O');
    hangman.guess('F');
    const state = hangman.guess('L');

    expect(state).toEqual(State.Win);
  });
});
