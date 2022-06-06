import React, { useEffect } from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const EmailVerification = () => {
    const [sendEmailVerification, verifyLoad, verifyErr] = useSendEmailVerification(auth);
    const [user, userLoad, userErr] = useAuthState(auth);

    const navigate = useNavigate()
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (verifyLoad || userLoad) {
        return <Loading></Loading>;
    }

    const handleEmailVerification = async () => {
        await sendEmailVerification();
        verifyErr || toast('Verification Message Sent. Please Check Mail.After Verify Relaod the Page');
    }
    console.log(user);

    const forcefullVerify = () => {
        user.emailVerified = true;
        navigate(from, { replace: true });
    }

    if (user?.emailVerified) {
        navigate(from, { replace: true });
    }

    return (
        <div className="pt-16 justify-center bg-gray-800 m-10 p-10 rounded-2xl">
            <div className="mx-4 sm:mx-0">
                <div className="py-1 sm:px-4 lg:px-6 flex flex-col items-center">
                    <h1 className="text-7xl font-bold text-rose-600">Email Is Not Verified !</h1>
                    <h2 className="text-6xl font-medium py-8">Please Verify Your Email Address</h2>
                    {verifyErr &&

                        <>
                            <p className='text-rose-700'>{verifyErr?.message}</p>
                            <p className='text-rose-700'>{"Mail Already Sended Check Inbox or Wait Few Seconds for Send Mail Again"}</p>
                        </>
                    }
                    <div className="shadow overflow-hidden border-b border-gray-700 rounded-lg mt-14">
                        <table className="table-fixed w-full">
                            <thead >
                                <tr className="w-full px-6 py-4 bg-gray-700 text-left font-medium text-rose-100">
                                    <th className="w-full px-6 py-4">Instruction</th>
                                    <th className="w-full px-6 py-4 text-center">Choose Any Option</th>
                                </tr>
                            </thead>
                            <tbody className="bg-black">
                                <tr className='border-t border-gray-700'>
                                    <td className="px-3 md:px-6 py-4 overflow-hidden">
                                        <div className="sm:flex items-center">
                                            <div className="text-sm text-gray-300 break-all">Email Verification Code Will Send to Your Account (Recommended)</div>
                                        </div>
                                    </td>
                                    <td className="text-sm px-1 sm:px-2 py-2">
                                        <div className='flex items-center justify-center'>
                                            <button onClick={handleEmailVerification} className='w-full xl:w-1/2 border border-gray-700 px-1ysm:-100 h-12 sm:h-8  px-3 bg-green-500 hover:bg-green-600 text-white rounded-md flex items-center justify-center'><span className='md:hidden'>Verify Email</span><span className='hidden md:flex'>Send Email Verification Again</span></button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody className="bg-black">
                                <tr className='border-t border-gray-700'>
                                    <td className="px-3 md:px-6 py-4 overflow-hidden">
                                        <div className="sm:flex items-center">
                                            <div className="text-sm text-gray-300 break-all">Only for Development And Testing Purpose (Not Recommended)</div>
                                        </div>
                                    </td>
                                    <td className="text-sm px-1 sm:px-2 py-2">
                                        <div className='flex items-center justify-center'>
                                            <button onClick={forcefullVerify} className='w-full xl:w-1/2 border border-gray-700 px-1 sm:px-3 h-12 sm:h-8 my-1 bg-rose-500 hover:bg-rose-600 text-white rounded-md flex items-center justify-center'><span className='md:hidden'>Without Verify</span><span className='hidden md:flex'>Temporary Access Without Verify</span></button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody className="bg-black">
                                <tr className='border-t border-gray-700'>
                                    <td className="px-3 md:px-6 py-4 overflow-hidden">
                                        <div className="sm:flex items-center">
                                            <div className="text-sm text-gray-300 break-all">Back to Home Page</div>
                                        </div>
                                    </td>
                                    <td className="text-sm px-1 sm:px-2 py-2">
                                        <div>
                                            <Link to='/'>
                                                <div className='flex items-center justify-center'>
                                                    <button className='w-full xl:w-1/2 border border-gray-700 px-1 sm:px-3 h-12 sm:h-8 my-1 bg-rose-500 hover:bg-rose-600 text-white rounded-md flex items-center justify-center'>
                                                        <span className='md:hidden'>Home</span><span className='hidden md:flex'>Back to Home</span>
                                                    </button>
                                                </div>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default EmailVerification;