import { useDispatch } from 'react-redux';
import { useForm } from '../../auth/hooks';
import { startLoginWithEmailPassword } from '../../store/auth';

const formData = {
    email: '',
    password: '',
}

export const LoginForm = ({isAuthenticated, errorMessage}) => {


    const dispatch = useDispatch();


    const {email, password, formState, onInputChange} = useForm(formData);

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(startLoginWithEmailPassword(formState));
    }

    return (
        <form onSubmit={onSubmit}>
            <label className="block mt-2">
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
            <label className="block mt-2">
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
            {
                (errorMessage) && <p className='mt-1 text-red-400 text-sm'>The email or password are incorrect</p>
            }
            <button 
                type="submit" 
                disabled={isAuthenticated} 
                className={`rounded-full bg-cyan-400  p-2 w-24 mt-3 text-white font-bold text-base hover:bg-cyan-500 ${(isAuthenticated) ? ` opacity-40` : ``}`}>
                Sign In
            </button>
        </form>             
    )
}
