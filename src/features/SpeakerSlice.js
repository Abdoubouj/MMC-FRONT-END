import {createAsyncThunk , createSlice} from "@reduxjs/toolkit";
import axios from "axios"
const BASE_URL = import.meta.env.VITE_REACT_API_URL;
export const getSpeakers = createAsyncThunk("speaker/getSpeakers",async()=>{
    const response = await axios.get(`${BASE_URL}Speaker`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    });
    const {data} = response;
    return data;
})

export const getSingleSpeaker = createAsyncThunk("speaker/getSingleSpeaker",async(speakerId)=>{
    const response = await axios.get(`${BASE_URL}Speaker/${speakerId}`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    })
    const {data} = response;
    return data;
})
export const addSpeaker = createAsyncThunk("speaker/addSpeaker",async(speaker)=>{
    const response = await axios.post(`${BASE_URL}Speaker`,speaker,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    });
    const {data} = response;
    return data;
})

export const editSpeaker = createAsyncThunk("speaker/editSpeaker",async(updatedSpeaker)=>{
    const response = await axios.put(`${BASE_URL}Speaker/${updatedSpeaker.id}`,updatedSpeaker,{
      headers:{
        Authorization:`Bearer ${localStorage.getItem("token")}`,
      }
    });
    return response.data;
})

export const deleteSpeaker = createAsyncThunk("speaker/deleteSpeaker",async(speakerId)=>{
    const response = await axios.delete(`${BASE_URL}Speaker/${speakerId}`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    });
    const {data} = response;
    return data;
})

const initialState = {
    singleSpeaker:[],
    singleSpeakerStatus:"idle",
    singleSpeakerError:null,
    speakers:[],
    speakerStatus:"idle",
    speakerError:null
}

const speakerSlice = createSlice({
    name:"speaker",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
      builder
      .addCase(getSpeakers.pending , (state)=>{
           state.speakerStatus = "loading";
      })
      .addCase(getSpeakers.fulfilled , (state,action)=>{
        state.speakerStatus = "succeded";
        state.speakers = action.payload;
      })
      .addCase(getSpeakers.rejected , (state,action)=>{
        state.speakerStatus = "failed";
        state.speakerError = action.error.message;
      })
      .addCase(getSingleSpeaker.pending , (state)=>{
           state.singleSpeakerStatus = "loading";
      })
      .addCase(getSingleSpeaker.fulfilled , (state,action)=>{
        state.singleSpeakerStatus = "succeded";
        state.singleSpeaker = action.payload;
      })
      .addCase(getSingleSpeaker.rejected , (state,action)=>{
        state.singleSpeakerStatus = "failed";
        state.singleSpeakerError = action.error.message;
      })
      .addCase(addSpeaker.pending , (state)=>{
           state.speakerStatus = "loading";
      })
      .addCase(addSpeaker.fulfilled , (state,action)=>{
        state.speakerStatus = "succeded";
        state.speakers.push(action.payload);
      })
      .addCase(addSpeaker.rejected , (state,action)=>{
        state.speakerStatus = "failed";
        state.speakerError = action.error.message;
      })
      .addCase(deleteSpeaker.pending , (state)=>{
           state.speakerStatus = "loading";
      })
      .addCase(deleteSpeaker.fulfilled , (state,action)=>{
        state.speakerStatus = "succeded";
        state.speakers = state.speakers.filter(s=>s.speakerID !== action.meta.arg);
      })
      .addCase(deleteSpeaker.rejected , (state,action)=>{
        state.speakerStatus = "failed";
        state.speakerError = action.error.message;
      })
      .addCase(editSpeaker.pending,(state)=>{
        state.speakerStatus = "loading"
      })
      .addCase(editSpeaker.fulfilled,(state,action)=>{
        const index = state.speakers.findIndex(s => s.speakerID === action.payload.id);
        state.speakers[index] = action.payload;
        state.speakerStatus = "succeded";
      })
      .addCase(editSpeaker.rejected , (state,action)=>{
        state.speakerStatus = "failed";
        state.speakerError = action.error.message;
      })
    }
})

export default speakerSlice.reducer;

