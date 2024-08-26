
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export interface Intern {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  university: string;
  degree: string;
  major: string;
  dateOfBirth: string;
  gender: string;
  userType: string;
  roles:string[];
  permissions:string[];
}
export interface LoginResponse {
  token: string;
 intern:Intern;
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllInterns: builder.query<Intern[], void>({
      query: () => '/graphql', // Adjust the URL if necessary
    }),
getInternById:builder.query<Intern,number>({
  query:(id)=>`/api/intern/${id}`
})
    ,
    login: builder.mutation<LoginResponse, { email: string; password: string }>({
      query: (credentials) => ({
        url: '/api/intern/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),

      assignRole: builder.mutation({
            query: ({ userId, role }) => ({
                url: `/api/roles/assign-role/${userId}`,
                method: 'POST',
                body: { role },
            }),
        }),
    verifyEmail: builder.mutation<void, { token: string }>({
      query: ({ token }) => ({
        url: `/api/intern/verify-email`,
        method: 'GET',
        params: { token },
      }),
    }),

    updateIntern:builder.mutation<void,Partial<Intern> & {id:number}>({
      query:({id,...body})=>({
        url:`/api/intern/${id}`,
        method:'PUT',
        body,
      })
    })
  }),
});

export const {useAssignRoleMutation,useVerifyEmailMutation,useGetInternByIdQuery, useGetAllInternsQuery, useLoginMutation,useUpdateInternMutation } = api;
