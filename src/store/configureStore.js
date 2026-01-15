import { configureStore } from "@reduxjs/toolkit";
import youtubeReducer from '../features/youtube/youtubeSlice'

const store = configureStore({
    reducer:{
        youtubeApp: youtubeReducer
    }
})

export default store

//making another reducer that gives videos to the YT's home page.