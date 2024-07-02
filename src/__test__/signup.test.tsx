
import {fireEvent, render,screen} from '@testing-library/react'
import Signup from "@/pages/signupPage";
import { BrowserRouter } from "react-router-dom";
test('renders Signup component', () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );
  
    expect(screen.getByText(/Sign up/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Confirm Password:/i)).toBeInTheDocument();
  });

  test('displays error messages for empty required fields',()=>{
    render(<BrowserRouter>
    <Signup/>
    </BrowserRouter>)

    fireEvent.submit(screen.getByRole('button',{name:/REGISTER/i}))

    expect(screen.getByText(/Username is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/password is required/i)).toBeInTheDocument();

  })

