import React from 'react';
import { toast } from 'react-toastify';

const ReviewForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        toast('Thank you for the review!')
    }
    return (
        <div className='flex flex-col justify-center items-center bg-black pt-2 w-full'>
            <h2 className='mt-16 text-3xl font-bold text-rose-100'> SUPPLIER REVIEWS FORM</h2>
            <div className="py-5 text-center w-full border-t-2 border-b-2 my-5 border-rose-100">
                <p className="mt-1 text-sm text-rose-100">Not Need To Login. Send This Form To Us. Let Us Know Your Opinion</p>
            </div>
            <div className='bg-black shadow pb-12 pt-10 px-5 w-full'>
                <div className='p-10 rounded-2xl w-full bg-black'>
                    <form onSubmit={handleSubmit}>
                        <div className="px-4 py-1 grid sm:sm:grid-cols-2">
                            <label htmlFor="issue" className="text-sm font-medium text-rose-50 flex items-center text-transform: uppercase">What Kind Of Issue ?</label>
                            <input id="issue" name="issue" className="block w-full px-3 py-2 border text-gray-100 focus:outline text-sm rounded-md bg-black placeholder:text-gray-500" placeholder="Please Tell Us About Your Issue" required />
                        </div>
                        <div className="px-4 py-1 grid sm:grid-cols-2">
                            <label htmlFor="opinionDescription" className="text-sm font-medium text-rose-50 flex items-center text-transform: uppercase">If any Query Let Us Know</label>
                            <textarea className="block w-full px-3 py-2 border text-gray-100 focus:outline text-sm rounded-md placeholder:text-gray-500 bg-black" name="opinionDescription" placeholder="Description Your Query Please....." id="opinionDescription" rows="5" required></textarea>
                        </div>

                        <div className="px-4 py-1 grid sm:grid-cols-2">
                            <label htmlFor="experience" className="text-sm font-medium text-rose-50 flex items-center text-transform: uppercase">Your Experience About Website</label>
                            <select id="experience" name="experience" className="block w-full px-3 py-2 border bg-black text-gray-100 focus:outline text-sm rounded-md" placeholder="Please Give a Name of Product" value="veryGood" required >
                                <option className='bg-black' value="default" disabled>Choose a Option</option>
                                <option className='bg-black' value="belowAverage">Below Average</option>
                                <option className='bg-black' value="good">Good</option>
                                <option className='bg-black' value="veryGood">Very Good</option>
                                <option className='bg-black' value="excellent">Excellent</option>
                            </select>
                        </div>
                        <div className="px-4 py-1 grid sm:grid-cols-2">
                            <div className="flex items-center">
                                <div className="text-sm font-medium text-rose-50 text-transform: uppercase">Send Us Your Opinion</div>
                            </div>
                            <div className="text-sm text-rose-900 flex items-center">
                                <button className='w-full bg-rose-600 hover:bg-rose-700 text-white text-md rounded-md my-1 py-2 font-semibold'>
                                    <input type="submit" value="Send Us" />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReviewForm;