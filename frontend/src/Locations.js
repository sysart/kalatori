import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';

const GET_LOCATIONS = gql`
 query TodoAppQuery {
    location {
      address,

    }
  }
`;

export const Locations = () => {
  const { data, error } = useQuery(GET_LOCATIONS);
  if (error) return `Error! ${error.message}`;

  return (
    <ul>
      {data.location.map((loc) => (
        <li key={`${loc.address}`}>{loc.address}</li>
      ))}
    </ul>
  );
};