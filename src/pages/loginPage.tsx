import React from 'react'
import logo from '../assets/logo.jpeg'
import { Link } from 'react-router-dom'

const LoginPage:React.FC = () => {
  return (
  


<body className="">
    <div className="flex bg-gradient-to-r from-[#001aff00] to-[#0e579f] md:bg-none flex-col gap-10 w-screen h-screen  md:flex md:flex-row">
        
        <div className="flex  p-1 items-start w-1/5 md:w-1/2 md:items-center"><img src={logo}/></div>



    <form id="registrationForm" className=" h-full flex gap-4 flex-col   w-full  md:justify-center md:bg-gradient-to-r from-[#001aff00] to-[#0e579f]" action="" method="post">
    <h1 className=" text-center text-2xl font-bold mb-2">Sign in</h1>
    <div className=" font-sans font-semibold  flex flex-col   justify-center items-center gap-y-4">
        <div className="w-4/5 vsm:w-1/2"> <label className="block" htmlFor="email">Email Address:</label>  
            <i className="text-green-700 absolute ml-1 pt-1 fa fa-envelope icon fa fa-envelope icon"></i>       
             <input className="w-full text-center border-2 border-black  rounded-full mb-20p" type="email" id="email" name="email" />
             </div>

  <div className="w-4/5 vsm:w-1/2"> <label className="block" htmlFor="password">Password:</label>
    <i className="text-green-700 absolute ml-1 pt-1 fa fa-key icon"></i>
     <input className="border-2 border-black  rounded-full w-full text-center mb-20px" type="password" id="password" name="password" />
     <div className="showpassword">
        <input type="checkbox" id="passwordcheck"/>
        <label className="font-normal inline text-1rem text-[#372d2d]" htmlFor="passwordcheck">Show</label>
      </div>

     </div>
     <div className="w-4/5 vsm:w-1/2 text-white p-1 text-center hover:bg-green-600 hover:cursor-pointer rounded-full mt-4 text-xl font-mono font-bold  bg-green-800"><button type="submit">Sign in</button></div>
     <div  className="px-6">Don't have an account? <Link className=" inline underline" to="/signup">Signup now</Link></div>

</div>
    
   
    
    
 
   </form>
</div>
    
       
    
</body>



  )
}

export default LoginPage
