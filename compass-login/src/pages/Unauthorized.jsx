import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Unauthorized() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 4000);
  }, []);

  return (<div>
    <h2>401 Not Autorized</h2>
    </div>);
}

export default Unauthorized;
