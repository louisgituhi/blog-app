import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error  = useRouteError()

    return ( 
        <div className="">
             <h1>Oops!</h1>
             <p>Sorry, an unexpected error has occurred.</p>
             <p>
                {/* <i>{ error.message }</i> */}
                <Link to="/"><span className=" px-4 py-1 rounded-xl bg-blue-300 text-blue-600">Homepage</span></Link>
             </p>
        </div>
     );
}
 
export default ErrorPage;