import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useInventory = () => {
    const [inventory, setInventory] = useState([]);


    useEffect(() => {
        fetch('https://primax-electronics-api.onrender.com/inventory')
            .then(res => res.json())
            .then(data => setInventory(data));
    }, []);

    const deleteInventory = (_id) => {
        const processed = window.confirm(`Are You Really Want To Delete ?`)
        if (!processed) {
            return;
        }
        const url = `https://primax-electronics-api.onrender.com/inventory/${_id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log(data);
                    const newInventory = inventory.filter(item => item._id !== _id)
                    setInventory(newInventory);
                    toast('Item Successfully Deleted !')
                }
            })
            .catch(error => console.log(error))
    };


    return [inventory, deleteInventory];
}
export default useInventory;