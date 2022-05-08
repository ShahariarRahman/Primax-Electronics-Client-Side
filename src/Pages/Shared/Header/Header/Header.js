import React, { useState } from 'react';
import { Transition } from "@headlessui/react";
import auth from '../../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import CustomLink from '../CustomLink/CustomLink';

import logo from '../../../../images/logo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [user, loading] = useAuthState(auth);

    // if (loading) {
    //    return <Loading></Loading>
    // }

    return (
        <div className='top-0 sticky z-10 bg-sky-700 w-full'>
            <nav className="max-w-screen-2xl m-auto">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <a href='home#home'>
                                    <img className="h-9 w-18 px-4  hover:bg-sky-700 rounded-md cursor-pointer" src={logo} alt="Primax Electronics" />
                                </a>
                            </div>
                            <div className="hidden lg:block">
                                <div className="ml-6 flex items-baseline space-x-4">
                                    <CustomLink to='/home' className=" hover:bg-sky-700 text-white px-3 py-2 rounded-md text-sm font-semibold">HOME</CustomLink>
                                    <CustomLink to='/blogs' className=" hover:bg-sky-700 px-3 py-2 rounded-md text-sm font-semibold">BLOGS</CustomLink>
                                    <CustomLink to='/about' className=" hover:bg-sky-700 px-3 py-2 rounded-md text-sm font-semibold">ABOUT</CustomLink>
                                </div>
                            </div>
                        </div>

                        {user ?
                            <div className='items-baseline space-x-4 hidden lg:flex'>
                                <CustomLink to='/manageinventory' className=" hover:bg-sky-700 px-3 py-2 rounded-md text-sm font-semibold">MANAGE ITEMS</CustomLink>
                                <CustomLink to='/additem' className=" hover:bg-sky-700 px-3 py-2 rounded-md text-sm font-semibold">ADD ITEM</CustomLink>
                                <CustomLink to='/myitems' className=" hover:bg-sky-700 px-3 py-2 rounded-md text-sm font-semibold">MY ITEMS</CustomLink>
                                <button onClick={() => signOut(auth)} className="hidden lg:block hover:bg-sky-700 px-3 py-2 rounded-md text-sm font-semibold" >LOG OUT</button>
                            </div>

                            :
                            <div className="flex items-center">
                                <div className="hidden lg:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        <CustomLink to='/login' className="hover:bg-sky-700 px-4 py-2 rounded-md text-sm font-semibold">LOG IN</CustomLink>
                                    </div>
                                </div>
                            </div>}


                        <div className="-mr-2 flex lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-sky-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ?

                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                    :
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                }
                            </button>
                        </div>

                    </div>
                </div>

                <Transition show={isOpen} enter="transition ease-out duration-2000 transform" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="transition ease-in duration-2000 transform" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95" >

                    {() => (
                        <div className="lg:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
                                <CustomLink to='/' className="hover:bg-sky-700 block px-3 py-2 rounded-md text-base font-semibold">HOME</CustomLink>
                                <CustomLink to='/blogs' className="hover:bg-sky-700 block px-3 py-2 rounded-md text-base font-semibold">BLOGS</CustomLink>
                                <CustomLink to='/about' className="hover:bg-sky-700 block px-3 py-2 rounded-md text-base font-semibold">ABOUT</CustomLink>

                                {user ?
                                    <div>
                                        <CustomLink to='/manageinventory' className="hover:bg-sky-700 block px-3 py-2 rounded-md text-base font-semibold">MANAGE ITEMS</CustomLink>
                                        <CustomLink to='/additem' className="hover:bg-sky-700 block px-3 py-2 rounded-md text-base font-semibold">ADD ITEM</CustomLink>
                                        <CustomLink to='/myitems' className="hover:bg-sky-700 block px-3 py-2 rounded-md text-base font-semibold">MY ITEMS</CustomLink>
                                        <button onClick={() => signOut(auth)} className="hover:bg-sky-700 block w-full px-3 py-2 rounded-md text-base font-semibold" >LOG OUT</button>
                                    </div>
                                    :
                                    <CustomLink to='/login' className="hover:bg-sky-700 block px-3 py-2 rounded-md text-base font-semibold">LOG IN </CustomLink>
                                }
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>

    );
};

export default Header;