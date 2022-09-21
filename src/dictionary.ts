type ToReplace = string[] | undefined;

export class Dictionary {
  static replace(value: string, toReplace: ToReplace[]) {
    if (toReplace.length === 0) {
      return value;
    }

    let result = value;
    toReplace.forEach((elementToReplace) => {
      const match = `$${elementToReplace[0]}$`;
      result = result.replaceAll(match, elementToReplace[1]);
    });

    return result;
  }
}
