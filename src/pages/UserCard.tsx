import React from 'react';
import { Intern } from '@/services/api';
import profileimg from '../assets/profilelogo.webp';
import { useNavigate } from 'react-router-dom';

interface UserCardProps {
  intern: Intern;
  isAdmin: boolean;
}

const UserCard: React.FC<UserCardProps> = ({ intern, isAdmin }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    if (isAdmin) {
      navigate(`/dashboard/editprofile/${intern.id}`);
    }
  };

  return (
    <div key={intern.id} data-testid="user-card" className="p-3 bg-gradient-to-r from-[#001aff00] to-[#0e579f] border-[#131212] pd-10px rounded-[10%] min-h-300px flex flex-col gap-4 items-center">
      <div className="rounded-[80%] m-1 border-[5px] border-solid border-[#f6f6f6] flex justify-center overflow-hidden">
        <img className="max-w-full max-h-full aspect-video" src={profileimg} alt="Profile" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex"><h4 className="font-bold">Name: </h4><span className="ml-2">{intern.firstName} {intern.lastName}</span></div>
        <div className="flex"><h4 className="font-bold">Address:</h4><span className="ml-2">{intern.address}</span></div>
        <div className="flex"><h4 className="font-bold">Email:</h4><span className="ml-2">{intern.email}</span></div>
      </div>
      <div className="text-center mt-3 hover:bg-[#342553] bg-[#b6328c] text-lg text-white w-1/2 h-30px border-1 border-solid border-[#050f08] rounded-[20px]">
        <button onClick={handleEdit}>View/Edit</button>
      </div>
    </div>
  );
};

export default UserCard;
