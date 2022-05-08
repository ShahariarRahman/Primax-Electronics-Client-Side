import React, { useEffect } from 'react';

const Blogs = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <div className='flex justify-center mt-2 mx-auto px-4 sm:px-6 lg:px-8 text-gray-800 mb-10 '>
                <div className='w-full shadow-xl hover:shadow-2xl flex flex-col items-center rounded-xl p-10 '>
                    <div className='w-full px-4'>
                        <h2 className='text-2xl font-semibold mt-4 text-center underline'>Questions:</h2>
                        <h3 className='text-lg mt-4'> 1. Difference between javascript and nodejs :</h3>
                        <h4 className='text-lg'> <span > Answer: </span>
                            <ul className='font-thin'>
                                <li>1. </li>
                                <li>2. </li>
                                <li>3. </li>
                                <li>4. </li>
                            </ul>
                        </h4>
                        <h3 className='text-lg mt-4'> 2. When should you use nodejs and when should you use mongodb.</h3>
                        <h4 className='text-lg'> <span>Answer: </span>
                            <ul className='font-thin'>
                                <li>1. </li>
                                <li>2. </li>
                                <li>3. </li>
                                <li>4. </li>
                            </ul>
                        </h4>
                        <h3 className='text-lg mt-4'> 3. Differences between sql and nosql databases.</h3>
                        <h4 className='text-lg'> <span >Answer: </span>
                            <ul className='font-thin'>
                                <li>1. </li>
                                <li>2. </li>
                                <li>3. </li>
                                <li>4. </li>
                            </ul>
                        </h4>
                        <h3 className='text-lg mt-4'> 4. What is the purpose of jwt and how does it work.</h3>
                        <h4 className='text-lg'> <span >Answer: </span>
                            <ul className='font-thin'>
                                <li>1. </li>
                                <li>2. </li>
                                <li>3. </li>
                                <li>4. </li>
                            </ul>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;