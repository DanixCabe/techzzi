import { NavLink } from "react-router-dom";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { LoginForm, RegisterForm } from "../../auth/components"
import { useShowSpecificForm } from "../../auth/hooks";


export const Modal = ({toggleSettings, onGoogleSingIn}) => {

    const { status, errorMessage} = useSelector(state => state.auth);
    const {specificForm, setSpecificForm, changeSpecificForm } = useShowSpecificForm();
    
    const onChangeForm = (formValue) => {
        changeSpecificForm(formValue)
    }

    const isAuthenticated = useMemo(() => status === 'checking', [status]);

    return (
        <div className='px-6 z-[100] fixed inset-0 flex justify-center items-center transform duration-300 transition-all ease-in-out' >
            <div className='px-6 z-20 fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center' onClick={toggleSettings}></div> 
            <div className='w-full max-w-[400px] flex flex-col z-50'>
                <div className='bg-white rounded-md h-auto'>
                    <div id='modal-header' className='relative px-2 py-3 flex items-start justify-between border-[1px] border-slate-900/[0.10]'>
                        <button
                            onClick={() => onChangeForm('loginForm')} 
                            className={`flex justify-center w-1/2 text-black xxs:text-lg sm:text-2xl font-normal mx-auto relative transition-none hover:font-semibold hover:transition-all hover:duration-300 ${(specificForm === 'loginForm') ? `font-semibold pb-3 after:absolute after:bottom-0 after:h-1 after:w-8 after:rounded-full after:bg-cyan-400`:``}`}
                        >Sign In</button>
                        <button
                            onClick={() => onChangeForm('registerForm')}
                            className={`flex justify-center w-1/2 text-black xxs:text-lg sm:text-2xl font-normal mx-auto relative transition-none hover:font-semibold hover:transition-all hover:duration-300 ${(specificForm === 'registerForm') ? `font-semibold pb-3  after:absolute after:bottom-0 after:h-1 after:w-8 after:rounded-full after:bg-cyan-400`:``}`}
                        >Register</button>
                        <button className='absolute top-0 right-0  text-black text-2xl opacity-60 hover:opacity-100 w-6' onClick={toggleSettings}>X</button>
                    </div>
                    {
                        (specificForm === 'loginForm') ?
                        <div id="contentFormLogin" className={`px-4 py-2`}>
                            <LoginForm isAuthenticated={isAuthenticated} errorMessage={errorMessage}/>
                        </div>
                        :
                        <div id="contentFormRegister" className={`px-4 py-2`}>
                            <RegisterForm isAuthenticated={isAuthenticated}/>
                        </div>
                    }
                    <div className=" px-4 py-3">
                        <div className="flex items-center justify-center">
                            <span className="border-b-[1px] xxs:w-3/12 xs:w-4/12 border-slate-900/[0.10]"></span>
                            <p className="xxs:text-xs xs:text-xs sm:text-sm font-normal text-center mx-3 xxs:w-6/12 xs:w-4/12 ">Or continue with</p>
                            <span className="border-b-[1px] xxs:w-3/12 xs:w-4/12   border-slate-900/[0.10]"></span>
                        </div>
                        <div className="flex justify-center mt-4">
                            <button className={(isAuthenticated) ? `opacity-40` : ``} disabled={isAuthenticated} onClick={onGoogleSingIn}>
                                <img src="https://res.cloudinary.com/dk5aoscls/image/upload/v1690691489/images/google-logo.png" className="w-auto h-8"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
