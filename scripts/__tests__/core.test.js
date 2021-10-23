import { $exec } from '../core';

describe('Core', () => {
    test('$exec executes a function', () => {
        const fn = jest.fn();

        $exec(fn);

        expect(fn).toHaveBeenCalled();
    });

    test('$exec executes multiple functions', () => {
        const fns = [jest.fn(), jest.fn(), jest.fn()];

        $exec(fns);

        expect(fns[0]).toHaveBeenCalled();
        expect(fns[1]).toHaveBeenCalled();
        expect(fns[2]).toHaveBeenCalled();
    });

    test('$exec can inject scope to functions', () => {
        let scope = { prop: 'value' };

        function fn() {
            return this.prop;
        }

        expect($exec(fn, { scope })).toBe('value');
    });

    test('$exec should optionally pass arguments array', () => {
        function fn() {
            return arguments[1];
        }

        expect($exec(fn, {
            args: [0, 1]
        })).toBe(1);
    });

    test('$exec should not return value if executing multiple functions', () => {
        const fns = [jest.fn(), jest.fn()]

        expect($exec(fns)).toBe(undefined);
    });
});
