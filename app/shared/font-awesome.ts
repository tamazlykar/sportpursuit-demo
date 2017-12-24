export class FontAwesome {
  public static getHexCode(name: string): number {
    if (name2Hex[name]) {
      return name2Hex[name];
    }

    return null;
  }
}

const name2Hex = {
  'fa-bicycle': 0xf206,
  'fa-clock-o': 0xf017
};
