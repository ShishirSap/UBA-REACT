import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import { api, Intern } from '@/services/api';
import { LoginResponse } from '@/services/api';
interface AuthState{
    token:string|null;
    roles:string[];
    permissions:string[];
    user:Intern|null

}
const initialState:AuthState={
    token:null,
    roles:[],
    permissions:[],
    user:null
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setCredentials: (state, { payload }: PayloadAction<LoginResponse>) => {
          state.user=payload.intern
            state.token = payload.token;
            state.roles = payload.intern.roles;
            state.permissions = payload.intern.permissions;
            
          },
        clearCredentials:(state)=>{
            state.token=null;
            state.roles=[];
            state.user=null;
            state.permissions=[]
            localStorage.removeItem('token')
            localStorage.removeItem('roles')
            localStorage.removeItem('permissions')
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(
          api.endpoints.login.matchFulfilled,
          (state, { payload }: PayloadAction<LoginResponse>) => {
            state.user=payload.intern
            state.token = payload.token;
            state.roles = payload.intern.roles;
            state.permissions = payload.intern.permissions;
            localStorage.setItem('token',payload.token)
            localStorage.setItem('roles',JSON.stringify(payload.intern.roles))
            localStorage.setItem('permissions',JSON.stringify(payload.intern.permissions))
            localStorage.setItem('user',JSON.stringify(payload.intern))
          }
        );
      },
})

export const{setCredentials,clearCredentials}=authSlice.actions
export default authSlice.reducer