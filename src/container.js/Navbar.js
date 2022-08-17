import React from 'react'

const Navbar = () => {
    return (
        <nav className='h-20 bg-white shadow-sm flex justify-evenly flex-row place-items-center'>
            <div className='w-3/5 font-inter font-bold'>
                <div className='flex'>
                    <img src='tedx.png' alt='' width='100px'/>
                    <span className='ml-2 text-3xl'>FUTA</span>
                </div>
                
                {/* <div className='text-xs font-medium'>
                    <span>x</span>
                    " = independently organized TED event"
                </div> */}
            </div> 
        </nav>
    )
}

export default Navbar