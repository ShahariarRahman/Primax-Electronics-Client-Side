import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useInventory from '../../../hooks/useInventory';
import ManageInventoryItem from '../ManageInventoryItem/ManageInventoryItem';

const ManageInventory = () => {
    const [inventory, deleteInventory] = useInventory();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className="mx-4 sm:mx-0">
            <div className="sm:px-4 lg:px-6 flex flex-col items-center bg-black">
                <h2 className='my-5 text-3xl font-bold text-rose-100 border-b-2 border-rose-900'>Manage Inventory ({inventory.length})</h2>
                <div className="shadow overflow-hidden border-b border-rose-200 rounded-lg">
                    <table className="table-fixed w-full">
                        <thead className="bg-black">
                            <tr className="w-full px-6 py-4 bg-gray-900 text-left font-medium">
                                <th className="w-full px-6 py-4 text-white">Product</th>
                                <th className="w-full px-6 py-4 text-center text-white">Information</th>
                                <th className="w-full px-6 py-4 text-right text-white">Update/Delete</th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-900">
                            {inventory.map(item => <ManageInventoryItem
                                key={item._id}
                                item={item}
                                deleteInventory={deleteInventory}
                            >
                            </ManageInventoryItem>)}
                        </tbody>
                    </table>
                </div>
                <Link to='/additem'>
                    <button className='w-48 bg-rose-600 hover:bg-rose-700 text-white text-xl mb-28 mt-10 rounded-md py-2 font-semibold'>Add New Item</button>
                </Link>
            </div>
        </div>
    );
};

export default ManageInventory;