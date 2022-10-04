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

    const highest = Convertor.getHighestValues(fromArabic);

    return highest.roman.concat(Convertor.toRoman(fromArabic - highest.arabic));
  }

  private static getHighestValues(fromArabic: number) {
    return arabicToRoman
      .sort(descending)
      .find(({ arabic }) => fromArabic >= arabic);
  }
}

const descending = (first: MapArabicToRoman, second: MapArabicToRoman) =>
  second.arabic - first.arabic;
