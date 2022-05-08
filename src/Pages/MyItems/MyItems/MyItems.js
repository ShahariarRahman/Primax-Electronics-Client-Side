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
    const [myitems, setMyitems] = useState([]);

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
                if (data.length < 0) {
                    console.log(data);
                    navigate('/login');
                    signOut(auth);
                    return;
                }
                setMyitems(data)
            })

    }, [user?.email, inventory, navigate]);

    return (
        <div className="mx-4 sm:mx-0">
            <div className="py-1 sm:px-4 lg:px-6 flex flex-col items-center">
                <h2 className='my-4 text-2xl'>My Items ({myitems.length})</h2>
                <div className="shadow overflow-hidden border-b border-gray-200 rounded-lg">
                    <table className="table-fixed w-full">
                        <thead className="bg-gray-50">
                            <tr className="w-full px-6 py-4 bg-gray-200 text-left font-medium text-gray-800">
                                <th className="w-full px-6 py-4">Product</th>
                                <th className="w-full px-6 py-4 text-center">Information</th>
                                <th className="w-full px-6 py-4 text-right">Update/Cancel</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {myitems.map(item => <MyItem
                                key={item._id}
                                item={item}
                                deleteInventory={deleteInventory}
                            >
                            </MyItem>)}
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

export default MyItems;