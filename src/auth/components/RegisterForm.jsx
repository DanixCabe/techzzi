
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks';
import { useState } from 'react';
import { startCreatingUserWithEmailPassword } from '../../store/auth';

const formData = {
    email: '',
    password: '',
    displayName: ''
}

const formValidations = {
    email: [(value) => value.includes('@'), 'Email invalid.'],
    password: [(value) => value.length >=6, 'The password must be of 6 characteres.'],
    displayName: [(value) => value.length >=1, 'The full name is obligatory.'],

}

export const RegisterForm = ({isAuthenticated}) => {

    const [formSubmitted, setFormSubmitted] = useState(false);

    const dispatch = useDispatch();

    const {displayName, email, password, onInputChange, formState, 
        isFormValid, displayNameValid, emailValid, passwordValid,} = useForm(formData, formValidations);

    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true)
        if(!isFormValid) return;

        dispatch(startCreatingUserWithEmailPassword(formState));
    }

    return (
        <form onSubmit={onSubmit}>
            <label className="block mt-2">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Full name
                </span>
                <input 
                    onChange={onInputChange} 
                    value={displayName}
                    type="text" 
                    name="displayName" 
                    className={`mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 ${!!displayNameValid && formSubmitted ? `ring-red-500 focus:ring-red-500 focus:border-red-500` : ``}`}
                    placeholder="Full name" />
                    {
                        (!!displayNameValid && formSubmitted) && <span className='mt-1 text-red-400 text-sm'>{displayNameValid}</span>
                    }
            </label>
            <label className="block mt-2">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Email
                </span>
                <input 
                    onChange={onInputChange} 
                    value={email}
                    type="email" 
                    name="email" 
                    className={`mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 ${!!emailValid && formSubmitted ? `ring-red-500 focus:ring-red-500 focus:border-red-500` : ``}`} 
                    placeholder="you@example.com" />
                    {
                        (!!emailValid && formSubmitted) && <span className='mt-1 text-red-400 text-sm'>{emailValid}</span>
                    }
            </label>
            <label className="block mt-2">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Password
                </span>
                <input
                    onChange={onInputChange} 
                    value={password}
                    type="password" 
                    name="password" 
                    className={`mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 ${!!passwordValid && formSubmitted ? `ring-red-500 focus:ring-red-500 focus:border-red-500` : ``}`} 
                    placeholder="*********"/>
                    {
                        (!!passwordValid && formSubmitted) && <span className='mt-1 text-red-400 text-sm'>{passwordValid}</span>
                    }
            </label>
            <button 
                type="submit" 
                disabled={isAuthenticated} 
                className={`rounded-full bg-cyan-400  p-2 w-24 mt-3 text-white font-bold text-base hover:bg-cyan-500 ${(isAuthenticated) ? ` opacity-40` : ``}`}>
                Register
            </button>
        </form>             
    )
}
