import React from 'react'
import logo from '../assets/logo.jpeg'

const Editprofilepage:React.FC = () => {
  return (
    <div className="flex bg-gradient-to-r from-[#001aff00] to-[#0e579f] md:bg-none flex-col gap-10 w-screen h-screen  md:flex md:flex-row">
    <div className="flex  p-1 items-start w-1/5 md:w-1/2 md:items-center">
        <img src={logo} />
    
    </div>
    



<form id="registrationForm" className=" h-full flex gap-4 flex-col   w-full  md:justify-center md:bg-gradient-to-r from-[#001aff00] to-[#0e579f]">

    <div className="text-center"> <h1 className="text-2xl font-bold mb-2"> Edit Profile</h1></div>
    <div className="w-full font-sans font-semibold  flex flex-col   justify-center items-center gap-y-4">      
        <div  className="w-4/5 vsm:w-1/2">
            <label className="block" htmlFor="Name">Name:</label>
    <input className="w-full text-center border-2 border-black  rounded-full mb-20px"  type="text" id="Name" name="Name" value="" />
        </div>

        <div className="w-4/5 vsm:w-1/2">
   <label htmlFor="email">Email:</label>
    <input className="w-full text-center border-2 border-black  rounded-full mb-20px" type="email" id="email" name="email" value="" />
</div>

<div className="w-4/5 vsm:w-1/2">
    <label htmlFor="Bio">Your Bio:</label>
    <input className="w-full text-center border-2 border-black  rounded-full mb-20px" type="text" id="bio" name="bio" value="" />
</div>
    
<div className="w-4/5 vsm:w-1/2">
        <label htmlFor="profileimg">Profile Image:</label>
        <input className="w-full text-center  border-black   mb-20px" type="file" id="Name" name="profileimg" value="" />
    </div>


    <div className="w-4/5 vsm:w-1/2 text-white p-1 text-center hover:bg-green-600 hover:cursor-pointer rounded-full mt-4 text-xl font-mono font-bold bg-green-800"> <button type="submit">Save Changes</button></div>

</div>
    
</form>

</div>
  )
}

export default Editprofilepage
