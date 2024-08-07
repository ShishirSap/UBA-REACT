import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import { useGetAllInternsQuery } from '@/services/api';
import UserCard from './UserCard';

const UserListingPage: React.FC = () => {
  const [hasReadPermission, setHasReadPermission] = useState<boolean>(false);

  useEffect(() => {
    const storedPermissions = localStorage.getItem('permissions');
    if (storedPermissions) {
      const permissions: string[] = JSON.parse(storedPermissions);
      setHasReadPermission(permissions.includes('read_intern'));
    }
  }, []);

  const { data: interns, error, isLoading } = useGetAllInternsQuery(undefined, {
    skip: !hasReadPermission
  });

  if (!hasReadPermission) {
    return <div>You do not have permission to view this page</div>;
  }
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching users</div>;

  const storedRoles = localStorage.getItem('roles');
  const roles: string[] = storedRoles ? JSON.parse(storedRoles) : [];
  const isAdmin = roles.includes('admin');

  return (
    <div>
      <Navbar />
      <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
        {interns?.map((intern) => (
          <UserCard key={intern.id} intern={intern} isAdmin={isAdmin} />
        ))}
      </div>
    </div>
  );
};

export default UserListingPage;
