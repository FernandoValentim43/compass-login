import React, { useEffect, useState } from "react";
import { TextClock, TextDate, GeneralDiv } from "./clock.styled";

function formatedTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${hours}:${minutes}`;
}

function formatedDate(){
    let options={}
    options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
    return new Date().toLocaleDateString('pt-br', options)
}

const Clock = () => {
    const [time, setTime] = useState();
    const day = formatedDate()
    useEffect(() => { const clear = setInterval(() => {setTime(formatedTime());}, 1000); return () => clearInterval(clear);}, []);

    return (
        <GeneralDiv>
            <TextClock>{time}</TextClock>
            <TextDate>{day}</TextDate>
        </GeneralDiv>
    );
}

export default Clock;