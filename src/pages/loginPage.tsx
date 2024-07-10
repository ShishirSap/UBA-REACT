import { useState } from 'react'
import React from 'react'
import logo from '../assets/logo.jpeg'
import { Link } from 'react-router-dom'
import PasswordInput from "../components/passwordInput";
import usePasswordToggle from "../hooks/passwordToggler";

const Login:React.FC = () => {

  const { isFieldVisible, toggleVisibility } = usePasswordToggle();

  const [formData,setFormData]=useState({
    email:'',
    password:'',
  })


  const [errors,setErrors]=useState({
    email:'',
    password:'',
  })
const validateLoginForm=()=>{
  let isValid=true
  let formErrors={email:'',password:''}
  if(!formData.email){
    formErrors.email='Email is required'
    isValid=false
  }

  if(!formData.password){
    formErrors.password='Password is required'
    isValid=false
  }
  else if(formData.password.length<8){
    formErrors.password='Password must have at least 8 characters'
  }
  else {
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!numberRegex.test(formData.password) || !specialCharRegex.test(formData.password))  {
      formErrors.password = 'Password must contain at least one number and a special character';
      isValid = false;
    }
   
}
setErrors(formErrors)
return isValid
}


const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
  if(validateLoginForm()){
    console.log('Form submitted',formData)
  }
}

const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
  const {name, value}=e.target;
  setFormData({
    ...formData,
    [name]:value,
  })

}




  return (
<div className="">
    <div className="flex bg-gradient-to-r from-[#001aff00] to-[#0e579f] md:bg-none flex-col gap-10 w-screen h-screen  md:flex md:flex-row">
        
        <div className="flex  p-1 items-start w-1/5 md:w-1/2 md:items-center"><img src={logo}/></div>



    <form id="registrationForm" onSubmit={handleSubmit} className=" h-full flex gap-4 flex-col   w-full  md:justify-center md:bg-gradient-to-r from-[#001aff00] to-[#0e579f]" action="" method="post">
    <h1 className=" text-center text-2xl font-bold mb-2">Sign in</h1>
    <div className=" font-sans font-semibold  flex flex-col   justify-center items-center gap-y-4">
        <div className="w-4/5 vsm:w-1/2"> <label className="block" htmlFor="email">Email Address:</label>  
            <i className="text-green-700 absolute ml-1 pt-1 fa fa-envelope icon fa fa-envelope icon"></i>       
             <input onChange={handleChange} className="w-full text-center border-2 border-black  rounded-full mb-20p" type="email" id="email" name="email" />
             {errors.email && <span className='text-red-700'>{errors.email}</span>}
            
             </div>

             <div className="w-4/5 vsm:w-1/2 ">
            <label className="block" htmlFor="password">Password:</label>
            <i className="text-green-700 absolute ml-1 pt-1 fa fa-key icon"></i>
              <PasswordInput id="password" className="border-2 border-black  rounded-full w-full text-center mb-20px" name="password" value={formData.password} onChange={handleChange} placeholder='' isVisible={isFieldVisible('password')} onToggleVisibility={()=>toggleVisibility('password')} />
              {errors.password && <span className='text-red-700'>{errors.password}</span>}
</div>

     <div className="w-4/5 vsm:w-1/2 text-white p-1 text-center hover:bg-green-600 hover:cursor-pointer rounded-full mt-4 text-xl font-mono font-bold  bg-green-800"><button type="submit">Sign in</button></div>
     <div  className="px-6">Don't have an account? <Link className=" inline underline" to="/signup">Signup now</Link></div>

</div>
 
   </form>
</div>
    
       
    
</div>

  )
}

export default Login
