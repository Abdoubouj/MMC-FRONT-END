import {createAsyncThunk , createSlice} from "@reduxjs/toolkit";
import axios from "axios"
const BASE_URL = import.meta.env.VITE_REACT_API_URL;
export const getSessions = createAsyncThunk("Session/getSessions",async()=>{
    const response = await axios.get(`${BASE_URL}Session`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    });
    const {data} = response;
    return data;
})

export const getSingleSession = createAsyncThunk("Session/getSingleSession",async(SessionId)=>{
    const response = await axios.get(`${BASE_URL}Session/${SessionId}`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    })
    const {data} = response;
    return data;
})
export const addSession = createAsyncThunk("Session/addSession",async(Session)=>{
    const response = await axios.post(`${BASE_URL}Session`,Session,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    });
    const {data} = response;
    return data;
})

export const editSession = createAsyncThunk("Session/editSession",async(updatedSession)=>{
    const response = await axios.put(`${BASE_URL}Session/${updatedSession.id}`,updatedSession,{
      headers:{
        Authorization:`Bearer ${localStorage.getItem("token")}`,
      }
    });
    return response.data;
})

export const deleteSession = createAsyncThunk("Session/deleteSession",async(SessionId)=>{
    const response = await axios.delete(`${BASE_URL}Session/${SessionId}`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    });
    const {data} = response;
    return data;
})

const initialState = {
    singleSession:[],
    singleSessionStatus:"idle",
    singleSessionError:null,
    sessions:[],
    sessionStatus:"idle",
    sessionError:null
}

const sessionSlice = createSlice({
    name:"session",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
      builder
      .addCase(getSessions.pending , (state)=>{
           state.sessionStatus = "loading";
      })
      .addCase(getSessions.fulfilled , (state,action)=>{
        state.sessionStatus = "succeded";
        state.sessions = action.payload;
      })
      .addCase(getSessions.rejected , (state,action)=>{
        state.sessionStatus = "failed";
        state.sessionError = action.error.message;
      })
      .addCase(getSingleSession.pending , (state)=>{
           state.singleSessionStatus = "loading";
      })
      .addCase(getSingleSession.fulfilled , (state,action)=>{
        state.singleSessionStatus = "succeded";
        state.singleSession = action.payload;
      })
      .addCase(getSingleSession.rejected , (state,action)=>{
        state.singleSessionStatus = "failed";
        state.singleSessionError = action.error.message;
      })
      .addCase(addSession.pending , (state)=>{
           state.sessionStatus = "loading";
      })
      .addCase(addSession.fulfilled , (state,action)=>{
        state.sessionStatus = "succeded";
        state.sessions.push(action.payload);
      })
      .addCase(addSession.rejected , (state,action)=>{
        state.sessionStatus = "failed";
        state.sessionError = action.error.message;
      })
      .addCase(deleteSession.pending , (state)=>{
           state.sessionStatus = "loading";
      })
      .addCase(deleteSession.fulfilled , (state,action)=>{
        state.sessionStatus = "succeded";
        state.sessions = state.sessions.filter(e=>e.SessionID !== action.meta.arg);
      })
      .addCase(deleteSession.rejected , (state,action)=>{
        state.sessionStatus = "failed";
        state.sessionError = action.error.message;
      })
      .addCase(editSession.pending,(state)=>{
        state.sessionStatus = "loading"
      })
      .addCase(editSession.fulfilled,(state,action)=>{
        const index = state.sessions.findIndex(e => e.sessionID === action.payload.id);
        state.sessions[index] = action.payload;
        state.sessionStatus = "succeded";
      })
      .addCase(editSession.rejected , (state,action)=>{
        state.sessionStatus = "failed";
        state.sessionError = action.error.message;
      })
    }
})

export default sessionSlice.reducer;

