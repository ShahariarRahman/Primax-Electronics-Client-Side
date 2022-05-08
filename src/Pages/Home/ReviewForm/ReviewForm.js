import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { toast } from 'react-toastify';

const ReviewForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        toast('Thank you for the review!')
    }
    return (
        <div className='flex flex-col items-center mx-4 sm:mx-0 w-full'>
            <div className='bg-white shadow overflow-hidden sm:rounded-lg mt-10 pb-5 w-full'>
                <div className="px-4 py-3 sm:px-6 text-center">
                    <h3 className="text-lg font-medium text-gray-900">Supplier Review Form</h3>
                    <p className="mt-1 text-sm text-gray-500">You Don't Need To Log To Send This Form To Us. Just Let Us Know Your Opinion</p>
                </div>
                <form onSubmit={handleSubmit} className="border-t border-gray-200">
                    <div className="bg-white px-4 py-1 grid grid-cols-2">
                        <label htmlFor="issue" className="text-sm font-medium text-gray-500 flex items-center">What Kind Of Issue ?</label>
                        <input id="issue" name="issue" className="block w-full px-3 py-2 border placeholder-gray-400 text-gray-700 focus:outline sm:text-sm rounded-md" placeholder="Please Tell Us About Your Issue" required />
                    </div>
                    <div className="bg-white px-4 py-1 grid grid-cols-2">
                        <label htmlFor="opnionDescription" className="text-sm font-medium text-gray-500 flex items-center">If any Query Let Us Know</label>
                        <textarea className="block w-full px-3 py-2 border placeholder-gray-400 text-gray-700 focus:outline sm:text-sm rounded-md" name="opnionDescription" placeholder="Description Your Query Please....." id="opnionDescription" rows="3" required></textarea>
                    </div>

                    <div className="bg-white px-4 py-1 grid grid-cols-2">
                        <label htmlFor="experience" className="text-sm font-medium text-gray-500 flex items-center">Your Experience About Website</label>
                        <select id="experience" name="experience" className="block w-full px-3 py-2 border placeholder-gray-400 text-gray-700 focus:outline sm:text-sm rounded-md" placeholder="Please Give a Name of Product" value="veryGood" required >
                            <option value="default" disabled>Choose a One</option>
                            <option value="belowAverage">Below Average</option>
                            <option value="good">Good</option>
                            <option value="veryGood">Very Good</option>
                            <option value="excellent">Excellent</option>
                        </select>
                    </div>



                    <div className="bg-white px-4 py-1 grid grid-cols-2">
                        <div className="text-sm font-medium text-gray-500 flex items-center">
                            <div className="text-sm font-medium text-gray-500">Send Us Your Opinion</div>
                        </div>
                        <div className="text-sm text-gray-900 flex items-center">
                            <button className='w-32 bg-sky-600 hover:bg-sky-700 text-white text-md rounded-md my-1 py-2 font-semibold'>
                                <input type="submit" value="Send" />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReviewForm;