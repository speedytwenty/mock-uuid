export class mockUuid {
  public static getIncrementalGenerator(
    seed = Math.E,
    uuidVersion = 4,
    variant = 1
  ) {
    let i = 0;
    return () => this.get(i++, seed, uuidVersion, variant);
  }

  public static getGenerator(seed = Math.E, uuidVersion = 4, variant = 1) {
    return (i: number) => this.get(i, seed, uuidVersion, variant);
  }

  public static get(i: number, seed = Math.E, uuidVersion = 4, variant = 1) {
    if (uuidVersion < 2 || uuidVersion > 5) {
      throw new Error(`Mock UUID: Version ${uuidVersion} is not supported`);
    }
    if (variant < 0 || variant > 3) {
      throw new Error(`Mock UUID: Variant ${variant} is not supported`);
    }
    return `${this.getHexNumber(i * 5, 8, seed)}-${this.getHexNumber(
      i * 5 + 1,
      4,
      seed
    )}-${uuidVersion}${this.getHexNumber(i * 5 + 2, 3, seed)}-${
      ["8", "9", "a", "b"][variant]
    }${this.getHexNumber(i * 5 + 3, 3, seed)}-${this.getHexNumber(
      i * 5 + 4,
      12,
      seed
    )}`;
  }

  private static getHexNumber = (index: number, length: number, seed: number) =>
    Math.round(
      Math.abs(Math.sin(10 * (seed + index)) * (2 ** (length * 4) - 1))
    )
      .toString(16)
      .padStart(length, "0");
}
