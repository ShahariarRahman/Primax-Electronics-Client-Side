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
        verifyErr || toast('Email verification message sent. Please check your mail again.');
    }
    console.log(verifyErr);

    const forcefullVerify = () => {
        user.emailVerified = true;
        navigate(from, { replace: true });
    }

    return (
        <div className="m-auto pt-16 justify-center ">
            <div className="mx-4 sm:mx-0">
                <div className="py-1 sm:px-4 lg:px-6 flex flex-col items-center">
                    <h1 className="text-7xl font-bold text-sky-600">Email Is Not Verified !</h1>
                    <h2 className="text-6xl font-medium py-8">Please Verify Your Email Address</h2>
                    {verifyErr &&

                        <>
                            <p className='text-red-700'>{verifyErr?.message}</p>
                            <p className='text-red-700'>{"Mail Already Send Check Inbox or Wait a Minute for Again Send Mail"}</p>
                        </>
                    }
                    <div className="shadow overflow-hidden border-b border-gray-200 rounded-lg mt-14">
                        <table className="table-fixed w-full">
                            <thead className="bg-gray-50">
                                <tr className="w-full px-6 py-4 bg-gray-200 text-left font-medium text-gray-800">
                                    <th className="w-full px-6 py-4">Instruction</th>
                                    <th className="w-full px-6 py-4">Choose Any Option</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                <tr className='border-t'>
                                    <td className="px-3 md:px-6 py-4 overflow-hidden">
                                        <div className="sm:flex items-center">
                                            <div className="text-sm text-gray-500 break-all">Email Verification Code Will Send to Your Account (Recommended)</div>
                                        </div>
                                    </td>
                                    <td className="text-sm px-1 sm:px-2 py-2">
                                        <div >
                                            <button onClick={handleEmailVerification} className='w-1/2 border border-gray-100 h-8  px-3 bg-green-500 text-white rounded-md'>Send Email Verification Again</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody className="bg-white">
                                <tr className='border-t'>
                                    <td className="px-3 md:px-6 py-4 overflow-hidden">
                                        <div className="sm:flex items-center">
                                            <div className="text-sm text-gray-500 break-all">Only for Development And Testing Purpose (Not Recommended)</div>
                                        </div>
                                    </td>
                                    <td className="text-sm px-1 sm:px-2 py-2">
                                        <div >
                                            <button onClick={forcefullVerify} className='w-1/2 border border-gray-100 px-3 h-8 my-1 bg-red-500 text-white rounded-md'>Use Website Without Verification</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody className="bg-white">
                                <tr className='border-t'>
                                    <td className="px-3 md:px-6 py-4 overflow-hidden">
                                        <div className="sm:flex items-center">
                                            <div className="text-sm text-gray-500 break-all">Back to Home Page</div>
                                        </div>
                                    </td>
                                    <td className="text-sm px-1 sm:px-2 py-2">
                                        <div>
                                            <Link to='/'>
                                                <button className='w-1/2 border border-gray-100 px-3 h-8 my-1 bg-sky-500 text-white rounded-md'>
                                                    Back to Home
                                                </button>
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