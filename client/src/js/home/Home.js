import React from 'react'
import News from './News'
import FaireTable from '../faire/FaireTable'
import Notes from './Notes'
import Next from './Next'

const Home = () => (  
    <div>
        <p className='ans-title ans-first'>
            Welcome to the Middle Kingdom Arts &amp; Sciences Faire
        </p>
        <News />
        <div className='ans-two-column'>
            <Notes />
            <Next />
        </div>
        <FaireTable />
    </div>
)

export default Home