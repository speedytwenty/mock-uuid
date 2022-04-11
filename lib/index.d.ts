export declare class mockUuid {
    static getIncrementalGenerator(seed?: number, uuidVersion?: number, variant?: number): () => string;
    static getGenerator(seed?: number, uuidVersion?: number, variant?: number): (i: number) => string;
    static get(i: number, seed?: number, uuidVersion?: number, variant?: number): string;
    private static getHexNumber;
}
export declare const v2: () => string;
export declare const v3: () => string;
export declare const v4: () => string;
export declare const v5: () => string;
