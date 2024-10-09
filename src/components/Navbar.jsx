import {assets} from '../assets/assets'
import {NavLink, Link} from 'react-router-dom'
import { useContext, useState } from 'react';
import {ShopContext} from "../context/ShopContext"

const Navbar = () => {

  // This State control the Menu Bar
  const [visible, setvisible] = useState(false);

 // we import this showsearch from the context to control the searchbar from the navbar 
  const {setshowsearch, cartcount, navigate, settoken, token, setcartitem} = useContext(ShopContext);

  // Logout 
  const logout = () => {
    navigate('/login')
    localStorage.removeItem('token');
    settoken('')
    setcartitem({})
    
  }



  return (
    <div className="flex items-center justify-between py-5 font-medium">
      
      <Link to="/"><img src={assets.logo} className='w-36' alt="" /></Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">

        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr  className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>

        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>COLLECTION</p>
          <hr  className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>

        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr  className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>

        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr  className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>

      </ul>


      {/* Search Icon */}

      <div className='flex items-center gap-6'>
        <img onClick={() => setshowsearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />

        {/* For Profile icon */}
        <div className='group relative'>
          <img onClick={() => token ? null : navigate('/login') } src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
          { token &&
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='curosr-pointer hover:text-black'>My Profile</p>
              <p className='curosr-pointer hover:text-black'>Orders</p>
              <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
}
        </div>

        {/* Cart */}
        <Link to='/cart' className='relative'>
        <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
        <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white rounded-full text-[8px]'>{cartcount()}</p>
        </Link>

        <img onClick={() => setvisible(true)} src={assets.menu_icon} className='w-4 cursor-pointer sm:hidden' alt="" />
      </div>

      {/* Sidebar Menu */}
      <div className={`absolute top-0 bottom-0 right-0 overflow-hidden transition-all bg-white ${visible? 'w-full': 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div className='flex items-center gap-4 p-3'>
            <img onClick={() => setvisible(false)} className='rotate-180 h-4 cursor-pointer' src={assets.dropdown_icon} alt="" />
            <p onClick={() => setvisible(false)} className='font-medium cursor-pointer'>Back</p>
          </div>

          <NavLink onClick={() => setvisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
          <NavLink onClick={() => setvisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={() => setvisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
          <NavLink onClick={() => setvisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
        </div>
      </div>

    </div>
  )
}

export default Navbar
