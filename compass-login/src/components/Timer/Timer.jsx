import React, { useState } from 'react'
import { useEffect } from 'react';
import { TimerSeconds } from './Timer.styled';

export function Timer () {
    const [seconds, setTotalSeconds] = useState('600')

    useEffect(() => {
        if(seconds === 0) {
            return
        } else {
            setTimeout(() => {
                setTotalSeconds(seconds -1)
            }, 1000)
        }
    }, [seconds])
    

    return (
        <TimerSeconds>
            {seconds}
        </TimerSeconds>
    )
}

export default Timer;