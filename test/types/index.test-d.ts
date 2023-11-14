import { expectAssignable } from 'tsd';
import { DeepEqualFn } from '../../';

type A = { a: number };
type B = { b: number };

expectAssignable<DeepEqualFn>((a: object, b: object) => true);
expectAssignable<DeepEqualFn>((objA: A, objB: B) => false);
expectAssignable<DeepEqualFn>((obj: object, obj2: object) => true);
