export enum Errors {
  OnlyCapsLetter = 'Only accept errors',
}

interface LetterProps {
  value: string;
}

export class Letter {
  private constructor(private readonly props: LetterProps) {}

  static create(fromValue: string): Letter {
    const toLong = fromValue.length > 1;
    const notALetter = !/[A-Z]/.test(fromValue);

    if (toLong || notALetter) {
      throw new Error(Errors.OnlyCapsLetter);
    }

    return new Letter({ value: fromValue });
  }

  value(): string {
    return this.props.value;
  }

  equals(letter: Letter): boolean {
    return this.props.value === letter.value();
  }
}
