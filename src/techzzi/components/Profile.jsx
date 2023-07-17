import { FaUserCircle } from "react-icons/fa";

export const Profile = ({toggleSettings, status}) => {
    return (
        <div onClick={toggleSettings}  className='px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer dark:hover:bg-slate-800'>
            <button type="button" className="flex rounded-full items-center text-gray-600 text-sm font-medium h-auto w-auto" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span className="sr-only">Open user menu</span>
                <FaUserCircle className='mr-2 text-lg text-cyan-500 '/> 
                <span className='dark:text-white'>{!(status === 'authenticated') ? 'Sign In' : 'Account'}</span>
            </button>
        </div>
    )
}
