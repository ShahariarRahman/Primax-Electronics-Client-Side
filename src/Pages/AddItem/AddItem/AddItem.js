import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';

const AddItem = () => {
    const [user, loading, authError] = useAuthState(auth);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const getTodayDate = () => {
        const today = new Date();
        const dd = today.getDate().toString().padStart(2, '0');
        const mm = today.getMonth().toString().padStart(2, '0');
        const yyyy = today.getFullYear();
        return mm + '/' + dd + '/' + yyyy;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.product.value;
        const supplier = e.target.supplier.value;
        const email = e.target.email.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const img = e.target.image.value;
        const description = e.target.description.value;

        const date = getTodayDate();

        const inventoryItem = { name, supplier, email, price, quantity, img, description, date };

        fetch('https://primax-electronics.herokuapp.com/inventory', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(inventoryItem)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast('Item added Successfully!');
                    e.target.reset();
                }
            })
            .catch(error => console.log(error));
    }
    return (
        <div className='flex flex-col items-center mx-4 sm:mx-0'>
            <div className='bg-white shadow overflow-hidden sm:rounded-lg mt-10 pb-5 w-full'>
                <div className="px-4 py-3 sm:px-6">
                    <h3 className="text-lg font-medium text-gray-900">Add a Item</h3>
                    <p className="mt-1 text-sm text-gray-500">Please Give Details Information of Product</p>
                </div>
                <form onSubmit={handleSubmit} className="border-t border-gray-200">
                    <div className="bg-white px-4 py-1 grid grid-cols-2">
                        <label htmlFor="add-product-name" className="text-sm font-medium text-gray-500 flex items-center">Product Name</label>
                        <input id="add-product-name" name="product" className="block w-full px-3 py-2 border placeholder-gray-400 text-gray-700 focus:outline sm:text-sm rounded-md" placeholder="Please Give a Name of Product" defaultValue={'Demo-1'} required />
                    </div>
                    <div className="bg-white px-4 py-1 grid grid-cols-2">
                        <label htmlFor="add-supplier-name" className="text-sm font-medium text-gray-500 flex items-center">Supplier Name</label>
                        <input id="add-supplier-name" name="supplier" className="block w-full px-3 py-2 border placeholder-gray-400 text-gray-700 focus:outline sm:text-sm rounded-md" placeholder="Please Give a Supplier Name" required />
                    </div>
                    <div className="bg-white px-4 py-1 grid grid-cols-2">
                        <label htmlFor="add-email-address" className="text-sm font-medium text-gray-500 flex items-center">Email Address</label>
                        <input id="add-email-address" name="email" type="email" className="block w-full px-3 py-2 border placeholder-gray-400 text-gray-700 focus:outline sm:text-sm rounded-md" defaultValue={user.email} placeholder="Please Give a User Email Address" required />
                    </div>
                    <div className="bg-white px-4 py-1 grid grid-cols-2">
                        <label htmlFor="add-price" className="text-sm font-medium text-gray-500 flex items-center">Product Price</label>
                        <input id="add-price" name="price" type="number" className="block w-full px-3 py-2 border placeholder-gray-400 text-gray-700 focus:outline sm:text-sm rounded-md" placeholder="Please Give Price of Product" required />
                    </div>
                    <div className="bg-white px-4 py-1 grid grid-cols-2">
                        <label htmlFor="add-quantity" className="text-sm font-medium text-gray-500 flex items-center">Product Quantity</label>
                        <input id="add-quantity" name="quantity" type="number" className="block w-full px-3 py-2 border placeholder-gray-400 text-gray-700 focus:outline sm:text-sm rounded-md" placeholder="Please Give Quantity of Product" required />
                    </div>
                    <div className="bg-white px-4 py-1 grid grid-cols-2">
                        <label htmlFor="add-product-image" className="text-sm font-medium text-gray-500 flex items-center">Product Image URL</label>
                        <input id="add-product-image" name="image" className="block w-full px-3 py-2 border placeholder-gray-400 text-gray-700 focus:outline sm:text-sm rounded-md" placeholder="Please Give URL Link of Product's Image" defaultValue={'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4AQrc?ver=9a49'} required />
                    </div>
                    <div className="bg-white px-4 py-1 grid grid-cols-2">
                        <label htmlFor="add-product-description" className="text-sm font-medium text-gray-500 flex items-center">Product Short Description</label>
                        <textarea className="block w-full px-3 py-2 border placeholder-gray-400 text-gray-700 focus:outline sm:text-sm rounded-md" name="description" placeholder="Please Give Short Description of Product....." id="add-product-description" rows="3" required></textarea>
                    </div>

                    <div className="bg-white px-4 py-1 grid grid-cols-2">
                        <div className="text-sm font-medium text-gray-500 flex items-center">
                            <div className="text-sm font-medium text-gray-500">Save Product Information</div>
                        </div>
                        <div className="text-sm text-gray-900 flex items-center">
                            <button className='w-32 bg-sky-600 hover:bg-sky-700 text-white text-md rounded-md my-1 py-2 font-semibold'>
                                <input type="submit" value="Submit" />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <Link to='/manageinventory'>
                <button className='w-48 h-10 bg-sky-600 hover:bg-sky-700 text-white text-md my-40 rounded-md py-2 font-semibold'>Manage Inventories</button>
            </Link>
        </div>

    );
};

export default AddItem;