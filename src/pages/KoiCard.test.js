import { render, screen } from '@testing-library/react';
import KoiCard from './KoiCard';

test('renders KoiCard with correct title', () => {
    render(<KoiCard title="Kin Showa" />);
    const titleElement = screen.getByText(/Kin Showa/i);
    expect(titleElement).toBeInTheDocument();
});