import React from 'react';
import { CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Legend, ReferenceLine, Brush, Bar, LineChart, Line, ResponsiveContainer } from 'recharts';

const Chart = ({ inventory }) => {
    return (
        <div className='w-full'>
            <h2 className='mb-10 text-3xl font-semibold text-center'>INVENTORY ANALYSIS</h2>
            <div className='grid lg:grid-cols-2 w-full h-full gap-16 bg-white py-12 rounded-md'>
                <div className='w-full'>
                    <h2 className='mb-10 text-2xl font-semibold text-center'>Date vs Qunatity</h2>
                    <ResponsiveContainer width="95%" height={400}>
                        <BarChart width={700} height={400} data={inventory} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <ReferenceLine y={0} stroke="#000" />
                            <Brush dataKey="date" height={30} stroke="#0284c7" />
                            <Bar dataKey="quantity" fill="#0284c7" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className='w-full'>
                    <h2 className='mb-10 text-2xl font-semibold text-center'>Suplier vs Qunatity</h2>
                    <ResponsiveContainer width="95%" height={400}>
                        <LineChart width={700} height={400} data={inventory} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="supplier" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Brush dataKey="supplier" height={30} stroke="#0284c7" />
                            <Line type="monotone" dataKey="quantity" stroke="#0284c7" activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Chart;