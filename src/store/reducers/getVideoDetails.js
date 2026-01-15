//we assued 'youtubeApp' as redux state object
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { convertRawtoString } from "../../utils/convertRawtoString";
import { timeSince } from "../../utils/timeSince";

const API_KEY =  import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const getVideoDetails = createAsyncThunk(
    "youtube/App/videoDetails",
    async(id) => {
        //Destructing from getState
        const {
            data:{items}
        } = await axios.get(`https://youtube.googleapis.com/youtube/v3/video?key=${API_KEY}&part=snippet,statistics&type=video&id=${id}`)

        return parseData(items[0])
    }
)

const parseData = async(items) => {
    const snippet = items.snippet
    const id = items.id
    const statistics = items.statistics

    const channelImage = items.data.items[0].snippet.thumbnails.default.url 
    const subscriberCount = items.data.item[0].statistics.subscriberCount

    return{
        videoId : id,
        videoTitle : snippet.title,
        videoDescription : snippet.description,
        videoViews:convertRawtoString(
                    statistics.viewCount
                ),
        videoLikes:convertRawtoString(
                    statistics.likeCount
                ),
        videoAge:timeSince(new Date(snippet.publishedAt)
                ),
        channelInfo:{
                id:snippet.channelId,
                image:channelImage,
                name:snippet.channelTitle,
                subscribers:convertRawtoString(subscriberCount,true)
            }                                    
    }
}