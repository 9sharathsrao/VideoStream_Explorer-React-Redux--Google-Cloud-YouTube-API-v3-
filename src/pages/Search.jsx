import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useAppDispatch, useAppSelector } from '../hooks/useApp'
import { getHomePageVideos } from '../store/reducers/getHomePageVideos'
import Spinner from '../components/Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useNavigate } from 'react-router-dom'
import { clearVideos } from '../features/youtube/youtubeSlice'
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos'
import SearchCard from '../components/SearchCard'

const Search = () => {

    const navigate = useNavigate()
  //BELOW is a hook, and here we have made 'dispatch' function from the our store.
  //dispatch func is used to perform dispatch action on store to update the state/ to handle the state change. It is a redux concept to handle complex state
  const dispatch = useAppDispatch()

  //'state' is of redux, we are selecting and accessing a paticular data from redux store. Videos are in array form
  const videos = useAppSelector((state) => state.youtubeApp.videos)

  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm)

  //Taking data i.e, API so useEffect, produces side effect.
  useEffect(() => {
    dispatch(clearVideos())
    if(searchTerm === "") navigate("/")
    else{
        dispatch(getSearchPageVideos(false))
    }


    // console.log(videos)
  }, [dispatch,navigate,searchTerm])

  return (
    <div className='max-h-screen overflow-auto'>
        <div style={{height:'7.5vh'}}>
          <Navbar/>
        </div>
        <div className='flex' style={{height:'92.7vh'}}>
          <Sidebar/>
          {
            videos.length ? (
              <div className='py-8 pl-8 flex flex-col gap-5 w-full'>
                <InfiniteScroll
                    dataLength={videos.length}
                    next={() => dispatch(getSearchPageVideos(true))}
                    hasMore={videos.length<500}
                    loader={<Spinner/>}
                    height={650}
                >
                    
                    {videos.map((item) => {
                        return (
                            <div className='my-5'>
                                <SearchCard data={item} key={item.videoId}/>
                            </div>
                        )
                    })}
                </InfiniteScroll>
              </div>
            ) : (
              <Spinner/>
            )
          }          
        </div>
    </div>
  )
}

export default Search