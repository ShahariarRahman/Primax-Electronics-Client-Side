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
            <div className="py-1 sm:px-4 lg:px-6 flex flex-col items-center">
                <h2 className='my-4 text-2xl'>Manage Inventory ({inventory.length})</h2>
                <div className="shadow overflow-hidden border-b border-gray-200 rounded-lg">
                    <table className="table-fixed w-full">
                        <thead className="bg-gray-50">
                            <tr className="w-full px-6 py-4 bg-gray-200 text-left font-medium text-gray-800">
                                <th className="w-full px-6 py-4">Product</th>
                                <th className="w-full px-6 py-4 text-center">Information</th>
                                <th className="w-full px-6 py-4 text-right">Update/Delete</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
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
                    <button className='w-48 h-10 bg-sky-600 hover:bg-sky-700 text-white text-md mb-28 mt-10 rounded-md py-2 font-semibold'>Add New Item</button>
                </Link>
            </div>
        </div>
    );
};

export default ManageInventory;