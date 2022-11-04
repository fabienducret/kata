import { InvalidLetters } from './invalid-letters';
import { Letter } from './letter';
import { ValidLetters } from './valid-letters';
import { Word } from './word';

export enum State {
  InProgress = 'IN_PROGRESS',
  InvalidGuess = 'INVALID_GUESS',
  Duplicate = 'DUPLICATE',
  Win = 'WIN',
  Loose = 'LOOSE',
}

export class Hangman {
  private readonly invalids: InvalidLetters;
  private readonly valids: ValidLetters;
  private readonly word: Word;

  constructor(fromValue: string) {
    this.word = Word.create(fromValue);
    this.valids = ValidLetters.create();
    this.invalids = InvalidLetters.create();
  }

  guess(fromValue: string): State {
    const letter = Letter.create(fromValue);

    if (this.wordDoesNotContain(letter)) {
      return this.handleInvalidGuess(letter);
    }

    if (this.valids.contains(letter)) {
      return State.Duplicate;
    }

    this.valids.add(letter);

    return this.isWordGuessed() ? State.Win : State.InProgress;
  }

  invalidLetters(): InvalidLetters {
    return this.invalids;
  }

  private wordDoesNotContain(letter: Letter): boolean {
    return !this.word.contains(letter);
  }

  private handleInvalidGuess(letter: Letter): State {
    this.invalids.add(letter);

    return this.invalids.maxErrorIsReached() ? State.Loose : State.InvalidGuess;
  }

  private isWordGuessed(): boolean {
    return this.word.guessed(this.valids);
  }
}
