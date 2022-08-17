import React from 'react'
import {useCountDown} from './useCountDown'
import ShowCounter from './ShowCounter'

function CountdownTimer({ targetDate }) {
    const [days, hours, minutes, seconds] = useCountDown(targetDate)

    if (days + hours + minutes + seconds <= 0 ) {
        return <>
            <p>Expired</p>
        </>
    } else {
        return (
            <ShowCounter days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
                />
        )
    }
}

export default CountdownTimer