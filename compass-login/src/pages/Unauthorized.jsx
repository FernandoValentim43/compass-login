import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../components/Image/Image";
import Text from "../components/Text/text";
import Timer from "../components/Timer/Timer";
import { ErrorStyled } from "../components/Section/ErrorPage.styled";

import erro401 from "../assets/erro401.png"

function Unauthorized() {
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
          <Image name="error" src={erro401} />
          <Text
            name={"error"}
            text={"Erro 401: Not Authorized You can't acess this page..."}
          />
          <Text name={"paragraphFooter"} text={"Redirecting in"} />
          <Timer tempo={testando} />
        </div>
      </ErrorStyled>
   
  );
}

export default Unauthorized;
