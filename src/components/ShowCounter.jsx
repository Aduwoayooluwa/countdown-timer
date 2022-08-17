import React from 'react'
import DateTimeDisplay from './DateTimeDisplay'

function ShowCounter({days, hours, minutes, seconds}) {
    return (
        <div className=''>
            <div className='flex flex-row place-content-center justify-around'>
                <DateTimeDisplay value={days} type={'Days'} isDanger={days <=3} />
                <p>:</p>
                <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
                <p>:</p>
                <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
                <p>:</p>
                <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
            

        </div>
        </div>
    )
}

export default ShowCounter