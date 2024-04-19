import React from 'react'
import CarSelector from '../components/CarSelector'
import ColorChecker from '../components/ColorChecker'
import CheckerColor from '../components/CheckerColor'
import ScoreTable from '../components/ScoreTable'
import TableScore from '../components/TableScore'

function Home() {
    return (
        <div className='w-full flex flex-col '>
            <CarSelector />
            <div>
                <CheckerColor />
            </div>
            <div>
                <TableScore/>
            </div>
        </div>
    )
}

export default Home