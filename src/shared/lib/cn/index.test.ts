import { cn } from './index';

describe('cn', () => {
    test('one parameters', () => {
        expect(cn('someClass')).toBe('someClass');
    });

    test('one parameters with additional', () => {
        expect(cn('someClass', ['block', 'red'])).toBe('someClass block red');
    });

    test('one parameters with additional and mods', () => {
        const exception = 'someClass block red hovered scrollable';
        expect(cn('someClass', ['block', 'red'], { hovered: true, scrollable: true })).toBe(exception);
    });

    test('one parameters with additional and mods and false', () => {
        const exception = 'someClass block red scrollable';
        expect(cn('someClass', ['block', 'red'], { hovered: false, scrollable: true })).toBe(exception);
    });

    test('one parameters with additional and mods and undefined', () => {
        const exception = 'someClass block red scrollable';
        expect(cn('someClass', ['block', 'red'], { hovered: undefined, scrollable: true })).toBe(exception);
    });
});
