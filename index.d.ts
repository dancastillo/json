export type DeepEqualFn = ((a: any, b: any) => boolean) | ((a: object, b: object) => boolean) | (<T>(a: T, b: T) => boolean);
