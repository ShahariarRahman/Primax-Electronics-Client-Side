import React, { useEffect, useState } from 'react';
import banner from '../../../images/banner.jpg';
import InventoryItem from '../InventoryItem/InventoryItem';
import { Link } from 'react-router-dom';
import useInventory from '../../../hooks/useInventory';
import Chart from '../Chart/Chart';
import ReviewForm from '../ReviewForm/ReviewForm';
import Title from '../Title/Title';

const Home = () => {
    const [inventory] = useInventory();
    const [fixedInventory, setFixedInventory] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        if (inventory.length > 6) {
            setFixedInventory(inventory.slice(0, 6));
        }
        else {
            setFixedInventory(inventory);
        }
    }, [inventory]);

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='w-full bg-black'>
                <img className='w-full' src={banner} alt="" />
                <Title></Title>
            </div>

            <div className='flex flex-col justify-center items-center bg-black pt-2 w-full'>
                <h2 className='m-10 text-3xl font-bold text-rose-200  w-full text-center'>INVENTORY ({fixedInventory.length})</h2>
                <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-16 mt-6 w-full px-5 sm:px-20'>
                    {
                        fixedInventory.map(item => <InventoryItem
                            key={item._id}
                            item={item}
                        >
                        </InventoryItem>)
                    }
                </div>
                <div>
                    <Link to='/manageinventory'>
                        <button className='sm:w-64 bg-rose-600 hover:bg-rose-700 text-white sm:text-xl my-32 rounded-md p-3 font-semibold mx-2 '>Manage Inventories</button>
                    </Link>
                </div>
            </div>

            <div className='w-full mb-16'>
                <Chart inventory={inventory}></Chart>
            </div>

            <div className='pb-32 w-full'>
                <ReviewForm></ReviewForm>
            </div>
        </div >
    );
};

export default Home;