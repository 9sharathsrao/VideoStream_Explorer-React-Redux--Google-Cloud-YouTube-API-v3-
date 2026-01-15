//We assumed 'youtubeApp' as redux state object

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {parseData} from "../../utils/parseData";

const API_KEY =  import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const getSearchPageVideos = createAsyncThunk(
    "youtube/App/searchPageVideos",
    async(isNext,{getState}) => {
        //Destructing from getState
        const {
            youtubeApp : {nextPageToken : nextPageTokenFromState, videos, searchTerm},
        } = getState()
        const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${API_KEY}&part=snippet&type=video&${isNext ?`pageToken=${nextPageTokenFromState}`:""}`)

        // console.log(response.data.items)

        const items = response.data.items

        // console.log(items)

        //Creatng a Parse function
        const parsedData = await parseData(items)

        return {parsedData:[...videos,...parsedData],nextPageToken:nextPageTokenFromState}
    }
)