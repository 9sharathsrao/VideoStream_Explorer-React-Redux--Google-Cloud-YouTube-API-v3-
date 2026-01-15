import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { BiSolidVideoPlus } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { changeSearchTerm, clearVideos } from "../features/youtube/youtubeSlice";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";



const Navbar = () => {

  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  //handling the state change
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm)

  //these functionality we use it in search only
  const handleSearch = () => {
    if(location.pathname !== '/search') navigate("/search")
    else {
      dispatch(clearVideos)
      dispatch(getSearchPageVideos(false))
    }
  }
  return (
    <div className="flex justify-between px-14 h-14 items-center bg-[#212121] opacity-95 sticky text-white">
      <div className="flex gap-8 items-center text-2xl text-white">
        <div>
          <GiHamburgerMenu />
        </div>
        {/* YT logo  */}
        <div className="flex gap-2 items-center justify-center">
          <FaYoutube className="text-3xl text-red-600" />
          <span className="text-2xl font-bold">Youtube</span>
        </div>
      </div>
        <div className="flex items-center justify-center gap-5">
          <form onSubmit={(e) => {
            e.preventDefault()
            handleSearch()
          }}>
            <div className="flex bg-zinc-900 items-center h-10 px-4 pr-2 rounded-3xl">
              <div className="flex gap-5 items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-96 bg-zinc-900 focus:outline-none border-none"
                  value={searchTerm}
                  onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
                />
              </div>
              <button className="h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-3xl">
                <IoSearchSharp className="text-xl"/>
              </button>
            </div>
          </form>
          <div className="text-xl p-3">
            <FaMicrophone />
          </div>
        </div>
          <div className="flex gap-8 items-center text-xl">
            <BiSolidVideoPlus />
          <div className="relative">
            <IoMdNotificationsOutline />
            <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">9+</span>
          </div>
          <CgProfile />
          </div>
        </div>
  );
};
export default Navbar;
