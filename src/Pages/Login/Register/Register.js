import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';

import Loading from '../../Shared/Loading/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleRoof } from '@fortawesome/free-solid-svg-icons';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';


const Register = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, emailPassUser, emailPassLoad, emailPassErr] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updateLoad, updateErr] = useUpdateProfile(auth);

    const [signInWithGoogle, googleUser, gooleLoad, googleErr] = useSignInWithGoogle(auth);

    const [token] = useToken(emailPassUser || googleUser);


    let error;
    if (emailPassErr || googleErr) {
        error = <div className='text-red-700'> {emailPassErr?.message || googleErr?.message || updateErr?.message} </div>;
    }

    if (emailPassLoad || gooleLoad || updateLoad) {
        return <Loading></Loading>;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value;
        createUserWithEmailAndPassword(email, password)
            .then(() => updateProfile({ displayName: name }));
    }
    if (token) {
        navigate('/home');
    }

    return (
        <div className="flex items-center justify-center pt-7 px-4 sm:px-6 lg:px-8 mb-40">
            <div className="max-w-md w-full space-y-8 hover:shadow-lg hover:shadow-rose-900 p-12 rounded-2xl bg-black border-2 border-gray-900">
                <div>
                    <div className='flex justify-center mt-8 text-rose-100'>
                        <FontAwesomeIcon className='h-12' icon={faPeopleRoof}></FontAwesomeIcon>
                    </div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-rose-100">Register your account</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div  >
                            <label htmlFor="name" className="sr-only">Email address</label>
                            <input id="name" name="name" type="text" className="appearance-none rounded-none block w-full px-3 py-2 border border-gray-400 placeholder-gray-600 text-rose-100 rounded-t-md focus:outline-none sm:text-sm bg-black" placeholder="Name" />
                        </div>

                        <div  >
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input id="email" name="email" type="email" required className="appearance-none rounded-none block w-full px-3 py-2 border border-gray-400 placeholder-gray-600 text-rose-100  focus:outline-none sm:text-sm bg-black" placeholder="Email address" />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" required className="appearance-none rounded-none block w-full px-3 py-2 border border-gray-400 placeholder-gray-600 text-rose-100 rounded-b-md focus:outline-none sm:text-sm bg-black" placeholder="Password" />
                        </div>
                    </div>

                    {error}
                    <div>
                        <button type="submit" className=" w-full flex justify-center py-2 px-4 border text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-800">
                            Register
                        </button>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="text-sm">
                            <Link to='/login' className="font-medium text-gray-600 hover:text-rose-100"> Already have an Account ?</Link>
                        </div>
                    </div>
                </form>

                <div className="grid sm:grid-cols-3 gap-0 mb-6">
                    <hr className="mt-3 hidden sm:block border-gray-500" />
                    <span className="text-center  text-sm text-rose-100 font-normal">Or continue with</span>
                    <hr className="mt-3 hidden sm:block border-gray-500" />
                </div>

                <div>
                    <button onClick={() => signInWithGoogle()} type="button" className="border-solid border shadow-sm border-gray-400
                        py-1 px-0 rounded w-full focus:outline-none hover:border-gray-600 transition-all duration-200 bg-gray-800">
                        <div className='flex justify-center'>
                            <svg fill="#ffe4e6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z" /></svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;