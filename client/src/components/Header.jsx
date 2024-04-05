import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const [active, setActive] = useState(false)
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <>
    <header className='bg-slate-700 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <div className='flex items-center gap-2'>
          <MdOutlineRealEstateAgent className='text-3xl text-white' />
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-white'>Nelio</span>
            <span className='text-yellow-300'>Estate</span>
          </h1>
          </div>
        
        </Link>
        <form
          onSubmit={handleSubmit}
          className='bg-slate-100 p-3 rounded-lg flex items-center'
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-white hover:underline'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-white hover:underline'>
              About
            </li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className=' text-white hover:underline'>Sign in</li>
            )}
          </Link>
            <button onClick={() => setActive(!active)} className='flex self-center sm:hidden'>
            {active ? <AiOutlineClose className='text-white' /> : <FaBars className='text-white' />}      
            </button>        
        </ul>
      </div>
    </header>
    <div className='bg-slate-700 flex flex-col absolute right-0 sm:hidden'>
        {active && (
        <>
        <Link to="/" className='px-8 py-2 text-white hover:bg-slate-600 focus:bg-slate-600'>Home</Link>
        <Link to="/about" className='px-8 py-2 text-white hover:bg-slate-600 focus:bg-slate-600'>About</Link>
        </>
        )}
    </div>
    </>
  );
}

