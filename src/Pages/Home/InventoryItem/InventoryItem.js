import React from 'react';
import { Link } from 'react-router-dom';

const InventoryItem = ({ item }) => {
    const { _id, name, img, description, price, quantity, supplier } = item;
    return (
        <div className='shadow-lg flex flex-col items-center rounded-xl w-full 
        transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-105 hover:shadow-rose-900 hover:shadow-xl duration-400 bg-gray-900 pb-32 relative'>
            <div className=' rounded-t-2xl w-full'>
                <img className='object-scale-down rounded-t-xl' src={img} alt="" />
            </div>
            <div className='w-full px-5'>
                <h2 className='text-2xl font-semibold mt-2 text-rose-50'>{name}</h2>
                <h3 className='text-xl font-semibold mt-2 text-rose-50'>Price: ${price}</h3>
                <p className='text-md mt-2 text-rose-50'>Supplier: {supplier}</p>
                <p className='text-md mt-2 text-rose-50'>Quantity: {quantity}</p>
                <h4 className='text-md mt-2 text-rose-50'>Description: {description}</h4>
                <div className='absolute bottom-5 w-full pr-12'>
                    <Link to={`/inventory/${_id}`}>
                        <button className='w-full bg-gray-600 hover:bg-rose-700 text-rose-50 text-sm my-5 rounded-2xl py-2 font-semibold'>
                            Update</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default InventoryItem;