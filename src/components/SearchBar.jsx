import {useContext, useEffect, useState} from "react";
import {ShopContext} from "../context/ShopContext";
import { assets } from "../assets/assets";
import {useLocation} from "react-router-dom";

const SearchBar = () => {

    const {search, setsearch, showsearch, setshowsearch} = useContext(ShopContext);

    // we use this location because when search bar is active on one page it also active on other page so we will add a method due to which it will always active on that page where we want that it should be active.
    const location = useLocation();

    const [visible, setvisible] = useState(false);

    // This useEfect control all the things here

    useEffect(() => {
      if(location.pathname.includes('collection')){
        setvisible(true);
      }
      else{
        setvisible(false);
      }
    }, [location])
    

  return showsearch && visible ?  (
    <div className="border-t border-b bg-gray-50 text-center">
        
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
      <input value={search} onChange={(e) => setsearch(e.target.value)} className="flex-1 outline-none bg-inherit text-sm" type="text" placeholder="Search" />
      <img src={assets.search_icon} className="w-4" alt="" />
      </div>


      <img  onClick={() => setshowsearch(false)} src={assets.cross_icon} className="inline w-3 cursor-pointer" alt="" />

    </div>
  ): null;
}

export default SearchBar
