import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMenuOpen } from '../hooks/useMenuOpen';
import { Modal } from './Modal';
import { useDarkMode, useModalOpen } from '../hooks';
import { startGoogleSignIn, startLogout } from '../../store/auth';
import { FiLogOut } from "react-icons/fi";
import { BsFillSunFill, BsFillMoonStarsFill, BsCart } from "react-icons/bs";
import { Profile } from './Profile';


const theme = localStorage.getItem('theme');


export const Navbar = () => {

    const dispatch = useDispatch();
    const {status, displayName} = useSelector(state => state.auth);
    

    const {changeMobMenu, toggleMenu, openSetting, toggleSettings} = useMenuOpen();
    const {openModal, setOpenModal, toggleModal} = useModalOpen();
    const { darkMode, toggleDarkLightMode } = useDarkMode(theme);
 

    useEffect(() => {
        toggleDarkLightMode(theme)
    }, [])


    const onDarkMode = (option) => {
        toggleDarkLightMode(option)
    }

    const onLogout = () =>{
        setOpenModal(false)
        toggleSettings(false)
        dispatch(startLogout());
    }

    const onGoogleSingIn = () => {
        dispatch(startGoogleSignIn());
    }

    return (
        <nav className="sticky z-50 top-0 bg-gray-100  dark:bg-slate-900 dark:border-b dark:border-slate-50/[0.06]">
            <div className="md:container 2xl:max-w-[1530px] 3xl:max-w-[1920px]  xs:mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="inset-y-0 left-0 flex items-center lg:hidden">
                        <button onClick={toggleMenu} type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-200 hover:text-gray-800 dark:hover:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-400" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            {
                                (!changeMobMenu) ?
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                :
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            }
                        </button>
                    </div>
                    <div className="flex flex-1 items-center ml-5 lg:ml-0 lg:items-stretch lg:justify-between">
                        <p className='xxs:text-base xs:text-2xl lg:text-4xl font-semibold text-cyan-500'>TECH-ZZI</p>
                        <div className="hidden  sm:ml-6 lg:block">
                            <div className="flex space-x-4 text-gray-600 hover:text-gray-800 text-sm font-medium dark:text-white ">
                                <NavLink  
                                    className={({isActive}) => `hover:bg-gray-200 rounded-md px-3 py-2 dark:hover:bg-slate-800  ${isActive ? `active bg-gray-900 text-gray-100` : ``}` }
                                    to="/marvel">
                                    Hardware
                                </NavLink>
                                <NavLink  
                                    className={({isActive}) => `hover:bg-gray-200 rounded-md px-3 py-2 dark:hover:bg-slate-800 ${isActive ? `active bg-gray-900 text-gray-100` : ``}` }
                                    to="/dc">
                                    Computer Peripherals
                                </NavLink>
                                <NavLink  
                                    className={({isActive}) => `hover:bg-gray-200 rounded-md px-3 py-2 dark:hover:bg-slate-800  ${isActive ? `active bg-gray-900 text-gray-100` : ``}` }
                                    to="/search">
                                    Technology
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className=' flex items-center space-x-3 w-auto'>
                        <div className="inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                            <div className="relative ml-3" aria-label='test-div'>
                                {(status === 'authenticated') ?
                                    <Profile toggleSettings={toggleSettings} status={status}/>
                                : 
                                    <Profile toggleSettings={toggleModal} status={status}/> 
                                }

                                {
                                    (openSetting && status === 'authenticated') ?
                                    <div className="absolute right-0 z-10 mt-[0.875rem] w-48 origin-top-right rounded-md bg-white  py-1 shadow-lg ring-1  ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                                        <p className="block px-4 py-2 text-sm text-gray-800 font-semibold" aria-label='name-test'>{displayName}</p>
                                        <hr className='w-11/12 mx-auto border-gray-300'/>
                                        <button 
                                            onClick={onLogout} 
                                            aria-label='button-logout' 
                                            className="flex gap-2 justify-end items-center  ml-auto mr-2 px-2 py-1 my-1 text-sm text-slate-700 ease-in-out duration-200 hover:text-slate-900 " 
                                            role="menuitem" tabIndex="-1" id="user-menu-item-2"
                                            >Logout <FiLogOut/></button>
                                    </div>
                                : ``
                                }
                                
                            </div>
                            
                        </div>
                        <div  className='text-cyan-500 rounded-md cursor-pointer xxs:px-2 xs:px-3 py-2 hover:bg-gray-200 dark:hover:bg-slate-800 '>
                            <BsCart/>  
                        </div>
                        <div className={`hidden relative md:flex items-center mx-2  text-lg rounded-3xl ring-2 ${(darkMode === 'dark') ? `bg-gray-700 text-white ring-gray-700 `:`bg-cyan-500 ring-cyan-500  text-white`}`} >
                            <div 
                                className={`rounded-full z-50 mr-3 px-2 py-2 cursor-pointer ${(darkMode === 'light') ? `text-cyan-500 `:``}`} 
                                onClick={() => onDarkMode('light')}>
                                <BsFillSunFill/>
                            </div>
                            <div 
                                className={`rounded-full z-50 px-2 py-2 cursor-pointer  ${(darkMode === 'dark') ? ` text-gray-700 `:``}`} 
                                onClick={() => onDarkMode('dark')}>
                                <BsFillMoonStarsFill/>
                            </div>
                            <span id='' className={`rounded-full absolute z-20 after:content-['']  w-8 h-8 text-white bg-white transition-all duration-700 ${(darkMode === 'light') ? `left-0 `:`left-[60%]`}`}></span>
                        </div>
                    </div>
                    
                </div>
            </div>
                     
            {
                (changeMobMenu) && 
                (
                    <div  className="lg:hidden active:visible transition duration-700" id="mobile-menu">
                        <div className="space-y-2 px-2 pb-3 pt-2 flex flex-col text-gray-600 hover:text-gray-800 dark:text-gray-200  text text-sm font-medium ">
                            <NavLink  
                                className={({isActive}) => `hover:bg-gray-200 rounded-md px-3 py-2 dark:hover:bg-slate-800  ${isActive ? `active bg-gray-900 text-gray-100` : ``}` }
                                to="/marvel">
                                Hardware
                            </NavLink>
                            <NavLink  
                                className={({isActive}) => `hover:bg-gray-200 rounded-md px-3 py-2 dark:hover:bg-slate-800 ${isActive ? `active bg-gray-900 text-gray-100` : ``}` }
                                to="/dc">
                                Computer Peripherals
                            </NavLink>
                            <NavLink  
                                className={({isActive}) => `hover:bg-gray-200 rounded-md px-3 py-2 dark:hover:bg-slate-800  ${isActive ? `active bg-gray-900 text-gray-100` : ``}` }
                                to="/search">
                                Technology
                            </NavLink>
                        
                            <div className={`flex md:hidden relative ml-auto w-fit items-center text-lg rounded-3xl ring-2  ${(darkMode === 'dark') ? `bg-gray-700 text-white ring-gray-700 `:`bg-cyan-500 ring-cyan-500  text-white`}`} >
                                <div 
                                    className={`rounded-full z-50 mr-3 px-2 py-2 cursor-pointer ${(darkMode === 'light') ? `text-cyan-500 `:``}`} 
                                    onClick={() => onDarkMode('light')}>
                                    <BsFillSunFill/>
                                </div>
                                <div 
                                    className={`rounded-full z-50 px-2 py-2 cursor-pointer  ${(darkMode === 'dark') ? ` text-gray-700 `:``}`} 
                                    onClick={() => onDarkMode('dark')}>
                                    <BsFillMoonStarsFill/>
                                </div>
                                <span id='' className={`rounded-full absolute z-20 after:content-['']  w-8 h-8 text-white bg-white transition-all duration-700 ${(darkMode === 'light') ? `left-0`:`left-[60%] `}`}></span>
                            </div>
                            
                            
                        </div>
                        
                    </div>
                )
            }
            
            {
                (openModal && status === 'not-authenticated' || openModal && status === 'checking') && (<Modal toggleSettings={toggleModal} onGoogleSingIn={onGoogleSingIn}/>)
            }
              
        </nav>

    )
}