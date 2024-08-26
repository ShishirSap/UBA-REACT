import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import UserCard from './UserCard';
import Forbidden from './errorpages/403forbidden';
import { gql, useQuery } from '@apollo/client';
const internsQuery = gql`
  query ListInterns(
    $cursor: [String]
    $firstName: String
    $lastName: String
    $email: String
    $limit: Int
  ) {
    listInterns(
      cursor: $cursor
      firstName: $firstName
      lastName: $lastName
      email: $email
      limit: $limit
    ) {
      interns {
        id
        firstName
        lastName
        email
        phoneNumber
        address
        university
        degree
        major
        yearOfStudy
        resume
        profilePicture
        dateOfBirth
        gender
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

const UserListingPage: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  // Execute the query using useQuery hook
  const { data, loading, error, fetchMore,refetch } = useQuery(internsQuery, {
    variables: {
      cursor: null,
      firstName:'',
      lastName:'',
      email:'',
      limit: 15, // Assuming you want to start with 10 items
    },
    notifyOnNetworkStatusChange: true,
  });

  if (loading && !data) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const interns = data?.listInterns.interns || [];
  const pageInfo = data?.listInterns.pageInfo;

  const handleLoadMore = () => {
    fetchMore({
      variables: {
        cursor: pageInfo.endCursor,
        limit: 15, // Continue fetching in chunks of 10
        firstName,
        lastName,
        email,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const newInterns = fetchMoreResult.listInterns.interns;
        const newPageInfo = fetchMoreResult.listInterns.pageInfo;

        return newInterns.length
          ? {
              listInterns: {
                __typename: previousResult.listInterns.__typename,
                interns: [...previousResult.listInterns.interns, ...newInterns],
                pageInfo: newPageInfo,
              },
            }
          : previousResult;
      },
    });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    refetch({
      cursor: null,
      firstName: firstName || undefined,
      lastName: lastName || undefined,
      email: email || undefined,
      limit: 15,
    });
  };


  return (
    <div>
      <Navbar />

      <div className="sticky mt-4 top-0 bg-white z-10 shadow-md">
        <form onSubmit={handleSearch} className="p-6 flex flex-col sm:flex-row gap-4 items-center mx-4">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border border-gray-300 rounded-md p-3 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border border-gray-300 rounded-md p-3 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md p-3 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto">
            Search
          </button>
        </form>
      </div>

      <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
        {interns.map((intern: any) => (
          <UserCard key={intern.id} intern={intern} isAdmin={true} />
        ))}
      </div>
      {pageInfo.hasNextPage && (
        <button onClick={handleLoadMore} className="mt-4">
          Load More
        </button>
      )}
    </div>
  );
};

export default UserListingPage;