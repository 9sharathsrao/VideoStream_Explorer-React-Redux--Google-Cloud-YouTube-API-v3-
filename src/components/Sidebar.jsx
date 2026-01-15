import React from 'react'
import { MdHome} from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa6";


const Sidebar = () => {

  const mainLinks = [ 
    {
      icon: <MdHome className='text-xl'/>,
      name: 'Home'
        
    },
    {
      icon: <SiYoutubeshorts className='text-xl'/>,
      name: 'Shorts'      
    },
    {
      icon: <MdSubscriptions className='text-xl'/>,
      name: 'Subscription'
    }
  ]

  const otherLinks = [
    {
      icon: <MdVideoLibrary className='text-xl'/>,
      name: 'Library'
    },
    {
      icon: <FaHistory className='text-xl'/>,
      name: 'History'
    },
    {
      icon: <MdOutlineWatchLater className='text-xl'/>,
      name: 'Watch Later'
    },
    {
      icon: <FaThumbsUp className='text-xl'/>,
      name: 'Liked Video'
    }
  ]

  return (
    <div className='w-2/12 bg-[#212121] pr-5 p-2 overflow-auto pb-8 h-screen'>
      <ul className='flex flex-col border-b-2 border-gray-600'>
        {
          mainLinks.map(({icon,name}) => {
            return(
              <li key={name} className={'pl-6 py-3 hover:bg-zinc-600 ${name === "Home" ? "bg-zinc-600" : " "} rounded-xl'}>
                <a href="#" className='flex items-center gap-5'>
                  {icon}
                  <span className='text-sm tracking-wider'>{name}</span>
                </a>
              </li>
            )
          })
        }
      </ul>
      <ul className='flex flex-col border-b border-grey-600'>
        {
          otherLinks.map(({icon,name}) => {
            return(
              <li key={name} className={'pl-6 py-3 hover:bg-zinc-600 ${name === "Home" ? "bg-slate-600" : " "}'}>
                <a href="#" className='flex items-center gap-5'>
                  {icon}
                  <span className='text-sm tracking-wider'>{name}</span>
                </a>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Sidebar