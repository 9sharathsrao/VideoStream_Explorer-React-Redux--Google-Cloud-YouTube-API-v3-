import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useAppDispatch, useAppSelector } from '../hooks/useApp'
import { getHomePageVideos } from '../store/reducers/getHomePageVideos'
import Spinner from '../components/Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'
import Card from '../components/Card'

const Home = () => {
  //BELOW is a hook, and here we have made 'dispatch' function from the our store.
  //dispatch func is used to perform dispatch action on store to update the state/ to handle the state change. It is a redux concept to handle complex state
  const dispatch = useAppDispatch()

  //'state' is of redux, we are selecting and accessing a paticular data from redux store. Videos are in array form
  const videos = useAppSelector((state) => state.youtubeApp.videos)

  //Taking data i.e, API so useEffect, produces side effect.
  useEffect(() => {
    dispatch(getHomePageVideos(false))
    // console.log(videos)
  }, [dispatch])

  return (
    <div className='max-h-screen overflow-auto'>
        <div style={{height:'7.5vh'}}>
          <Navbar/>
        </div>
        <div className='flex' style={{height:'92.7vh'}}>
          <Sidebar/>
          {
            videos.length ? (
              <InfiniteScroll
                dataLength={videos.length}
                next={() => dispatch(getHomePageVideos(true))}
                hasMore={videos.length<500}
                loader={<Spinner/>}
                height={650}
              >
                <div className='grid gap-y-14 gap-x-8 grid-cols-4 p-8'>
                  {videos.map((item) => {
                    return <Card data={item} key={item.videoId}/>
                  })}
                </div>                
              </InfiniteScroll>
            ) : (
              <Spinner/>
            )
          }          
        </div>
    </div>
  )
}

export default Home