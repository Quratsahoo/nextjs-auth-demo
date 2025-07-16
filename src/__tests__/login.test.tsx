import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from '../app/login/page';
import { useRouter } from 'next/navigation';

// ✅ Mock the Next.js router
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('LoginPage', () => {
  const pushMock = jest.fn();

  beforeEach(() => {
    // Mock router's push method
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    });

    pushMock.mockClear();
    localStorage.clear();
  });

  it('renders login form', () => {
    render(<LoginPage />);
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
  });

  it('shows error for invalid credentials', () => {
    render(<LoginPage />);

    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: 'wrong@example.com' },
    });

    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'wrongpass' },
    });

    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));

    expect(screen.getByText(/invalid email or password/i)).toBeInTheDocument();
    expect(pushMock).not.toHaveBeenCalled();
  });

  it('logs in and redirects with valid credentials', () => {
    render(<LoginPage />);

    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: 'demo@example.com' },
    });

    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'password' },
    });

    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));

    expect(localStorage.getItem('user')).toBe('demo@example.com');
    expect(pushMock).toHaveBeenCalledWith('/dashboard');
  });
});
