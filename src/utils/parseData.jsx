import React from 'react'
import axios from 'axios'
import { parseVideoDuration } from './parseVideoDuration';
import { convertRawtoString } from './convertRawtoString';
import { timeSince } from './timeSince';

const API_KEY =  import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const parseData = async(items) => {

  try {
    const videoIds = []
    const channelIds = []

    items.forEach((item) => {
      channelIds.push(item.snippet.channelId)
      videoIds.push(item.id.videoId)
    });

    const{
      data: {items:channelsData},
    } = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&id=${channelIds.join(",")}&key=${API_KEY}`)

    const parsedChannelsData = []
    channelsData.forEach((channel) => parsedChannelsData.push({
      id:channel.id,
      image:channel.snippet.thumbnails.default.url,
    }))

    const {
      data:{items:videosData},
    } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds.join(",")}&key=${API_KEY}`
    )
    
    const parsedData = []
    items.forEach((item,index) => {
      const channelImage = parsedChannelsData.find((data) => data.id === item.snippet.channelId)?.image;
      const videoDetail = videosData.find((video) => video.id === item.id.videoId);
      if(channelImage && videoDetail){
        parsedData.push({
          videoId : item.id.videoId,
          videoTitle : item.snippet.title,
          videoDescription : item.snippet.description,
          videoThumbnail : item.snippet.thumbnails.medium.url,
          videoLink:`https://www.youtube.com/watch?v=${item.id.videoId}`,
          videoDuration : parseVideoDuration(
            videoDetail.contentDetails.duration
          ),
          videoViews:convertRawtoString(
            videoDetail.statistics.viewCount
          ),
          videoAge:timeSince(new Date(item.snippet.publishedAt)
          ),
          channelInfo:{
            id:item.snippet.channelId,
            image:channelImage,
            name:item.snippet.channelTitle
          }
        })
      }
    })
    return parsedData
  } catch (error) {
    console.log(error)
  }
}
 