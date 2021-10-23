import { _slice, _castString, _copy, _equals } from '../types';

describe('types', () => {
    test('_slice is Array.slice', () => {
        expect(_slice).toBe(Array.prototype.slice);
    });

    test('_castString casts string to int', () => {
        expect(_castString('1')).toStrictEqual(1);
    });

    test('_castString casts string to null', () => {
        expect(_castString('null')).toStrictEqual(null);
    });

    test('_castString casts string to true', () => {
        expect(_castString('true')).toStrictEqual(true);
    });

    test('_castString casts string to false', () => {
        expect(_castString('false')).toStrictEqual(false);
    });

    test('_copy copies array', () => {
       const arr = [1, 2, 3];

       expect(_copy(arr)).toStrictEqual([1, 2, 3]);
    });

    test('_copy copies object', () => {
        const obj = {
            key: 'value',
            key1: 'value1',
        };

        expect(_copy(obj)).toStrictEqual({
            key: 'value',
            key1: 'value1',
        });
    });

    test('_copy copies deep object', () => {
        const obj = {
            key: 'value',
            key1: 'value1',
            deep: {
                one: 'one',
                two: {
                    three: 'three',
                },
            },
        };

        expect(_copy(obj)).toStrictEqual({
            key: 'value',
            key1: 'value1',
            deep: {
                one: 'one',
                two: {
                    three: 'three',
                },
            },
        });
    });
});
