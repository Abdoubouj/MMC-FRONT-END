import {createAsyncThunk , createSlice} from "@reduxjs/toolkit";
import axios from "axios"
const BASE_URL = import.meta.env.VITE_REACT_API_URL;
export const getEvents = createAsyncThunk("event/getEvents",async()=>{
    const response = await axios.get(`${BASE_URL}Event`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    });
    const {data} = response;
    return data;
})

export const getSingleEvent = createAsyncThunk("event/getSingleEvent",async(eventId)=>{
    const response = await axios.get(`${BASE_URL}Event/${eventId}`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    })
    const {data} = response;
    return data;
})
export const addEvent = createAsyncThunk("event/addEvent",async(event)=>{
    const response = await axios.post(`${BASE_URL}Event`,event,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    });
    const {data} = response;
    return data;
})

export const editEvent = createAsyncThunk("event/editEvent",async(updatedEvent)=>{
    const response = await axios.put(`${BASE_URL}Event/${updatedEvent.id}`,updatedEvent,{
      headers:{
        Authorization:`Bearer ${localStorage.getItem("token")}`,
      }
    });
    return response.data;
})

export const deleteEvent = createAsyncThunk("event/deleteEvent",async(eventId)=>{
    const response = await axios.delete(`${BASE_URL}Event/${eventId}`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    });
    const {data} = response;
    return data;
})

const initialState = {
    singleEvent:[],
    singleEventStatus:"idle",
    singleEventError:null,
    events:[],
    eventStatus:"idle",
    eventError:null
}

const eventSlice = createSlice({
    name:"event",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
      builder
      .addCase(getEvents.pending , (state)=>{
           state.eventStatus = "loading";
      })
      .addCase(getEvents.fulfilled , (state,action)=>{
        state.eventStatus = "succeded";
        state.events = action.payload;
      })
      .addCase(getEvents.rejected , (state,action)=>{
        state.eventStatus = "failed";
        state.eventError = action.error.message;
      })
      .addCase(getSingleEvent.pending , (state)=>{
           state.singleEventStatus = "loading";
      })
      .addCase(getSingleEvent.fulfilled , (state,action)=>{
        state.singleEventStatus = "succeded";
        state.singleEvent = action.payload;
      })
      .addCase(getSingleEvent.rejected , (state,action)=>{
        state.singleEventStatus = "failed";
        state.singleEventError = action.error.message;
      })
      .addCase(addEvent.pending , (state)=>{
           state.eventStatus = "loading";
      })
      .addCase(addEvent.fulfilled , (state,action)=>{
        state.eventStatus = "succeded";
        state.events.push(action.payload);
      })
      .addCase(addEvent.rejected , (state,action)=>{
        state.eventStatus = "failed";
        state.eventError = action.error.message;
      })
      .addCase(deleteEvent.pending , (state)=>{
           state.eventStatus = "loading";
      })
      .addCase(deleteEvent.fulfilled , (state,action)=>{
        state.eventStatus = "succeded";
        state.events = state.events.filter(e=>e.eventID !== action.meta.arg);
      })
      .addCase(deleteEvent.rejected , (state,action)=>{
        state.eventStatus = "failed";
        state.eventError = action.error.message;
      })
      .addCase(editEvent.pending,(state)=>{
        state.eventStatus = "loading"
      })
      .addCase(editEvent.fulfilled,(state,action)=>{
        const index = state.events.findIndex(e => e.eventID === action.payload.id);
        state.events[index] = action.payload;
        state.eventStatus = "succeded";
      })
      .addCase(editEvent.rejected , (state,action)=>{
        state.eventStatus = "failed";
        state.eventError = action.error.message;
      })
    }
})

export default eventSlice.reducer;

