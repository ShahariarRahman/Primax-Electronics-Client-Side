import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useInventory from '../../../hooks/useInventory';
import MyItem from '../MyItem/MyItem';

const MyItems = () => {
    const [user, load, authErr] = useAuthState(auth);
    const [inventory, deleteInventory] = useInventory();
    const [myItems, setMyitems] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    useEffect(() => {
        const url = `https://primax-electronics.herokuapp.com/myitem?email=${user?.email}`;
        fetch(url, {
            headers: { authorization: `Bearer ${localStorage.getItem('Primax-Electronics-Access-Token')}` }
        })
            .then(res => res.json())
            .then(data => {
                if (data.length >= 0) {
                    setMyitems(data);
                    return;
                }
                console.log(data);
                navigate('/login');
                signOut(auth);
            })

    }, [user?.email, inventory, navigate]);

    return (
        <div className="mx-4 sm:mx-0">
            <div className="sm:px-4 lg:px-6 flex flex-col items-center bg-black">
                <h2 className='my-5 text-3xl font-bold text-rose-100 border-b-2 border-rose-900'>My Items ({myItems.length})</h2>
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
                            {myItems.map(item => <MyItem
                                key={item._id}
                                item={item}
                                deleteInventory={deleteInventory}
                            >
                            </MyItem>)}
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

export default MyItems;