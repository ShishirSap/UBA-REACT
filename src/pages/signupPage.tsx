import React, { useState } from "react";
import logo from '../assets/logo.jpeg'
import { Link } from "react-router-dom";
import PasswordInput from "../components/passwordInput";
import usePasswordToggle from "../hooks/passwordToggler";


 const Signup:React.FC =()=>{
  const { isFieldVisible, toggleVisibility } = usePasswordToggle();

  const [formData,setFormData]=useState({
    name:'',
    email:'',
    password:'',
    confirmpassword:'',
    
  })

  const [errors,setErrors]=useState({
    name:'',
    email:'',
    password:'',
    confirmpassword:''
  })

  const validateSignupForm=()=>{
    let isValid=true
    let formErrors={name:'',email:'',password:'',confirmpassword:''}
    if(!formData.name){
      formErrors.name='Username is required'
      isValid=false
    }
    if(!formData.email){
      formErrors.email='Email is required'
      isValid=false
    }
    if(!formData.password){
      formErrors.password='password is required'
      isValid=false
    }else if(formData.password.length<8){
      formErrors.password='Password must be at least 8 characters';
      isValid=false
    }
    else {
      const numberRegex = /[0-9]/;
      const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
      if (!numberRegex.test(formData.password)) {
        formErrors.password = 'Password must contain at least one number';
        isValid = false;
      }
      else if (!specialCharRegex.test(formData.password)) {
        formErrors.password = 'Password must contain at least one special character';
        isValid = false;
      }
     else if(!formData.confirmpassword){
        formErrors.confirmpassword='Confirm password is required'
        isValid=false
  
      }
      else{
        if(formData.password!==formData.confirmpassword){
          formErrors.confirmpassword='Password and confirm password donot match'
        }
      }
    }


   

    setErrors(formErrors)
    console.log('Errors are', formErrors)
    return isValid;

   

  }

const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault()
if(validateSignupForm()){
  console.log('Form submitted',formData)
}
}

const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{

const {name,value}=e.target;

setFormData({
  ...formData,
  [name]:value,
  
})

}


return (
    <div className="m-0"> 
    <div className="flex bg-gradient-to-r from-[#001aff00] to-[#0e579f] md:bg-none flex-col gap-10 w-screen h-screen  md:flex md:flex-row ">
      <div className="flex  p-1 items-start w-1/5 md:w-1/2 md:items-center">
        <img src={logo} alt="logo"/>
      </div>

   
     
        <form onSubmit={handleSubmit} id="registrationForm" className="  h-full flex gap-4 flex-col   w-full   md:justify-center md:bg-gradient-to-r from-[#001aff00] to-[#0e579f]">
         
           <div className="text-center"><h1 className="text-2xl font-bold mb-2">Sign up</h1>
           
              <Link className="text-gray-700 font-semibold underline" to="/login" id="Signin"
                >Or sign in to your account</Link>
              </div> 
          
          <div className=" font-sans font-semibold  flex flex-col   justify-center items-center gap-y-4">

            <div className="w-4/5 vsm:w-1/2 "><label className="block" htmlFor="name">Name:</label>
              <i className="text-green-700 absolute ml-1 pt-1 fa fa-user icon"></i>
              <input
              onChange={handleChange}
                className="w-full  border-2 border-black  rounded-full mb-20px pl-6"
                type="text"
                id="name"
                name="name"
              />
              {errors.name && <span className='text-red-700'>{errors.name}</span>}
              </div>
            

              <div className="w-4/5 vsm:w-1/2 ">
                <label className="block" htmlFor="email">Email Address:</label>
            <i className="text-green-700 absolute ml-1 pt-1 fa fa-envelope icon"></i>
            <input
            onChange={handleChange}
              className="border-2 border-black  rounded-full pl-6 w-full  mb-20px"
              type="email"
              id="email"
              name="email"
            />
                          {errors.email && <span className='text-red-700'>{errors.email}</span>}

              </div>

<div className="w-4/5 vsm:w-1/2 ">
            <label className="block" htmlFor="confirm-password">Password:</label>
            <i className="text-green-700 absolute ml-1 pt-1 fa fa-key icon"></i>
              <PasswordInput id="password" className="border-2 border-black  rounded-full w-full text-center mb-20px" name="password" value={formData.password} onChange={handleChange} placeholder='' isVisible={isFieldVisible('password')} onToggleVisibility={()=>toggleVisibility('password')} />
              {errors.password && <span className='text-red-700'>{errors.password}</span>}
</div>




<div className="w-4/5 vsm:w-1/2 ">
            <label className="block" htmlFor="confirm-password">Confirm Password:</label>
            <i className="text-green-700 absolute ml-1 pt-1 fa fa-key icon"></i>
              <PasswordInput id="confirm-password"  className="border-2 border-black  rounded-full w-full text-center mb-20px" name="confirmpassword" value={formData.confirmpassword} onChange={handleChange} placeholder='' isVisible={isFieldVisible('confirmpassword')} onToggleVisibility={()=>toggleVisibility('confirmpassword')} />
              {errors.confirmpassword && <span className='text-red-700'>{errors.confirmpassword}</span>}
</div>
      
           <div className="text-white p-1 text-center hover:bg-green-600 hover:cursor-pointer rounded-full mt-4 text-xl font-mono font-bold w-4/5 vsm:w-1/2 bg-green-800"><button className="" type="submit">REGISTER</button></div>
          </div>
          
        </form>
    </div>
  </div>
)
}
export default Signup