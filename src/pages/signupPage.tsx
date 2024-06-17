import React from "react";
import logo from '../assets/logo.jpeg'
import { Link } from "react-router-dom";

 const Signup:React.FC =()=>{
return (
    <body className="m-0"> 
    <div className="flex bg-gradient-to-r from-[#001aff00] to-[#0e579f] md:bg-none flex-col gap-10 w-screen h-screen  md:flex md:flex-row ">
      <div className="flex  p-1 items-start w-1/5 md:w-1/2 md:items-center">
        <img src={logo} alt="logo"/>
      </div>

   
     
        <form id="registrationForm" className="  h-full flex gap-4 flex-col   w-full   md:justify-center md:bg-gradient-to-r from-[#001aff00] to-[#0e579f]">
         
           <div className="text-center"><h1 className="text-2xl font-bold mb-2">Sign up</h1>
           
              <Link className="text-gray-700 font-semibold underline" to="/login" id="Signin"
                >Or sign in to your account</Link>
              </div> 
          
          <div className=" font-sans font-semibold  flex flex-col   justify-center items-center gap-y-4">

            <div className="w-4/5 vsm:w-1/2 "><label className="block" htmlFor="name">Name:</label>
              <i className="text-green-700 absolute ml-1 pt-1 fa fa-user icon"></i>
              <input
                className="w-full  border-2 border-black  rounded-full mb-20px pl-6"
                type="text"
                id="name"
                name="name"
              /></div>
            

              <div className="w-4/5 vsm:w-1/2 ">
                <label className="block" htmlFor="email">Email Address:</label>
            <i className="text-green-700 absolute ml-1 pt-1 fa fa-envelope icon"></i>
            <input
              className="border-2 border-black  rounded-full pl-6 w-full  mb-20px"
              type="email"
              id="email"
              name="email"
            />
              </div>
            
              <div className="w-4/5 vsm:w-1/2  "> <label className="block" htmlFor="password">Password:</label>
                <i className="text-green-700 absolute ml-1 pt-1 fa fa-key icon"></i>
                <input
                  className="border-2 border-black  rounded-full w-full text-center mb-20px"
                  type="password"
                  id="password"
                  name="password"
                />
                <div className="showpassword">
                <input type="checkbox" id="passwordcheck"/>
                <label className=" font-normal inline text-1rem text-[#372d2d]" htmlFor="passwordcheck">Show</label>
              </div>
              </div>
           

           <div className="w-4/5 vsm:w-1/2 ">
            <label className="block" htmlFor="confirm-password">Confirm Password:</label>
            <i className="text-green-700 absolute ml-1 pt-1 fa fa-key icon"></i>
            <input
              className="border-2 border-black  rounded-full w-full text-center mb-20px"
              type="password"
              id="confirm-password"
              name="confirm-password"
            />
            <div className="showpassword">
              <input type="checkbox" id="confirmpasswordcheck"/>
              <label className="font-normal inline text-1rem text-[#372d2d]" htmlFor="confirmpasswordcheck">Show</label>
            </div>

           </div> 
           <div className="text-white p-1 text-center hover:bg-green-600 hover:cursor-pointer rounded-full mt-4 text-xl font-mono font-bold w-4/5 vsm:w-1/2 bg-green-800"><button className="" type="submit">REGISTER</button></div>
          </div>
          
        </form>
    </div>
  </body>
)
}
export default Signup