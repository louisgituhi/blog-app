import { Outlet } from "react-router-dom";

const BlogsLayout = () => {
    return ( 
        <div className="font-bold text-left mt-20">
            
            <Outlet />
        </div>
     );
}
 
export default BlogsLayout;