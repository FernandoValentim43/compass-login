import React, { useState, useEffect } from "react";

let [seconds, setTotalSeconds] = useState("600");

const testando = () => {
  useEffect(() => {
    if (seconds === 0) {
      navigate("/");
    } else {
      setTimeout(() => {
        setTotalSeconds(seconds - 1);
      }, 1000);
    }
  }, [seconds]);
  return seconds;
};


export default testando;
