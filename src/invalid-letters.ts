import { Letter } from './letter';

interface InvalidProps {
  values: Letter[];
}

const MAX_ERROR = 3;

export class InvalidLetters {
  constructor(private readonly props: InvalidProps) {}

  static create(): InvalidLetters {
    return new InvalidLetters({ values: [] });
  }

  add(letter: Letter) {
    this.props.values.push(letter);
  }

  values(): Letter[] {
    return this.props.values;
  }

  maxErrorIsReached(): boolean {
    return this.props.values.length >= MAX_ERROR;
  }
}
