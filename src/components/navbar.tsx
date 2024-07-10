import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpeg'


const Navbar:React.FC = () => {



  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenu = () => setIsMenuVisible(!isMenuVisible);

  return (
    <div className="fixed h-8 top-0 w-full z-50 bg-[#3e5cad] shadow-md">
      <div className="h-full container   flex justify-between items-center">
        <div className="flex h-full items-center">
          <img className="w-24 h-full" src={logo} alt="Logo" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-grow justify-center items-center space-x-6">
          <Link className="text-white hover:text-gray-300 transition duration-200" to="/">Home</Link>
          <Link className="text-white hover:text-gray-300 transition duration-200" to="/about">About</Link>
          <Link className="text-white hover:text-gray-300 transition duration-200" to="/editprofile">Edit Profile</Link>
          <Link className="text-white hover:text-gray-300 transition duration-200" to="/signup">Signup</Link>
          <Link className="text-white hover:text-gray-300 transition duration-200" to="/login">Login</Link>
          <Link className="text-white hover:text-gray-300 transition duration-200" to="/settings">Settings</Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuVisible ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuVisible ? 'block' : 'hidden'} md:hidden bg-[#3e5cad] py-4`}>
        <Link className="block text-white px-4 py-2 text-center hover:bg-[#2a4b8c] transition duration-200" to="/">Home</Link>
        <Link className="block text-white px-4 py-2 text-center hover:bg-[#2a4b8c] transition duration-200" to="/about">About</Link>
        <Link className="block text-white px-4 py-2 text-center hover:bg-[#2a4b8c] transition duration-200" to="/editprofile">Edit Profile</Link>
        <Link className="block text-white px-4 py-2 text-center hover:bg-[#2a4b8c] transition duration-200" to="/signup">Signup</Link>
        <Link className="block text-white px-4 py-2 text-center hover:bg-[#2a4b8c] transition duration-200" to="/login">Login</Link>
        <Link className="block text-white px-4 py-2 text-center hover:bg-[#2a4b8c] transition duration-200" to="/settings">Settings</Link>
      </div>
    </div>
  );









    // const [isOpen, setIsOpen] = useState(false);

    // const toggleMenu = () => {
    //   setIsOpen(!isOpen);
    // };
  
    // return (
    //   <nav className="bg-blue-600 fixed w-full z-10 top-0 shadow-lg">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="flex items-center justify-between h-16">
    //         <div className="flex items-center">
    //           <div className="flex-shrink-0">
    //             <h1 className="text-white font-bold text-xl">Brand</h1>
    //           </div>
    //           <div className="hidden md:block">
    //             <div className="ml-10 flex items-baseline space-x-4">
    //               <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
    //               <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
    //               <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
    //               <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="-mr-2 flex md:hidden">
    //           <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 focus:text-white">
    //             <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
    //               {isOpen ? (
    //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    //               ) : (
    //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
    //               )}
    //             </svg>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
  
    //     <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
    //       <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
    //         <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
    //         <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
    //         <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
    //         <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
    //       </div>
    //     </div>
    //   </nav>
    // );








//     const [isMenuVisible,setIsMenuVisible]=useState(false)
// const toggleMenu=()=>{
//     setIsMenuVisible(!isMenuVisible)
// }
//   return (
//     <div className=' w-full fixed top-0 z-1'>   
//     <div className="flex justify-between">
//         <div className="max-w-[12%] min-w-[100px]"><img className="w-full" src={logo}/></div>
    
//         <div className=" hidden w-full md:flex md:px-3 md:py-2 justify-evenly bg-[#3e5cad]  " id="myTopnav" >
//             <div className="w-full text-white flex justify-evenly ">
//                 <Link className="hover:text-gray-300" to='/userlisting'>Home</Link>
//             <Link className="hover:text-gray-300" to='/about'>About</Link>
//             <Link className="hover:text-gray-300"  to='/editprofile'>Edit Profile</Link>
//             <Link className="hover:text-gray-300" to='/signup'>Signup</Link>
//             </div>   
//             <div className="w-full text-white flex justify-end gap-4 ">
//                 <Link className="hover:text-gray-300" to='/login'>Login</Link>
//                 <Link className="hover:text-gray-300" to='/settings'>Settings</Link>    
//             </div>
//            </div>
          
//            <div className=" p-2 md:hidden" onClick={toggleMenu}>
//             <button id="menu-button" className="icon" >
//             {/* <i className="fa fa-bars"></i> */}
//             menu
//             </button>
//         </div>   
//     </div>
    
//     <div id="mobile-menu" className={isMenuVisible?'bg-[#3e5cad]  md:hidden ':'hidden'} >
//       <Link to="/userlisting" className="block font-bold px-2 py-2  text-gray-300 hover:text-white">Home</Link>
//       <Link to="/" className="block font-bold px-2 py-2 text-gray-300 hover:text-white">About</Link>
//       <Link to="/signup" className="block font-bold px-2 py-2 text-gray-300 hover:text-white">Signup</Link>
//       <Link to="/editprofile" className="block font-bold px-2 py-2 text-gray-300 hover:text-white">Edit Profile</Link>
//       <Link to="/login" className="block font-bold px-2 py-2 text-gray-300 hover:text-white">Login</Link>
//       <Link to="/" className="block font-bold px-2 py-2 text-gray-300 hover:text-white">Account settings</Link>
//     </div>
//     </div>



  // )
}

export default Navbar
