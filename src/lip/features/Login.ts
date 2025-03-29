import {  createSlice } from '@reduxjs/toolkit'

export interface ILogin {
  email: string,
  password:string
}

const initialState: ILogin = {
  email:'',
  password:''
}

// const PostData = createAsyncThunk('login/PostData',(data,thunkAPI)=>{
//   const  {rejectWithValue} = thunkAPI
//     try {
      
//     } catch (error) {
//       return rejectWithValue(error)
//     }
// })
export const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    
  },
  extraReducers(){
    
  }
})

// Action creators are generated for each case reducer function

export default LoginSlice.reducer