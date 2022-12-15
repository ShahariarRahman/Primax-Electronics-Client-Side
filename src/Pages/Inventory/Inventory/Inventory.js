import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useInventory from '../../../hooks/useInventory';
// 1. id, name, image, description, price, quantity, supplier name, sold, Delivered button.

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
        const url = `https://primax-electronics-api.onrender.com/inventory?id=${id}&quantity=${newQuantity}`
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
        const url = `https://primax-electronics-api.onrender.com/inventory?id=${id}&quantity=${newQuantity}`
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
        <div className='flex flex-col items-center mx-4'>
            <div className='bg-gray-800 shadow overflow-hidden rounded-lg mt-10 pb-5 w-full p-2 sm:p-5'>
                <div className="px-4 py-3 sm:px-6">
                    <h3 className="text-lg font-medium text-rose-100">Update Inventory</h3>
                    <p className="mt-1 text-sm text-rose-100">Deliver and Restock Item</p>
                </div>
                <div className='grid sm:grid-cols-3'>
                    <div className="sm:col-span-2">
                        <div className="border-t border-gray-200">
                            <div className="bg-gray-700 px-4 py-3 grid sm:grid-cols-2">
                                <div className="text-sm font-medium  text-rose-100">Product Id</div>
                                <div className="mt-1 text-sm  text-rose-100 font-light">{_id}</div>
                            </div>
                            <div className=" px-4 py-3 grid sm:grid-cols-2">
                                <div className="text-sm font-medium  text-rose-100">Product Name</div>
                                <div className="mt-1 text-sm  text-rose-100 font-light">{name}</div>
                            </div>
                            <div className="bg-gray-700 px-4 py-3 grid sm:grid-cols-2">
                                <div className="text-sm font-medium  text-rose-100">Supplier Name</div>
                                <div className="mt-1 text-sm  text-rose-100 font-light">{supplier}</div>
                            </div>
                            <div className=" px-4 py-3 grid sm:grid-cols-2">
                                <div className="text-sm font-medium  text-rose-100">User Email</div>
                                <div className="mt-1 text-sm  text-rose-100 font-light">{email}</div>
                            </div>
                            <div className="bg-gray-700 px-4 py-3 grid sm:grid-cols-2">
                                <div className="text-sm font-medium  text-rose-100">Product Price</div>
                                <div className="mt-1 text-sm  text-rose-100 font-light">${price}</div>
                            </div>
                            <div className=" px-4 py-3 grid sm:grid-cols-2">
                                <div className="text-sm font-medium  text-rose-100">Product Quantity</div>
                                <div className="mt-1 text-sm  text-rose-100 font-light">{productQuantity}</div>
                            </div>
                            <div className="bg-gray-700 px-4 py-3 grid sm:grid-cols-2">
                                <div className="text-sm font-medium  text-rose-100">Product Short Description</div>
                                <div className="mt-1 text-sm  text-rose-100 font-light">{description}</div>
                            </div>
                            <div className=" px-4 py-1 grid sm:grid-cols-2">
                                <div className="text-sm font-medium  text-rose-100 flex items-center">
                                    <div className="text-sm font-medium  text-rose-100">Deliver Product One By One</div>
                                </div>
                                <div className="text-sm  text-rose-100 flex items-center">
                                    <button onClick={() => handleDeliver(productQuantity, _id)} className='w-32 bg-rose-600 hover:bg-rose-700 text-white text-md rounded-md my-1 py-2 font-semibold'>Delivered</button>
                                </div>
                            </div>
                            <div className="bg-gray-700 px-3 py-1 grid sm:grid-cols-2">
                                <div className='flex items-center'>
                                    <input ref={restockInputField} id="add-item-image" name="restock-item-product" type="number" required className="block w-3/4 xl:w-1/2 px-3 py-2 border  placeholder-gray-600 text-gray-800 focus:outline sm:text-sm rounded-md bg-black" placeholder="Number of Product" />
                                </div>
                                <div className="text-sm  text-rose-100 flex items-center">
                                    <button onClick={() => handleRestock(productQuantity, _id)} className='w-32 bg-rose-600 hover:bg-rose-700 text-white text-md rounded-md my-1 py-2 font-semibold whitespace-nowrap'>Restock Item</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border border-gray-200 '>
                        <div className='flex justify-center p-5'>
                            <img className='object-cover h-80 w-full' src={img} alt="" />
                        </div>
                        <div className='text-center font-thin bg-gray-900 text-rose-100 pb-2'>
                            <p>Quantity: {productQuantity}</p>
                            <p>Product Name: {name}</p>
                            <p>Product Price: {price}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Link to='/manageinventory'>
                <button className='w-64 h-12 bg-rose-600 hover:bg-rose-700 text-white text-md mt-16 mb-40 rounded-md py-2 font-semibold'>Manage Inventories</button>
            </Link>
        </div>
    );
};

export default Inventory;