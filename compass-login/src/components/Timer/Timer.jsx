import React, { useState } from 'react'
import { useEffect } from 'react';
import { TimerSeconds } from './Timer.styled';

export function Timer (props) {
    

    return (
        <TimerSeconds>{props.tempo()}</TimerSeconds>
    )
}

export default Timer;