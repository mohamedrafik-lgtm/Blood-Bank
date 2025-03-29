import { IRegister } from '@/interface'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const RegisterSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl:'http://127.0.0.1:8000',}),
    endpoints: (builder) => ({
        Register: builder.mutation({
            query: (credentials:IRegister) => ({
                url: '/api/v1/register',
                method: 'POST',
                body: credentials,
            }),
        }),
        
    })
})
export const {useRegisterMutation} = RegisterSlice
export default RegisterSlice