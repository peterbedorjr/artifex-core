import createRouteHandler from '../createRouteHandler.js';

describe('CreateRouteHandler', () => {
    test('createRoundHandler is a function', () => {
        expect(typeof createRouteHandler).toBe('function');
    });

    test('createRoundHandler returns an object', () => {
        expect(typeof createRouteHandler(jest.fn)).toBe('object');
    });

    test('createRoundHandler returns an object with keys when all properties are set', () => {
        const fn = jest.fn;
        const before = jest.fn;
        const handler = createRouteHandler(fn, { before }, 'name');

        expect(handler).toMatchObject({
            uses: fn,
            as: 'name',
            hooks: { before },
        });
    });
});
