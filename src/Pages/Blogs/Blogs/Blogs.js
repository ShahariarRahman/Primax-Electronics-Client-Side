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
                                <li>1. JavaScript is a programming language. It's can run any web browser with a proper browser engine.</li>
                                <li>2. Node JS is an interpreter and environment for JavaScript.Node JS have some libraries for JavaScript</li>
                                <li>3. JavaScript used for client-side activity for a web application</li>
                                <li>4. Node JS used for accessing non-blocking operation of any operating system. Like creating, executing a shell script, accessing any hardware-specific information, running any backend job etc.</li>
                                <li>5. JavaScript can run any browser</li>
                                <li>6. Node JS only run in a V8 engine</li>
                            </ul>
                        </h4>
                        <h3 className='text-lg mt-4'> 2. When should you use nodejs and when should you use mongodb.</h3>
                        <h4 className='text-lg'> <span>Answer: </span>
                            <ul className='font-thin'>
                                <li>1. We should use use mongoDB when we need to storage data in database </li>
                                <li>2. We should nodeJS to process the data in backend or server side </li>
                                <li>3. When we need to store data permanently we can save the data to mongoDB</li>
                                <li>4. When we need to get the data from mongodb and sent to client side we should we nodejs or it's framework express</li>
                            </ul>
                        </h4>
                        <h3 className='text-lg mt-4'> 3. Differences between sql and nosql databases.</h3>
                        <h4 className='text-lg'> <span >Answer: </span>
                            <ul className='font-thin'>
                                <li>1. Sql means structured query language which are called relational Databases</li>
                                <li>2. Nosql are no declarative query language called as non-relational/distributed database</li>
                                <li>3. SQL databases are table based databases</li>
                                <li>4. NoSQL databases are document based, key-value pairs, graph databases</li>
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