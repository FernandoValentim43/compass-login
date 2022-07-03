import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../Image/Image";
import Text from "../Text/text";
import Timer from "../Timer/Timer";
import  ErrorStyled  from "./ErrorPage.styled";


function Unauthorized(props) {
  const navigate = useNavigate();

  let [seconds, setTotalSeconds] = useState("5");

  const testando = () => {
    useEffect(() => {
      if (seconds === 0) {
        navigate("/");
      } else {
        setTimeout(() => {
          setTotalSeconds(seconds - 1);
        }, 500);
      }
    }, [seconds]);
    return seconds;
  };

  return (
    
      <ErrorStyled>
        <div className="errorPage">
          <Image name="error" src={props.src} />
          <Text
            name={"error"}
            text={props.text}
          />
          <Text name={"paragraphFooter"} text={"Redirecting in"} />
          <Timer tempo={testando} />
        </div>
      </ErrorStyled>
   
  );
}

export default Unauthorized;
