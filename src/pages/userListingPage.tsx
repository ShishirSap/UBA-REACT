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
  // Execute the query using useQuery hook
  const { data, loading, error, fetchMore } = useQuery(internsQuery, {
    variables: {
      cursor: null,
      limit: 10, // Assuming you want to start with 10 items
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
        limit: 10, // Continue fetching in chunks of 10
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

  return (
    <div>
      <Navbar />
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