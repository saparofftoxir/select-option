import React, { useState } from 'react'

function CheckerColor() {
    const carsColor = ['black', 'white', 'blue', 'yellow', 'green', 'red']
    const checkerColor = ['black', 'white', 'blue', 'yellow', 'gray'];
    const [selectedColor, setselectedColor] = useState('')
    const [resultMessage, setresultMessage] = useState('')

    const handleColor = event => {
        setselectedColor(event.target.value)
    }
    const checked = () => {
        if (checkerColor.includes(selectedColor)) {
            setresultMessage(`${selectedColor} Bu rang bor`)
        } else {
            setresultMessage(`${selectedColor} Bu rang yo'q`)
        }
    }
    console.log(resultMessage)
    return (
        <div className='m-7 flex flex-col gap-y-5'>
            <div className='flex items-center gap-x-5'>

                <select onChange={handleColor} className='w-52 p-1 border-2 rounded' name="" id="">
                    <option value="">Tekshirish</option>
                    {carsColor.map((color, index) => (
                        <option key={index}>
                            {color}
                        </option>
                    ))}
                </select>
                <button onClick={checked} className='px-5 p-1 rounded text-white bg-blue-600 hover:bg-blue-500 ease-linear duration-150'>check</button>
            </div>
            <div>
                <h3>{resultMessage && <p>{resultMessage}</p>}</h3>
            </div>

        </div>
    )
}

export default CheckerColor