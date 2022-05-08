import React from 'react';
import { Link } from 'react-router-dom';

const ManageInventoryItem = ({ item, deleteInventory }) => {
    const { _id, name, email, img, description, price, quantity, supplier } = item;

    return (
        <tr className='border-t'>
            <td className="px-3 md:px-6 py-4 overflow-hidden">
                <div className="sm:flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src={img} alt="" />
                    </div>
                    <div className="ml-1 sm:ml-4">
                        <div className="text-sm font-medium text-gray-900 break-all ">{name}</div>
                        <div className="text-sm text-gray-500 break-all">Quantity: {quantity}</div>
                    </div>
                </div>
            </td>
            <td className="px-1 sm:px-6 py-4 text-sm text-gray-500 break-all text-center">
                {/* Supplier: {supplier} <br /> Price: {price} <br /> Description: {description} */}
                {email}
            </td>
            <td className="text-sm text-center md:text-right px-1 sm:px-2 py-2">
                <div >
                    <Link to={`/inventory/${_id}`}>
                        <button className='border border-gray-100 w-20 h-8 bg-sky-500 text-white rounded-md'>Update</button>
                    </Link>
                    <button onClick={() => deleteInventory(_id)} className='sm:ml-2 border border-gray-100 w-20 h-8 my-1 bg-red-500 text-white rounded-md'>Delete</button>
                </div>
            </td>
        </tr>
    );
};

export default ManageInventoryItem;