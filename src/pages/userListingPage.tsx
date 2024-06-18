import React, { useState } from 'react'
import profileimg from '../assets/profilelogo.webp'
import { Link } from 'react-router-dom'

const UserListingPage:React.FC = () => {


const [isMenuVisible,setIsMenuVisible]=useState(false)
const toggleMenu=()=>{
    setIsMenuVisible(!isMenuVisible)
}


  return (
  
<body className="bg-[#d1d8e9] ">   
    
    <div className="flex justify-between gap-2 sticky top-1 mb-8  ">

        <div className="max-w-[12%] min-w-[100px]"><img className="w-full" src='logo.jpeg'/></div>
      
    
        <div className=" hidden w-full md:flex md:px-3 md:py-2 justify-evenly bg-[#3e5cad] rounded-[20px] " id="myTopnav" >
    
    
            <div className="w-full text-white flex justify-evenly gap-4">
                <Link className="hover:text-gray-300" to='/userlisting'>Home</Link>
            <Link className="hover:text-gray-300" to='/about'>About</Link>
            <Link className="hover:text-gray-300"  to='/editprofile'>Edit Profile</Link>
            <Link className="hover:text-gray-300" to='/signup'>Signup</Link>
            </div>
            
            <div className="w-full text-white flex justify-end gap-4">
                <Link className="hover:text-gray-300" to='/login'>Login</Link>
                <Link className="hover:text-gray-300" to='/settings'>Settings</Link>    
            </div>
    
    
            
           
      
       
           </div>
           
    
    
    
          
          
           <div className=" p-2 md:hidden" onClick={toggleMenu}>
            <button id="menu-button" className="icon" >
            {/* <i className="fa fa-bars"></i> */}
            menu
            </button>
        </div> 
    
    
    
      
    
         
    </div>
    
    
    <div id="mobile-menu" className={isMenuVisible?'bg-[#3e5cad] md:hidden ':'hidden'} >
    
      <Link to="/userlisting" className="block font-bold px-2 py-2  text-gray-300 hover:text-white">Home</Link>
      <Link to="/" className="block font-bold px-2 py-2 text-gray-300 hover:text-white">About</Link>
      <Link to="/signup" className="block font-bold px-2 py-2 text-gray-300 hover:text-white">Signup</Link>
      <Link to="/editprofile" className="block font-bold px-2 py-2 text-gray-300 hover:text-white">Edit Profile</Link>
      <Link to="/login" className="block font-bold px-2 py-2 text-gray-300 hover:text-white">Login</Link>
      <Link to="/" className="block font-bold px-2 py-2 text-gray-300 hover:text-white">Account settings</Link>
    
    
    </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
   <div className="p-3 bg-gradient-to-r from-[#001aff00] to-[#0e579f]  border-[#131212] pd-10px rounded-[10%]   min-h-300px flex flex-col gap-4 items-center">


    <div className="rounded-[80%] m-1 border-[5px] border-solid border-[#f6f6f6] flex justify-center overflow-hidden"><img className="max-w-full max-h-full aspect-video " src={profileimg}/></div>


    <div className="flex flex-col gap-1 ">
    <div className="flex "><h4 className=" font-bold">Name: </h4><span className=" ml-2">Sapkota</span> </div>
    <div className="flex"><h4 className=" font-bold">Address:</h4> <span className="ml-2">Imadol, Kathmandu</span></div>
    <div className="flex"><h4 className=" font-bold">Email:</h4> <span className="ml-2">shishirsap@gmail.com</span></div>
</div>
    <div className=" text-center mt-3 hover:bg-[#342553]  bg-[#b6328c]  text-lg text-white w-1/2 h-30px border-1 border-solid border-[#050f08] rounded-[20px]"><button>View me</button></div>


    

   </div>

   <div className="p-3  bg-gradient-to-r from-[#001aff00] to-[#0e579f]  border-[#131212] pd-10px rounded-[10%]   min-h-300px flex flex-col gap-4 items-center">


    <div className="rounded-[80%] m-1 border-[5px] border-solid border-[#f6f6f6] flex justify-center overflow-hidden"><img className="max-w-full max-h-full aspect-video " src={profileimg}/></div>


    <div className="flex flex-col gap-1 ">
    <div className="flex "><h4 className=" font-bold">Name: </h4><span className=" ml-2">Sapkota</span> </div>
    <div className="flex"><h4 className=" font-bold">Address:</h4> <span className="ml-2">Imadol, Kathmandu</span></div>
    <div className="flex"><h4 className=" font-bold">Email:</h4> <span className="ml-2">shishirsap@gmail.com</span></div>
</div>
    <div className=" text-center mt-3 hover:bg-[#342553]  bg-[#b6328c]  text-lg text-white w-1/2 h-30px border-1 border-solid border-[#050f08] rounded-[20px]"><button>View me</button></div>


    

   </div>



   
   <div className="p-3 bg-gradient-to-r from-[#001aff00] to-[#0e579f]  border-[#131212] pd-10px rounded-[10%]   min-h-300px flex flex-col gap-4 items-center">


    <div className="rounded-[80%] m-1 border-[5px] border-solid border-[#f6f6f6] flex justify-center overflow-hidden"><img className="max-w-full max-h-full aspect-video " src={profileimg}/></div>


    <div className="flex flex-col gap-1 ">
    <div className="flex "><h4 className=" font-bold">Name: </h4><span className=" ml-2">Sapkota</span> </div>
    <div className="flex"><h4 className=" font-bold">Address:</h4> <span className="ml-2">Imadol, Kathmandu</span></div>
    <div className="flex"><h4 className=" font-bold">Email:</h4> <span className="ml-2">shishirsap@gmail.com</span></div>
</div>
    <div className=" text-center mt-3 hover:bg-[#342553]  bg-[#b6328c]  text-lg text-white w-1/2 h-30px border-1 border-solid border-[#050f08] rounded-[20px]"><button>View me</button></div>


    

   </div>


   
   <div className="p-3 bg-gradient-to-r from-[#001aff00] to-[#0e579f]  border-[#131212] pd-10px rounded-[10%]   min-h-300px flex flex-col gap-4 items-center">


    <div className="rounded-[80%] m-1 border-[5px] border-solid border-[#f6f6f6] flex justify-center overflow-hidden"><img className="max-w-full max-h-full aspect-video " src={profileimg}/></div>


    <div className="flex flex-col gap-1 ">
    <div className="flex "><h4 className=" font-bold">Name: </h4><span className=" ml-2">Sapkota</span> </div>
    <div className="flex"><h4 className=" font-bold">Address:</h4> <span className="ml-2">Imadol, Kathmandu</span></div>
    <div className="flex"><h4 className=" font-bold">Email:</h4> <span className="ml-2">shishirsap@gmail.com</span></div>
</div>
    <div className=" text-center mt-3 hover:bg-[#342553]  bg-[#b6328c]  text-lg text-white w-1/2 h-30px border-1 border-solid border-[#050f08] rounded-[20px]"><button>View me</button></div>


    

   </div>


   
   <div className="p-3 bg-gradient-to-r from-[#001aff00] to-[#0e579f]  border-[#131212] pd-10px rounded-[10%]   min-h-300px flex flex-col gap-4 items-center">


    <div className="rounded-[80%] m-1 border-[5px] border-solid border-[#f6f6f6] flex justify-center overflow-hidden"><img className="max-w-full max-h-full aspect-video " src={profileimg}/></div>


    <div className="flex flex-col gap-1 ">
    <div className="flex "><h4 className=" font-bold">Name: </h4><span className=" ml-2">Sapkota</span> </div>
    <div className="flex"><h4 className=" font-bold">Address:</h4> <span className="ml-2">Imadol, Kathmandu</span></div>
    <div className="flex"><h4 className=" font-bold">Email:</h4> <span className="ml-2">shishirsap@gmail.com</span></div>
</div>
    <div className=" text-center mt-3 hover:bg-[#342553]  bg-[#b6328c]  text-lg text-white w-1/2 h-30px border-1 border-solid border-[#050f08] rounded-[20px]"><button>View me</button></div>


    

   </div>


   
   <div className="p-3 bg-gradient-to-r from-[#001aff00] to-[#0e579f]  border-[#131212] pd-10px rounded-[10%]   min-h-300px flex flex-col gap-4 items-center">


    <div className="rounded-[80%] m-1 border-[5px] border-solid border-[#f6f6f6] flex justify-center overflow-hidden"><img className="max-w-full max-h-full aspect-video " src={profileimg}/></div>


    <div className="flex flex-col gap-1 ">
    <div className="flex "><h4 className=" font-bold">Name: </h4><span className=" ml-2">Sapkota</span> </div>
    <div className="flex"><h4 className=" font-bold">Address:</h4> <span className="ml-2">Imadol, Kathmandu</span></div>
    <div className="flex"><h4 className=" font-bold">Email:</h4> <span className="ml-2">shishirsap@gmail.com</span></div>
</div>
    <div className=" text-center mt-3 hover:bg-[#342553]  bg-[#b6328c]  text-lg text-white w-1/2 h-30px border-1 border-solid border-[#050f08] rounded-[20px]"><button>View me</button></div>


    

   </div>



   
   <div className="p-3 bg-gradient-to-r from-[#001aff00] to-[#0e579f]  border-[#131212] pd-10px rounded-[10%]   min-h-300px flex flex-col gap-4 items-center">


    <div className="rounded-[80%] m-1 border-[5px] border-solid border-[#f6f6f6] flex justify-center overflow-hidden"><img className="max-w-full max-h-full aspect-video " src={profileimg}/></div>


    <div className="flex flex-col gap-1 ">
    <div className="flex "><h4 className=" font-bold">Name: </h4><span className=" ml-2">Sapkota</span> </div>
    <div className="flex"><h4 className=" font-bold">Address:</h4> <span className="ml-2">Imadol, Kathmandu</span></div>
    <div className="flex"><h4 className=" font-bold">Email:</h4> <span className="ml-2">shishirsap@gmail.com</span></div>
</div>
    <div className=" text-center mt-3 hover:bg-[#342553]  bg-[#b6328c]  text-lg text-white w-1/2 h-30px border-1 border-solid border-[#050f08] rounded-[20px]"><button>View me</button></div>


    

   </div>



   
   <div className="p-3 bg-gradient-to-r from-[#001aff00] to-[#0e579f]  border-[#131212] pd-10px rounded-[10%]   min-h-300px flex flex-col gap-4 items-center">


    <div className="rounded-[80%] m-1 border-[5px] border-solid border-[#f6f6f6] flex justify-center overflow-hidden"><img className="max-w-full max-h-full aspect-video " src={profileimg}/></div>


    <div className="flex flex-col gap-1 ">
    <div className="flex "><h4 className=" font-bold">Name: </h4><span className=" ml-2">Sapkota</span> </div>
    <div className="flex"><h4 className=" font-bold">Address:</h4> <span className="ml-2">Imadol, Kathmandu</span></div>
    <div className="flex"><h4 className=" font-bold">Email:</h4> <span className="ml-2">shishirsap@gmail.com</span></div>
</div>
    <div className=" text-center mt-3 hover:bg-[#342553]  bg-[#b6328c]  text-lg text-white w-1/2 h-30px border-1 border-solid border-[#050f08] rounded-[20px]"><button>View me</button></div>


    

   </div>

   <div className="p-3 bg-gradient-to-r from-[#001aff00] to-[#0e579f]  border-[#131212] pd-10px rounded-[10%]   min-h-300px flex flex-col gap-4 items-center">


    <div className="rounded-[80%] m-1 border-[5px] border-solid border-[#f6f6f6] flex justify-center overflow-hidden"><img className="max-w-full max-h-full aspect-video " src={profileimg}/></div>


    <div className="flex flex-col gap-1 ">
    <div className="flex "><h4 className=" font-bold">Name: </h4><span className=" ml-2">Sapkota</span> </div>
    <div className="flex"><h4 className=" font-bold">Address:</h4> <span className="ml-2">Imadol, Kathmandu</span></div>
    <div className="flex"><h4 className=" font-bold">Email:</h4> <span className="ml-2">shishirsap@gmail.com</span></div>
</div>
    <div className=" text-center mt-3 hover:bg-[#342553]  bg-[#b6328c]  text-lg text-white w-1/2 h-30px border-1 border-solid border-[#050f08] rounded-[20px]"><button>View me</button></div>


    

   </div>

   <div className="p-3 bg-gradient-to-r from-[#001aff00] to-[#0e579f]  border-[#131212] pd-10px rounded-[10%]   min-h-300px flex flex-col gap-4 items-center">


    <div className="rounded-[80%] m-1 border-[5px] border-solid border-[#f6f6f6] flex justify-center overflow-hidden"><img className="max-w-full max-h-full aspect-video " src={profileimg}/></div>


    <div className="flex flex-col gap-1 ">
    <div className="flex "><h4 className=" font-bold">Name: </h4><span className=" ml-2">Sapkota</span> </div>
    <div className="flex"><h4 className=" font-bold">Address:</h4> <span className="ml-2">Imadol, Kathmandu</span></div>
    <div className="flex"><h4 className=" font-bold">Email:</h4> <span className="ml-2">shishirsap@gmail.com</span></div>
</div>
    <div className=" text-center mt-3 hover:bg-[#342553]  bg-[#b6328c]  text-lg text-white w-1/2 h-30px border-1 border-solid border-[#050f08] rounded-[20px]"><button>View me</button></div>


    

   </div>

   <div className="p-3 bg-gradient-to-r from-[#001aff00] to-[#0e579f]  border-[#131212] pd-10px rounded-[10%]   min-h-300px flex flex-col gap-4 items-center">


    <div className="rounded-[80%] m-1 border-[5px] border-solid border-[#f6f6f6] flex justify-center overflow-hidden"><img className="max-w-full max-h-full aspect-video " src={profileimg}/></div>


    <div className="flex flex-col gap-1 ">
    <div className="flex "><h4 className=" font-bold">Name: </h4><span className=" ml-2">Sapkota</span> </div>
    <div className="flex"><h4 className=" font-bold">Address:</h4> <span className="ml-2">Imadol, Kathmandu</span></div>
    <div className="flex"><h4 className=" font-bold">Email:</h4> <span className="ml-2">shishirsap@gmail.com</span></div>
</div>
    <div className=" text-center mt-3 hover:bg-[#342553]  bg-[#b6328c]  text-lg text-white w-1/2 h-30px border-1 border-solid border-[#050f08] rounded-[20px]"><button>View me</button></div>


    

   </div>


   
   <div className="p-3 bg-gradient-to-r from-[#001aff00] to-[#0e579f]  border-[#131212] pd-10px rounded-[10%]   min-h-300px flex flex-col gap-4 items-center">


    <div className="rounded-[80%] m-1 border-[5px] border-solid border-[#f6f6f6] flex justify-center overflow-hidden"><img className="max-w-full max-h-full aspect-video " src={profileimg}/></div>


    <div className="flex flex-col gap-1 ">
    <div className="flex "><h4 className=" font-bold">Name: </h4><span className=" ml-2">Sapkota</span> </div>
    <div className="flex"><h4 className=" font-bold">Address:</h4> <span className="ml-2">Imadol, Kathmandu</span></div>
    <div className="flex"><h4 className=" font-bold">Email:</h4> <span className="ml-2">shishirsap@gmail.com</span></div>
</div>
    <div className=" text-center mt-3 hover:bg-[#342553]  bg-[#b6328c]  text-lg text-white w-1/2 h-30px border-1 border-solid border-[#050f08] rounded-[20px]"><button>View me</button></div>


    

   </div>








  




 
   </div>




  





</body>




  )
}

export default UserListingPage
