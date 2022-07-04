import ErrorPage from '../components/Errorpage/ErrorPage'

import erro401 from "../assets/erro401.png"

function Unauthorized() {

    return (

        <ErrorPage src={erro401} text={"Error 401: Not Authorized You can't acess this page..."} />

    );

}



export default Unauthorized;