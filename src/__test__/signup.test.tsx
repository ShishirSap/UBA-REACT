
import {fireEvent, render,screen} from '@testing-library/react'
import Signup from "@/pages/signupPage";
import { BrowserRouter } from "react-router-dom";




describe('Testing Signup Component', () => {



  function setup(){
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );
  
  }
  test('renders Signup component', () => {
     setup()
    
      expect(screen.getByText(/Sign up/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Name:/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Email Address:/i)).toBeInTheDocument();
      expect(screen.getByLabelText('Password:')).toBeInTheDocument();//exact match for Password:
      expect(screen.getByLabelText(/Confirm Password:/i)).toBeInTheDocument();
    });
  
    test('displays error messages for empty required fields',()=>{
      setup()
  
      fireEvent.submit(screen.getByRole('button',{name:/REGISTER/i}))
  
      expect(screen.getByText(/Username is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/password is required/i)).toBeInTheDocument();
  
    })
  
    test('displays error message for short password', () => {
      setup()
     
  
      const passwordInput = screen.getByLabelText('Password:');
      const submitButton = screen.getByText('REGISTER');
  
      fireEvent.change(passwordInput, { target: { value: 'short' } });
      fireEvent.click(submitButton);
  
      expect(screen.getByText('Password must be at least 8 characters')).toBeInTheDocument();
    });
  
    test('displays error message for password without special characters',()=>{
      setup()
      const passwordInput = screen.getByLabelText('Password:');
      const submitButton = screen.getByText('REGISTER');
      fireEvent.change(passwordInput, { target: { value: 'shortshort' } });
      fireEvent.click(submitButton)
      expect(screen.getByText('Password must contain at least one number and one special character'))
      
      
  
    })
  
    test('displays error message for unequal password and confirm password',()=>{
      setup()
      const passwordInput=screen.getByLabelText('Password:')
      const confirmpasswordInput=screen.getByLabelText('Confirm Password:')
      const submitButton = screen.getByText('REGISTER');
  
      fireEvent.change(passwordInput,{target:{value:'Password@123'}})
      fireEvent.change(confirmpasswordInput,{target:{value:'Password@12'}})
  
      fireEvent.click(submitButton)
      expect(screen.getByText('Password and confirm password donot match'))
  
    })
  
    test('submits the form successfully with valid data', () => {
      setup();
      const nameInput = screen.getByLabelText('Name:');
      const emailInput = screen.getByLabelText('Email Address:');
      const passwordInput = screen.getByLabelText(/^Password:$/i);
      const confirmPasswordInput = screen.getByLabelText(/^Confirm Password:$/i);
      const submitButton = screen.getByText('REGISTER');
  
      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'Password1!' } });
      fireEvent.change(confirmPasswordInput, { target: { value: 'Password1!' } });
      fireEvent.click(submitButton);
  
      expect(screen.queryByText('Username is required')).not.toBeInTheDocument();
      expect(screen.queryByText('Email is required')).not.toBeInTheDocument();
      expect(screen.queryByText('password is required')).not.toBeInTheDocument();
      expect(screen.queryByText('Password must be at least 8 characters')).not.toBeInTheDocument();
      expect(screen.queryByText('Password must contain at least one number and one special character')).not.toBeInTheDocument();
      expect(screen.queryByText('Confirm password is required')).not.toBeInTheDocument();
      expect(screen.queryByText('Password and confirm password donot match')).not.toBeInTheDocument();
    });
  
  
  
  
  
})
