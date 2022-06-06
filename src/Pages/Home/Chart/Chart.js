import React from 'react';
import { CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Brush, Bar, LineChart, Line, ResponsiveContainer } from 'recharts';

const Chart = ({ inventory }) => {
    return (
        <div className='flex flex-col justify-center items-center pt-2 w-full'>
            <h2 className='m-10 text-3xl font-bold text-red-100 '>INVENTORY ANALYSIS</h2>
            <div className='grid lg:grid-cols-2 w-full h-full py-12 gap-5 rounded-2xl'>
                <div className='border-2 border-sky-900 pr-4 pb-16 pt-10 mx-7 lg:ml-10 rounded-md'>
                    <h2 className='mb-10 text-2xl font-semibold text-center text-rose-700'>Date &amp; Quantity</h2>
                    <ResponsiveContainer width="95%" height={350}>
                        <BarChart width={500} height={400} data={inventory} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="1 2" stroke="#38bdf8" />
                            <XAxis dataKey="date" stroke="#e11d48" />
                            <YAxis stroke="#e11d48" />
                            <Tooltip cursor={{ fill: '#111827' }} />
                            <Brush dataKey="date" height={30} stroke="#e11d48" />
                            <Bar dataKey="quantity" fill="#e11d48" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className='border-2 border-sky-900 pr-4 pb-16 pt-10 lg:mr-10 mx-7 rounded-md'>
                    <h2 className='mb-10 text-2xl font-semibold text-center text-rose-700'>Suplier &amp; Quantity</h2>
                    <ResponsiveContainer width="95%" height={350}>
                        <LineChart width={500} height={400} data={inventory} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="1 2" stroke="#38bdf8" />
                            <XAxis dataKey="supplier" stroke="#e11d48" />
                            <YAxis stroke="#e11d48" />
                            <Tooltip cursor={{ stroke: '#e11d48' }} />
                            <Brush dataKey="supplier" height={30} stroke="#e11d48" />
                            <Line type="monotone" dataKey="quantity" stroke="#e11d48" activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Chart;