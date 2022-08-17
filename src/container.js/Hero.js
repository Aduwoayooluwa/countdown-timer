import React from 'react'
import BackgroundAnimation from '../BackgroundAnimation';
import CountdownApp from '../components/CountdownApp';
import CountdownTimer from '../components/CountdownTimer'
import Construction from './Construction';

const Hero = () => {
    const THREE_DAYS_IN_MS = 30 * 24 * 60 * 60 * 1000

    const NOW_IN_MS = new Date().getTime();

    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
    return (
        <div className='flex flex-row p-2 absolute top-40 shadow-lg'>
        <div className='w-full lg:w-1/2 md:w-1/2 sm:w-full bg-red-100 flex flex-col place-content-center'>
            <p className='text-2xl font-bold text-center font-inter p-3  mb-4'>
                WE ARE COMING SOON!
                </p>
            <CountdownTimer targetDate={dateTimeAfterThreeDays} />
            <form className='w-3/4 p-2 m-3'>
                <input className='input is-danger mb-3' placeholder='Email Address' type='email' />
                <button className='button is-danger' type='button'>Get Notified</button>
            </form>
        </div>
        
        <div className='w-1/2 hidden lg:flex md:flex sm:hidden xs:hidden bg-slate-200 p-2'>
            <Construction />
        </div>

        </div>
    )
}

export default Hero;