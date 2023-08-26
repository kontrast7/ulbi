import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from '@ui';

describe('classNames', () => {
    test('with only first param', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
    });
});
