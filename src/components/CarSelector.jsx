import React, { useState } from 'react';

const CarSelector = () => {
    const [name, setName] = useState('')
    const [car, setCar] = useState('')
    const [color, setColor] = useState('')
    const [result, setREsult] = useState('')
    const cars = [
        {
            title: "Kia K5",
            id: 1,
            color: "blue",
        },
        {
            title: "Gentra",
            id: 2,
            color: "white",

        },
        {
            title: "Malibu",
            id: 3,
            color: "black"

        },
        {
            title: "Tracker",
            id: 4,
            color: "gray"

        },
        {
            title: "Equinox",
            id: 5,
            color: "yellow",

        },

    ]
    const addSubmit = (event) => {
        event.preventDefault()
        setREsult(`Salom ${name} siz ${car}ning ${color} rangidan tanladingiz`)
        event.target.reset()
    }
    console.log(result)
    return (
        <div className='flex flex-col w-full'>

            <form onSubmit={addSubmit} className='flex items-center m-7 gap-x-5'>
                <input onChange={e => setName(e.target.value)} className='w- border-2 p-1 outline-none px-3 rounded' type="text" placeholder='Enter your name' />
                <select onChange={e => setCar(e.target.value)} className='w-56 p-1 border rounded px-3' name="" id="">
                    <option value="">Moshinani tanlang</option>
                    {cars.map(item => (
                        <option key={item.id} value={item.title}>
                            {item.title}
                        </option>
                    ))}
                </select>
                <select onChange={e => setColor(e.target.value)} className='w-56 p-1 border rounded px-3' name="" id="">
                    <option value="">Rangini tanlang</option>
                    {cars.map((item, index) => (
                        <option key={index} >
                            {item.color}
                        </option>
                    ))}
                </select>
                <button  className='bg-blue-600 hover:bg-blue-500 ease-linear duration-150 px-5 text-white rounded p-1'>add</button>
            </form>
            <div className='ml-7'>
               <h2 className='font-semibold'>
                 {result}
                </h2>
            </div>
        </div>
    );
};

export default CarSelector;
