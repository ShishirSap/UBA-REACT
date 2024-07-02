import React from 'react'
import profileimg from '../assets/profilelogo.webp'
import Navbar from '../components/navbar'



const UserListingPage:React.FC = () => {

const cardArray=[]
for (let i=0;i<101;i++){
    cardArray.push(
   
        <div key={i} className="p-3 bg-gradient-to-r from-[#001aff00] to-[#0e579f]  border-[#131212] pd-10px rounded-[10%]   min-h-300px flex flex-col gap-4 items-center">


        <div className="rounded-[80%] m-1 border-[5px] border-solid border-[#f6f6f6] flex justify-center overflow-hidden"><img className="max-w-full max-h-full aspect-video " src={profileimg}/></div>
    
    
        <div className="flex flex-col gap-1 ">
        <div className="flex "><h4 className=" font-bold">Name: </h4><span className=" ml-2">Sapkota</span> </div>
        <div className="flex"><h4 className=" font-bold">Address:</h4> <span className="ml-2">Imadol, Kathmandu</span></div>
        <div className="flex"><h4 className=" font-bold">Email:</h4> <span className="ml-2">shishirsap@gmail.com</span></div>
    </div>
        <div className=" text-center mt-3 hover:bg-[#342553]  bg-[#b6328c]  text-lg text-white w-1/2 h-30px border-1 border-solid border-[#050f08] rounded-[20px]"><button>View me</button></div>
    
       </div>
    )
}


  return (
    <div>
      
        <Navbar/>
        
       

        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
{cardArray}
   </div>
   </div>
  )
}

export default UserListingPage
