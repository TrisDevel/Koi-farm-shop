test('submits the form with valid data', () => {
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'johndoe' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'password123' } });
    
    // Simulate reCAPTCHA token
    fireEvent.change(screen.getByLabelText(/reCAPTCHA/i), { target: { value: 'mock-token' } });

    fireEvent.click(screen.getByRole('button', { name: /Sign Up/i }));

    // Here you would typically check if the registration logic was called   // For example, you could mock a registration function and check if it was called
});
test('renders the registration form', () => {
    expect(screen.getByText(/Sign up/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
});
