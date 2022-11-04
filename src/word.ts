import { Letter } from './letter';
import { ValidLetters } from './valid-letters';

interface WordProps {
  value: string;
}

export class Word {
  private constructor(private readonly props: WordProps) {}

  static create(fromValue: string): Word {
    return new Word({ value: fromValue.toUpperCase() });
  }

  contains(letter: Letter): boolean {
    return this.props.value.indexOf(letter.value()) > -1;
  }

  guessed(validLetters: ValidLetters): boolean {
    return [...this.props.value].every((char) =>
      validLetters.contains(Letter.create(char))
    );
  }
}
