import React from 'react';
import { Link } from 'react-router-dom';

const MyItem = ({ item, deleteInventory }) => {
    const { _id, name, img, description, price, quantity, supplier } = item;
    return (
        <tr className='border-t'>
            <td className="px-3 md:px-6 py-4 overflow-hidden">
                <div className="sm:flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src={img} alt="" />
                    </div>
                    <div className="ml-1 sm:ml-4">
                        <div className="text-sm font-medium text-rose-50 break-all text-transform: capitalize">{name}</div>
                        <div className="text-sm text-rose-100 break-all font-thin">Quantity: {quantity}</div>
                    </div>
                </div>
            </td>
            <td className="px-1 sm:px-6 py-4 text-sm text-rose-100 break-all text-center text-transform: capitalize font-thin">
                Price: ${price} <br /> Supplier: {supplier}  <br /> Description: {description}
            </td>
            <td className="text-sm text-center md:text-right px-1 sm:px-2 py-2">
                <div >
                    <Link to={`/inventory/${_id}`}>
                        <button className='border border-rose-100 w-20 h-8 bg-yellow-700 hover:bg-yellow-800 text-white rounded-md'>Update</button>
                    </Link>
                    <button onClick={() => deleteInventory(_id)} className='sm:ml-2 border border-rose-100 w-20 h-8 my-1 bg-rose-600 hover:bg-rose-700 text-white rounded-md'>Delete</button>
                </div>
            </td>
        </tr>
    );
};

export default MyItem;