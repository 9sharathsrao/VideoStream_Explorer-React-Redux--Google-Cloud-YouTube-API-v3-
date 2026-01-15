//we assued 'youtubeApp' as redux state object
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {parseRecommendedData} from "../../utils/parseRecommendedData";

const API_KEY =  import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const getRecommendedVideo = createAsyncThunk(
    "youtube/App/getRecommendedVideo",
    async(videoId,{getState}) => {
        //Destructing from getState
        const {
            youtubeApp : {currentPlaying:{
                channelInfo:{id:channelId}
            }},
        } = getState()
        const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/activities?&key=${API_KEY}&channelId=${channelId}&part=snippet,contentDetails&maxResults=10&type=videoId=${videoId}`)

        // console.log(response.data.items)

        const items = response.data.items

        // console.log(items)

        //Creatng a Parse function
        const parsedData = await parseRecommendedData(items,videoId)

        return {parsedData}
    }
)