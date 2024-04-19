import React, { useState } from 'react'

function TableScore() {
    const [name, setName] = useState('')
    const [ball, setBall] = useState('')
    const [scores, setScores] = useState([])
    const addUser = () => {
        const newUser = { name, ball: parseInt(ball) }
        setScores([...scores, newUser])
        alert('new user added')
    }
    return (
        <div className='m-7 flex flex-col gap-y-5'>
            <div className='flex items-center gap-x-5'>
                <input onChange={e => setName(e.target.value)} className='p-1 rounded border outline-none w-52 px-3' type="text" placeholder='Enter user name' />
                <input onChange={e => setBall(e.target.value)} className='p-1 rounded border outline-none w-52 px-3' type="text" placeholder='Enter user ball' />
                <button onClick={addUser} className='p-1 rounded px-5 bg-blue-600 hover:bg-blue-500 ease-linear duration-150  text-white'>add</button>
            </div>
            <div>
                <table className="w-5/12 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-3 py-3">
                                User name
                            </th>
                            <th scope="col" className="py-3">
                                Ball
                            </th>
                            <th scope="col" className="py-3">
                                Status
                            </th>

                        </tr>
                    </thead>
                    <tbody>


                        {scores?.slice()
                            .sort((a, b) => b.ball - a.ball)
                            .map(item => (
                                <tr className={`${item.ball > 50 ? "bg-green-500" : "bg-red-500"} text-white`} key={item.id}>
                                    <th >
                                        {item.name}
                                    </th>
                                    <th>
                                        {item.ball}
                                    </th>
                                    <th>
                                        {item.ball > 50 ? "Passed" : "fell down"}
                                    </th>

                                </tr>
                            ))}


                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default TableScore