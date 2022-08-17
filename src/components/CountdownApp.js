import React from 'react'
import Countdown from 'react-countdown'

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
          // Render a completed state
        return <Completionist />;
        } else {
            // Render a countdown
            return <span>{days} : {hours}:{minutes}:{seconds}</span>;
        }
    };


function CountdownApp() {
    return (
        <div>
            <Countdown 
            date={Date.now() + 100000000}
            renderer={renderer}

            />
        </div>
    )
}

export default CountdownApp