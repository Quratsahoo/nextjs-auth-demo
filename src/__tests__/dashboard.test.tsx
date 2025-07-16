// dashboard.test.tsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import DashboardPage from '../app/dashboard/page';
import { useRouter } from 'next/navigation';

// ✅ Mock useRouter from next/navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('DashboardPage', () => {
  const pushMock = jest.fn();
  const replaceMock = jest.fn();

  beforeEach(() => {
    // 👇 Mock the router every time before a test
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
      replace: replaceMock,
    });

    pushMock.mockClear();
    replaceMock.mockClear();

    // 🔁 Optional: Clear previous localStorage entries
    localStorage.clear();
  });

  it('redirects to /login if no user in localStorage', async () => {
    // ❌ No user
    localStorage.removeItem('user');

    render(<DashboardPage />);

    await waitFor(() => {
      expect(replaceMock).toHaveBeenCalledWith('/login');
    });
  });

  it('renders dashboard content if user is in localStorage', () => {
    // ✅ Simulate a logged-in user
    localStorage.setItem('user', 'demo@example.com');

    render(<DashboardPage />);

    expect(screen.getByText(/welcome to your dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/successfully logged in/i)).toBeInTheDocument();
    expect(replaceMock).not.toHaveBeenCalled();
  });
});
