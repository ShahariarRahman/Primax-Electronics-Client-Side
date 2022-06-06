import React, { useEffect } from 'react';

const Blogs = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='flex justify-center mx-auto px-4 sm:px-6 lg:px-8 my-5'>
            <div className='w-full shadow-md hover:shadow-lg flex flex-col text-white bg-gray-900 items-center rounded-xl px-10 pb-16'>
                <div className='w-full px-4'>
                    <h2 className='text-2xl font-semibold mt-4 text-center'>Questions:</h2>
                    <h3 className='text-md mt-4'> 1. Difference between javascript and nodejs :</h3>
                    <h4 className='text-md'> <span > Answer: </span>
                        <ul className='font-thin'>
                            1. JavaScript is a programming language. It's can run any web browser with a proper browser engine.
                            2. Node JS is an interpreter and environment for JavaScript.Node JS have some libraries for JavaScript
                            3. JavaScript used for client-side activity for a web application
                            4. Node JS used for accessing non-blocking operation of any operating system. Like creating, executing a shell script, accessing any hardware-specific information, running any backend job etc.
                            5. JavaScript can run any browser
                            6. Node JS only run in a V8 engine
                        </ul>
                    </h4>
                    <h3 className='text-md mt-4'> 2. When should you use nodejs and when should you use mongodb.</h3>
                    <h4 className='text-md'> <span>Answer: </span>
                        <ul className='font-thin'>
                            1. We should use use mongoDB when we need to storage data in database
                            2. We should nodeJS to process the data in backend or server side
                            3. When we need to store data permanently we can save the data to mongoDB
                            4. When we need to get the data from mongodb and sent to client side we should we nodejs or it's framework express
                        </ul>
                    </h4>
                    <h3 className='text-md mt-4'> 3. Differences between sql and nosql databases.</h3>
                    <h4 className='text-md'> <span >Answer: </span>
                        <ul className='font-thin'>
                            1. Sql means structurose query language which are called relational Databases
                            2. Nosql are no declarative query language called as non-relational/distributed database
                            3. SQL databases are table based databases
                            4. Nosql databases are document based, key-value pairs, graph databases
                            5. Sql are not suitable for hierarchical data to storage.
                            6. Nosql are suitable for hierarchical data to storage.
                        </ul>
                    </h4>
                    <h3 className='text-md mt-4'> 4. What is the purpose of jwt and how does it work.</h3>
                    <h4 className='text-md'> <span >Answer: </span>
                        <ul className='font-thin'>
                            Purpose : JWT can be used as an access token to prevent unwanted access to a protected resource. They're often used as Bearer tokens, which the API will decode and validate before sending a response.

                            How work : Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be alterose after the token is issued.
                        </ul>
                    </h4>
                </div>
            </div>
        </div>

    );
};

export default Blogs;