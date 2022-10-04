type MapArabicToRoman = {
  arabic: number;
  roman: string;
};

const arabicToRoman: MapArabicToRoman[] = [
  { arabic: 4, roman: 'IV' },
  { arabic: 1, roman: 'I' },
  { arabic: 5, roman: 'V' },
  { arabic: 10, roman: 'X' },
];

export class Convertor {
  static toRoman(fromArabic: number) {
    if (fromArabic <= 0) {
      return '';
    }

    const { highestArabic, highestRoman } =
      Convertor.getHighestValues(fromArabic);

    return highestRoman.concat(Convertor.toRoman(fromArabic - highestArabic));
  }

  private static getHighestValues(fromArabic: number) {
    const highest = arabicToRoman
      .sort(descending)
      .find(({ arabic }) => fromArabic >= arabic);

    return { highestArabic: highest.arabic, highestRoman: highest.roman };
  }
}

const descending = (first: MapArabicToRoman, second: MapArabicToRoman) =>
  second.arabic - first.arabic;
