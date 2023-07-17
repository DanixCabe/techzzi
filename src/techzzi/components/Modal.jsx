

export const Modal = ({toggleSettings, onInputChange, email, password, onGoogleSingIn}) => {


    return (
        <div className='px-6 z-20 fixed inset-0 flex justify-center items-center transform duration-300 transition-all ease-in-out' >
            <div className='px-6 z-20 fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center' onClick={toggleSettings}></div> 
            <div className='w-full max-w-[400px] flex flex-col z-50'>
                <div className='bg-white rounded-md h-auto'>
                    <div id='modal-header' className='relative px-2 py-3 flex items-center justify-between border-[1px] border-slate-900/[0.10]'>
                        <p className="text-black text-3xl font-medium mx-auto">Sign In</p>
                        <button className='absolute top-0 right-0  text-black text-2xl opacity-60 hover:opacity-100 w-6' onClick={toggleSettings}>X</button>
                    </div>
                    <div className='px-4 py-2'>
                        <form>
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Email
                                </span>
                                <input 
                                    onChange={onInputChange} 
                                    value={email}
                                    type="email" 
                                    name="email" 
                                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" 
                                    placeholder="you@example.com" />
                            </label>
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Password
                                </span>
                                <input
                                    onChange={onInputChange} 
                                    value={password}
                                    type="password" 
                                    name="password" 
                                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" 
                                    placeholder="*********"
                                    />
                            </label>
                        </form>
                    </div>
                    <div className=" px-4 py-3">
                        <div className="flex items-center justify-center">
                            <span className="border-b-[1px] xxs:w-3/12 xs:w-4/12 border-slate-900/[0.10]"></span>
                            <p className="xxs:text-xs xs:text-xs sm:text-sm font-normal text-center mx-3 xxs:w-6/12 xs:w-4/12 ">Or continue with</p>
                            <span className="border-b-[1px] xxs:w-3/12 xs:w-4/12   border-slate-900/[0.10]"></span>
                        </div>
                        <div className="flex justify-center mt-4">
                            <button onClick={onGoogleSingIn}>
                                <img src="/src/assets/google-logo.png" className="w-auto h-8"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
