import { render, screen } from '@testing-library/react';
import About from './About';
test('renders the About page with correct title', () => {
    render(<About />);
    expect(screen.getByText(/ABOUT OUR FARM HISTORY/i)).toBeInTheDocument();
    expect(screen.getByText(/We began our journey in 1967/i)).toBeInTheDocument();
});
test('renders the commitment to quality section', () => {
    expect(screen.getByText(/The Kodama Commitment to Quality/i)).toBeInTheDocument();
    expect(screen.getByText(/We are dedicated to koi health and use a strict quarantine system/i)).toBeInTheDocument();
});
