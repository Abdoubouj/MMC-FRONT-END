import {configureStore} from "@reduxjs/toolkit";
import eventReducer from "../features/EventSlice"
import sessionReducer from "../features/SessionSlice";
import userReducer from "../features/UserSlice"
import speakerReducer from "../features/SpeakerSlice"
export const store = configureStore({
    reducer:{
        event:eventReducer,
        session:sessionReducer,
        user:userReducer,
        speaker:speakerReducer
    }
})