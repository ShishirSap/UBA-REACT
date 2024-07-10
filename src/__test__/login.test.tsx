
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from '../pages/loginPage';




describe('Login Component', () => {
    const setup = () => {
      return render(
        <Router>
          <Login />
        </Router>
      );
    };
  
    test('renders the login form', () => {
      setup();
      expect(screen.getByRole('heading', { name: /Sign in/i })).toBeInTheDocument();
      expect(screen.getByLabelText(/Email Address:/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Password:/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Sign in/i })).toBeInTheDocument();
      expect(screen.getByText(/Don't have an account\?/i)).toBeInTheDocument();
      expect(screen.getByText(/Signup now/i)).toBeInTheDocument();
    });
  
    test('displays error messages for empty fields', () => {
      setup();
      const submitButton = screen.getByRole('button', { name: /Sign in/i });
      fireEvent.click(submitButton);
  
      expect(screen.getByText('Email is required')).toBeInTheDocument();
      expect(screen.getByText('Password is required')).toBeInTheDocument();
    });
  
    test('displays error message for short password', () => {
      setup();
      const emailInput = screen.getByLabelText(/Email Address:/i);
      const passwordInput = screen.getByLabelText(/Password:/i);
      const submitButton = screen.getByRole('button', { name: /Sign in/i });
  
      fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'short' } });
      fireEvent.click(submitButton);
  
      expect(screen.getByText('Password must have at least 8 characters')).toBeInTheDocument();
    });
  
    test('displays error message for password without a number or special character', () => {
      setup();
      const emailInput = screen.getByLabelText(/Email Address:/i);
      const passwordInput = screen.getByLabelText(/Password:/i);
      const submitButton = screen.getByRole('button', { name: /Sign in/i });
  
      fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'Password' } });
      fireEvent.click(submitButton);
  
      expect(screen.getByText('Password must contain at least one number and a special character')).toBeInTheDocument();
    });
  
    test('submits the form successfully with valid data', () => {
      setup();
      const emailInput = screen.getByLabelText(/Email Address:/i);
      const passwordInput = screen.getByLabelText(/Password:/i);
      const submitButton = screen.getByRole('button', { name: /Sign in/i });
  
      fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'Password1!' } });
      fireEvent.click(submitButton);
  
      expect(screen.queryByText('Email is required')).not.toBeInTheDocument();
      expect(screen.queryByText('Password is required')).not.toBeInTheDocument();
      expect(screen.queryByText('Password must have at least 8 characters')).not.toBeInTheDocument();
      expect(screen.queryByText('Password must contain at least one number and a special character')).not.toBeInTheDocument();
    });
  });