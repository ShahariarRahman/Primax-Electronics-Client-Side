import React, { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <div className='flex justify-center mt-2 mx-auto px-4 sm:px-6 lg:px-8 text-gray-800'>
                <div className='shadow-lg hover:shadow-xl  flex flex-col items-center rounded p-8'>
                    <div className='w-full px-4'>
                        <h4 className='text-xl font-thin'>
                            <p className='font-normal'>What In Our Website:</p>
                            This Project store many kind of Electronics items. In inventory there are Smart TV, Refrigerator and Freezer, Microwave, Laptop, Computers, Smartphones and Other Electronics goods. There are multiple Supplier who can supply good for website. If anyone want to be a supplier he/she have to make a registration to the website and he/she can store Electronics items. If any Query they can Let Owner by fillup Reviewing Form.
                        </h4>
                        <h4 className='text-xl font-thin mt-5'>
                            <p className='font-normal'>All Features/functionality of Website:</p>
                            This website is a make for Professional Wedding Photographer.
                            Homage: Homepage Contain Introduction of website, Top six inventory item and a Reviewing Form.
                            Login: In Login page used can log in using Google or Email Password System which secured by JSON Web Token.
                            Registration: In Registration page user can log in using Google or Email Password System which also secured by JSON Web Token.
                            Manage items: All Inventory are shown there in manage items page with update and delete functionality.
                            Add a Item: Supplier can additem by giving details Iiformation of product.
                            My Item: All item added by login user will show in that page with update and cancel button and secured by JSON Web Token..
                            Blogs: Blogs Contain Answer of Question Related to nodejs, mongodb, jwt etc.
                            About: About Contain some details information About.
                        </h4>
                        <h4 className='text-xl font-thin mt-5'>
                            <p className='font-normal'>Technologies used in Our Website:</p>
                            Client Side: React, React Router, Firebase, React Firebase Hooks, Tailwind, Font Awesome, React Toastify etc.
                            Server Side: mongodb, express.
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;