import React from 'react';
import { Link } from 'react-router-dom';

const InventoryItem = ({ item }) => {
    const { _id, name, img, description, price, quantity, supplier } = item;
    return (
        <div className='shadow-lg bg-white flex flex-col items-center rounded-xl w-full 
        transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-105 hover:shadow-blue-300 hover:shadow-xl duration-00'>
            <img className='w-full rounded-t-xl' src={img} alt="" />

            <div className='w-full px-4'>
                <h2 className='text-2xl font-semibold mt-2 text-gray-700'>{name}</h2>
                <h3 className='text-xl font-semibold mt-2 text-gray-700'>Price: ${price}</h3>
                <p className='text-md mt-2 text-gray-700'>Supplier: {supplier}</p>
                <p className='text-md mt-2 text-gray-700'>Quantity: {quantity}</p>
                <h4 className='text-md mt-2 text-gray-700'>Description: {description}</h4>
                <Link to={`/inventory/${_id}`}>
                    <button className='w-full bg-sky-600 hover:bg-sky-700 text-white text-md my-5 rounded-2xl py-2 font-semibold'>
                        Update</button>
                </Link>
            </div>
        </div>
    );
};

export default InventoryItem;