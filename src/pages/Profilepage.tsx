import { useGetInternByIdQuery, useUpdateInternMutation } from '@/services/api'
import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import logo from '../assets/logo.jpeg'

const Profilepage:React.FC = () => {
    const {id}=useParams<{id:string}>()
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

      const {data:user}=useGetInternByIdQuery(parseInt(id!,10))
      const navigate=useNavigate()
      const loggedInUser = JSON.parse(localStorage.getItem('user') || '{}');
    
      useEffect(() => {
        if (user) {
            console.log('User is' ,user)
          setFormData({
            firstName: user.firstName||'',
            lastName: user.lastName||'',
            email: user.email||'',
            phoneNumber: user.phoneNumber||'',
            address: user.address||'',
            university: user.university||'',
            degree: user.degree||'',
            major: user.major||'',
            dateOfBirth: user.dateOfBirth||'',
            gender: user.gender||'',
            password: ''
          });
        }
      }, [user]);
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
            navigate('/')
            }
            else{
                toast.error('User data is not available')
            }
        }
        catch(error:any){
            console.log('Error is',error)
            if(error.data){
                toast.error(error.data.error)
          }
          else{
            toast.error('Error while updating')
          }
        }
    }
    
    const handleAssignRole = () => {
        navigate(`/assign-role/${id}`);
    };

    if(!user){
        return <div>Loading...</div>
    }
      
  return (
    <div className="flex bg-gradient-to-r from-[#001aff00] to-[#0e579f] md:bg-none flex-col gap-10 w-full h-full md:flex md:flex-row">
            <div className="flex p-1 items-start w-1/5 md:w-1/2 md:items-center">
                <img src={logo} alt="logo" />
            </div>
            {loggedInUser.roles.includes('admin') && (
                        <div className="w-4/5 h-fit vsm:w-1/2 text-white p-1 text-center hover:bg-green-600 hover:cursor-pointer rounded-full mt-4 text-xl font-mono font-bold bg-green-800">
                            <button type="button" onClick={handleAssignRole}>Assign Role</button>
                        </div>
                    )}
            <form
                id="registrationForm"
                className="h-full flex gap-4 flex-col w-full md:justify-center md:bg-gradient-to-r from-[#001aff00] to-[#0e579f]"
                onSubmit={handleSubmit}
            >
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-2">Edit Profile</h1>
                </div>
                <div className="w-full font-sans font-semibold flex flex-col justify-center items-center gap-y-4">
                    {Object.keys(formData).map((key) => (
                        key !== 'password' && (
                            <div key={key} className="w-4/5 vsm:w-1/2">
                                <label className="block capitalize" htmlFor={key}>{key.replace(/([A-Z])/g, ' $1')}:</label>
                                <input
                                    className="w-full text-center border-2 border-black rounded-full mb-20px"
                                    type={key === 'dateOfBirth' ? 'date' : 'text'}
                                    id={key}
                                    name={key}
                                    value={(formData as any)[key]}
                                    onChange={handleChange}
                                />
                            </div>
                        )
                    ))}
                    <div className="w-4/5 vsm:w-1/2">
                        <label htmlFor="password">Password:</label>
                        <input
                            className="w-full text-center border-2 border-black rounded-full mb-20px"
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    
                    <div className="w-4/5 vsm:w-1/2 text-white p-1 text-center hover:bg-green-600 hover:cursor-pointer rounded-full mt-4 text-xl font-mono font-bold bg-green-800">
                        <button type="submit">Save Changes</button>
                    </div>
                </div>
            </form>
        </div>    )
}

export default Profilepage
