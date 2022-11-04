import { Letter } from './letter';

interface ValidsProps {
  values: Letter[];
}

export class ValidLetters {
  constructor(private readonly props: ValidsProps) {}

  static create(): ValidLetters {
    return new ValidLetters({ values: [] });
  }

  add(letter: Letter) {
    this.props.values.push(letter);
  }

  contains(letter: Letter): boolean {
    return this.props.values.some((valid) => valid.equals(letter));
  }
}
