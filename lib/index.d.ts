export declare class mockUuid {
    private static getHexNumber;
    static getIncrementalGenerator(seed?: number, uuidVersion?: number, variant?: number): () => string;
    static getGenerator(seed?: number, uuidVersion?: number, variant?: number): (i: number) => string;
    static get(i: number, seed?: number, uuidVersion?: number, variant?: number): string;
}
