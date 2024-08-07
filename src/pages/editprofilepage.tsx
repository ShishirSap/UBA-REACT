import React, { useState,useEffect } from 'react'
import logo from '../assets/logo.jpeg'

import { useUpdateInternMutation } from '@/services/api'
import { toast } from 'react-toastify';

const Editprofilepage:React.FC = () => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        university: '',
        degree: '',
        major: '',
        dateOfBirth: '',
        gender: '',
        password: ''
      });
    
      useEffect(() => {
        if (user) {
          setFormData({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            address: user.address,
            university: user.university,
            degree: user.degree,
            major: user.major,
            dateOfBirth: user.dateOfBirth,
            gender: user.gender,
            password: ''
          });
        }
      }, []);
      const [updateIntern]=useUpdateInternMutation()

      const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
      }

      const handleSubmit=async(e:React.FormEvent)=>{
        e.preventDefault();
        try{
            if(user){
          const response=  await  updateIntern({id:user.id,...formData}).unwrap()
          console.log('response is' ,response)
            
            toast.success('Profile updated successfully')
            }
            else{
                toast.error('User data is not available')
            }
        }
        catch(error:any){
            if(error.data){
                toast.error(error.data.error)
          }
          else{
            toast.error('Error while updating')
          }
        }
    }
    

    if(!user){
        return <div>Loading...</div>
    }
      
  return (
   

    <div className="flex bg-gradient-to-r from-[#001aff00] to-[#0e579f] md:bg-none flex-col gap-10 w-screen h-screen md:flex md:flex-row">
      <div className="flex p-1 items-start w-1/5 md:w-1/2 md:items-center">
        <img src={logo} alt="logo" />
      </div>
      <form
        id="registrationForm"
        className="h-full flex gap-4 flex-col w-full md:justify-center md:bg-gradient-to-r from-[#001aff00] to-[#0e579f]"
        onSubmit={handleSubmit}
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Edit Profile</h1>
        </div>
        <div className="w-full font-sans font-semibold flex flex-col justify-center items-center gap-y-4">
          <div className="w-4/5 vsm:w-1/2">
            <label className="block" htmlFor="firstName">First Name:</label>
            <input
              className="w-full text-center border-2 border-black rounded-full mb-20px"
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="w-4/5 vsm:w-1/2">
            <label className="block" htmlFor="lastName">Last Name:</label>
            <input
              className="w-full text-center border-2 border-black rounded-full mb-20px"
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="w-4/5 vsm:w-1/2">
            <label htmlFor="email">Email:</label>
            <input
              className="w-full text-center border-2 border-black rounded-full mb-20px"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="w-4/5 vsm:w-1/2">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              className="w-full text-center border-2 border-black rounded-full mb-20px"
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="w-4/5 vsm:w-1/2">
            <label htmlFor="address">Address:</label>
            <input
              className="w-full text-center border-2 border-black rounded-full mb-20px"
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="w-4/5 vsm:w-1/2">
            <label htmlFor="university">University:</label>
            <input
              className="w-full text-center border-2 border-black rounded-full mb-20px"
              type="text"
              id="university"
              name="university"
              value={formData.university}
              onChange={handleChange}
            />
          </div>
          <div className="w-4/5 vsm:w-1/2">
            <label htmlFor="degree">Degree:</label>
            <input
              className="w-full text-center border-2 border-black rounded-full mb-20px"
              type="text"
              id="degree"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
            />
          </div>
          <div className="w-4/5 vsm:w-1/2">
            <label htmlFor="major">Major:</label>
            <input
              className="w-full text-center border-2 border-black rounded-full mb-20px"
              type="text"
              id="major"
              name="major"
              value={formData.major}
              onChange={handleChange}
            />
          </div>
          <div className="w-4/5 vsm:w-1/2">
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input
              className="w-full text-center border-2 border-black rounded-full mb-20px"
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
          </div>
          <div className="w-4/5 vsm:w-1/2">
            <label htmlFor="gender">Gender:</label>
            <input
              className="w-full text-center border-2 border-black rounded-full mb-20px"
              type="text"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            />
          </div>
          <div className="w-4/5 vsm:w-1/2 text-white p-1 text-center hover:bg-green-600 hover:cursor-pointer rounded-full mt-4 text-xl font-mono font-bold bg-green-800">
            <button type="submit">Save Changes</button>
          </div>
        </div>
      </form>
    </div>
    )
}

export default Editprofilepage
