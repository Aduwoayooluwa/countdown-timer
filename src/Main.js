import React from 'react'
import CountdownTimer from './components/CountdownTimer';
import 'bulma/css/bulma.min.css';
import BackgroundAnimation from './BackgroundAnimation';
import Hero from './container.js/Hero';
import Navbar from './container.js/Navbar';

const Main = () => {
    const THREE_DAYS_IN_MS = 30 * 24 * 60 * 60 * 1000

    const NOW_IN_MS = new Date().getTime();

    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

    return (
        <div className='bg-red-50  w-full h-screen absolute'>
            {/* <h1>Countdown Timer</h1> */}
            {/* <CountdownTimer targetDate={dateTimeAfterThreeDays} /> */}
            {/* <BackgroundAnimation /> */}
            <Navbar />
            <div className='flex flex-col place-items-center'>
            <Hero />
            </div>
            
        </div>
    )
}

export default Main