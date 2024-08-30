import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAssignRoleMutation } from '../services/api'; // Use RTK Query for API call
import { toast } from 'react-toastify';

const AssignRole: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [role, setRole] = useState('');
    const [assignRole, { isLoading, isError }] = useAssignRoleMutation();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const isAdmin = user.roles.includes('admin');

    if (!isAdmin) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-red-600 text-xl font-semibold">You do not have permission to assign roles.</p>
            </div>
        );
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
           const response = await assignRole({ userId: id, name:role }).unwrap();
                console.log('response is',response)
            toast.success('Role assigned successfully');
            navigate(`/dashboard/users`);
        } catch (error:any) {
            console.error('Failed to assign role:', error);
            toast.error(error.data.message)
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-green-500">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Assign Role</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="role" className="block text-gray-700 font-semibold mb-2">Role:</label>
                    <select
                        id="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="" disabled>Select a role</option>
                        <option value="admin">Admin</option>
                        <option value="intern">Intern</option>
                        <option value="mentor">Mentor</option>
                        {/* Add other roles if needed */}
                    </select>
                </div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full py-2 px-4 rounded-md text-white font-bold ${isLoading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'}`}
                    >
                        {isLoading ? 'Assigning...' : 'Assign Role'}
                    </button>
                    {isError && (
                        <p className="mt-4 text-red-600 text-center font-semibold">
                            Failed to assign role. Please try again.
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default AssignRole;
