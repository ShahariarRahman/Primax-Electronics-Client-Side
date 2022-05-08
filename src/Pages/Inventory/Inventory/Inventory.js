import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useInventory from '../../../hooks/useInventory';
// 1. id, name, image, description, price, quantity, supplier name, sold, delivered button.

const Inventory = () => {
    const { inventoryItemId } = useParams();
    const [inventory] = useInventory();
    const [product, setProduct] = useState({});
    const [productQuantity, setProductQuantity] = useState(0);
    const restockInputField = useRef();


    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    useEffect(() => {
        if (inventory.length > 0) {
            const find = inventory.find(item => item._id === inventoryItemId);
            setProduct(find);
            setProductQuantity(find.quantity);
        }
    }, [inventory, inventoryItemId]);


    const { _id, name, email, img, description, price, supplier } = product;


    const handleDeliver = (preQuantity, id) => {
        if (preQuantity < 1) {
            alert('No Product Avaliable to Delivered')
            return;
        }
        const newQuantity = +preQuantity - 1;
        const url = `https://primax-electronics.herokuapp.com/inventory?id=${id}&quantity=${newQuantity}`
        fetch(url, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setProductQuantity(newQuantity);
                    toast('One Item Successfully Delivered !');
                }
            })
            .catch(error => console.log(error))
    }


    const handleRestock = (preQuantity, id) => {
        const numberOfNewProduct = +restockInputField.current.value;
        if (numberOfNewProduct < 1) {
            alert('Restock Item should be more than 0');
            return;
        }
        const newQuantity = +preQuantity + numberOfNewProduct;
        const url = `https://primax-electronics.herokuapp.com/inventory?id=${id}&quantity=${newQuantity}`
        fetch(url, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setProductQuantity(newQuantity);
                    toast(`${restockInputField.current.value} Items Successfully Restocked`);
                    restockInputField.current.value = '';
                }
            })
            .catch(error => console.log(error));
    }

    return (
        <div className='flex flex-col items-center px-4'>
            <div className='bg-gray-50 shadow sm:rounded-lg mt-8 pb-5 w-full'>
                <div className="px-4 py-3 sm:px-6">
                    <h3 className="text-lg font-medium text-gray-900">Inventory</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Deliver and Restock Item</p>
                </div>
                <div className='grid sm:grid-cols-3'>
                    <div className="sm:col-span-2">
                        <div className="border-t border-gray-200">
                            <div className="bg-gray-50 px-4 py-3 grid sm:grid-cols-2">
                                <div className="text-sm font-medium text-gray-500">Product Id</div>
                                <div className="mt-1 text-sm text-gray-900">{_id}</div>
                            </div>
                            <div className="bg-white px-4 py-3 grid sm:grid-cols-2">
                                <div className="text-sm font-medium text-gray-500">Product Name</div>
                                <div className="mt-1 text-sm text-gray-900">{name}</div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 grid sm:grid-cols-2">
                                <div className="text-sm font-medium text-gray-500">Supplier Name</div>
                                <div className="mt-1 text-sm text-gray-900">{supplier}</div>
                            </div>
                            <div className="bg-white px-4 py-3 grid sm:grid-cols-2">
                                <div className="text-sm font-medium text-gray-500">User Email</div>
                                <div className="mt-1 text-sm text-gray-900">{email}</div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 grid sm:grid-cols-2">
                                <div className="text-sm font-medium text-gray-500">Product Price</div>
                                <div className="mt-1 text-sm text-gray-900">${price}</div>
                            </div>
                            <div className="bg-white px-4 py-3 grid sm:grid-cols-2">
                                <div className="text-sm font-medium text-gray-500">Product Quantity</div>
                                <div className="mt-1 text-sm text-gray-900">{productQuantity}</div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 grid sm:grid-cols-2">
                                <div className="text-sm font-medium text-gray-500">Product Short Description</div>
                                <div className="mt-1 text-sm text-gray-900">{description}</div>
                            </div>
                            <div className="bg-white px-4 py-1 grid sm:grid-cols-2">
                                <div className="text-sm font-medium text-gray-500 flex items-center">
                                    <div className="text-sm font-medium text-gray-500">Deliver Product One By One</div>
                                </div>
                                <div className="text-sm text-gray-900 flex items-center">
                                    <button onClick={() => handleDeliver(productQuantity, _id)} className='w-32 bg-sky-600 hover:bg-sky-700 text-white text-md rounded-md my-1 py-2 font-semibold'>Delivered</button>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-3 py-1 grid sm:grid-cols-2">
                                <div className='flex items-center'>
                                    <input ref={restockInputField} id="add-item-image" name="restock-item-product" type="number" required className="block w-3/4 xl:w-1/2 px-3 py-2 border  placeholder-gray-600 text-gray-700 focus:outline sm:text-sm rounded-md" placeholder="Number of Product" />
                                </div>
                                <div className="text-sm text-gray-900 flex items-center">
                                    <button onClick={() => handleRestock(productQuantity, _id)} className='w-32 bg-sky-600 hover:bg-sky-700 text-white text-md rounded-md my-1 py-2 font-semibold whitespace-nowrap'>Restock Item</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border-t border-gray-200'>
                        <div className='flex justify-center'>
                            <img className='object-cover h-96 w-full' src={img} alt="" />
                        </div>
                        <p className='text-center'>Quantity: {productQuantity}</p>
                        <p className='text-center'>Product Name: {name}</p>
                        <p className='text-center'>Product Price: {price}</p>
                    </div>
                </div>
            </div>
            <Link to='/manageinventory'>
                <button className='w-64 h-12 bg-sky-600 hover:bg-sky-700 text-white text-md mt-16 mb-40 rounded-md py-2 font-semibold'>Manage Inventories</button>
            </Link>
        </div>
    );
};

export default Inventory;