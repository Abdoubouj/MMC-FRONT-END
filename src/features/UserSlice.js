import {createAsyncThunk , createSlice} from "@reduxjs/toolkit";
import axios from "axios"
const BASE_URL = import.meta.env.VITE_REACT_API_URL;
export const getUsers = createAsyncThunk("user/getUsers",async()=>{
    const response = await axios.get(`${BASE_URL}User`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    });
    const {data} = response;
    return data;
})

export const getSingleUser = createAsyncThunk("user/getSingleUser",async(userId)=>{
    const response = await axios.get(`${BASE_URL}User/${userId}`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    })
    const {data} = response;
    return data;
})
export const addUser = createAsyncThunk("user/addUser",async(user)=>{
    const response = await axios.post(`${BASE_URL}User`,user,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    });
    const {data} = response;
    return data;
})

export const editUser = createAsyncThunk("user/editUser",async(updatedUser)=>{
    const response = await axios.put(`${BASE_URL}User/${updatedUser.id}`,updatedUser,{
      headers:{
        Authorization:`Bearer ${localStorage.getItem("token")}`,
      }
    });
    return response.data;
})

export const deleteUser = createAsyncThunk("user/deleteUser",async(userId)=>{
    const response = await axios.delete(`${BASE_URL}User/${userId}`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    });
    const {data} = response;
    return data;
})

const initialState = {
    singleUser:[],
    singleUserStatus:"idle",
    singleUserError:null,
    users:[],
    userStatus:"idle",
    userError:null
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
      builder
      .addCase(getUsers.pending , (state)=>{
           state.userStatus = "loading";
      })
      .addCase(getUsers.fulfilled , (state,action)=>{
        state.userStatus = "succeded";
        state.users = action.payload;
      })
      .addCase(getUsers.rejected , (state,action)=>{
        state.userStatus = "failed";
        state.userError = action.error.message;
      })
      .addCase(getSingleUser.pending , (state)=>{
           state.singleUserStatus = "loading";
      })
      .addCase(getSingleUser.fulfilled , (state,action)=>{
        state.singleUserStatus = "succeded";
        state.singleUser = action.payload;
      })
      .addCase(getSingleUser.rejected , (state,action)=>{
        state.singleUserStatus = "failed";
        state.singleUserError = action.error.message;
      })
      .addCase(addUser.pending , (state)=>{
           state.userStatus = "loading";
      })
      .addCase(addUser.fulfilled , (state,action)=>{
        state.userStatus = "succeded";
        state.users.push(action.payload);
      })
      .addCase(addUser.rejected , (state,action)=>{
        state.userStatus = "failed";
        state.userError = action.error.message;
      })
      .addCase(deleteUser.pending , (state)=>{
           state.userStatus = "loading";
      })
      .addCase(deleteUser.fulfilled , (state,action)=>{
        state.userStatus = "succeded";
        state.users = state.users.filter(u=>u.userID !== action.meta.arg);
      })
      .addCase(deleteUser.rejected , (state,action)=>{
        state.userStatus = "failed";
        state.userError = action.error.message;
      })
      .addCase(editUser.pending,(state)=>{
        state.userStatus = "loading"
      })
      .addCase(editUser.fulfilled,(state,action)=>{
        const index = state.users.findIndex(u => u.userID === action.payload.id);
        state.users[index] = action.payload;
        state.userStatus = "succeded";
      })
      .addCase(editUser.rejected , (state,action)=>{
        state.userStatus = "failed";
        state.userError = action.error.message;
      })
    }
})

export default userSlice.reducer;

