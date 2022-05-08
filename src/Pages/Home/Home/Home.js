import React, { useEffect, useState } from 'react';
import bannar from '../../../images/banner2.jpg';
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
        // window.scrollTo(0, 0)
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
            <div>
                <img src={bannar} alt="" />
            </div>
            <Title></Title>
            <h2 className='mt-20 text-3xl font-semibold'>INVENTORY ({fixedInventory.length})</h2>
            <div className='grid sm:grid-cols-3 gap-7 mt-6 w-full px-3'>
                {
                    fixedInventory.map(item => <InventoryItem
                        key={item._id}
                        item={item}
                    >
                    </InventoryItem>)
                }
            </div>
            <Link to='/manageinventory'>
                <button className='sm:w-64 sm:h-12 bg-sky-600 hover:bg-sky-700 text-white text-md my-32 rounded-md p-2 font-semibold'>Manage Inventories</button>
            </Link>
            <div className='mb-16 w-full'>
                <Chart inventory={inventory}></Chart>
            </div>
            <div className='mb-32 w-full'>
                <ReviewForm></ReviewForm>
            </div>
        </div >
    );
};

export default Home;