import ErrorPage from "../components/Errorpage/ErrorPage"
import erro404 from "../assets/erro404.png"
function Unauthorized() {
    return (
        <ErrorPage src={erro404} text={"Error 404: This page doesn't exist..."} />
    );
}

export default Unauthorized;

