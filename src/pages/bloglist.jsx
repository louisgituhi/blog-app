import { useLoaderData,Link, Outlet } from "react-router-dom";
import { getBlogs } from "../scripts/server";


export async function loader() {
    const blogs = await getBlogs()
    return { blogs }
}

const BlogList = () => {

    const { blogs } = useLoaderData();

    return ( 
        <div>
            <h1 className=" text-4xl">HOOT NEWS</h1>
            <p className=" text-sm mt-2">The home for all technology, programming and gaming blogs.</p>
            <div className=" flex flex-col items-center justify-center sm:grid sm:grid-cols-3 gap-6 mt-20 text-black">
                { blogs.map((blog) => (
                    <Link to={blog.id} key={blog.id}>
                        <div className=" h-52 w-60 rounded-xl text-left">
                            <div className="">
                                <img className=" object-cover object-center w-full h-40 max-w-full" src={ blog.image_url} />
                                <h1 className=" text-blue-400">{ blog.title }</h1>
                                <p className=" text-sm">{ blog.body.length > 30 ? `${blog.body.substring(0, 30)}...`: blog.body }</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
     );
}
 
export default BlogList;