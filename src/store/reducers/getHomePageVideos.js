//Simplifies asynchronous API calls. Dispatch actions based on results
//isNext:- gives boolean, tells fetching data is happening is true or false.
//getState:- enables us to access the current redux state.


//we assued 'youtubeApp' as redux state object
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {parseData} from "../../utils/parseData";

const API_KEY =  import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const getHomePageVideos = createAsyncThunk(
    "youtube/App/homePageVideos",
    async(isNext,{getState}) => {
        //Destructing from getState
        const {
            youtubeApp : {nextPageToken : nextPageTokenFromState, videos},
        } = getState()
        const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q="Aman Dhattarwal"&key=${API_KEY}&part=snippet&type=video&${isNext ?`pageToken=${nextPageTokenFromState}`:""}`)

        // console.log(response.data.items)

        const items = response.data.items

        // console.log(items)

        //Creatng a Parse function
        const parsedData = await parseData(items)

        return {parsedData:[...videos,...parsedData],nextPageToken:nextPageTokenFromState}
    }
)