import PocketBase from "pocketbase"
import {useLoaderData, useParams, redirect } from "react-router-dom";

const BlogDetails = () => {

    const deleteBlog = (id) => {
        const pb = new PocketBase("http://127.0.0.1:8090")

        const record = pb.collection("blog").delete(blog.id)
        .then((res) => {
            console.log(res)
            console.log("blog deleted successfully")
        })
        .catch((e) => {
            console.error("unable to delete blog" + e)
        })
    }

    const { id } = useParams();
    const blog = useLoaderData();

    return ( 
        <div className=" bg-gray-200 w-[75%] mx-auto rounded-lg border border-black">
            <h1 className=" font-bold text-2xl">{ blog.title }</h1>
            <img src={blog.image_url} />
            <h2>{ blog.author }</h2>
            <p>{ blog.body }</p>
            <div className=" flex gap-4 mb-4 mt-4">
                <button className=" px-4 py-1 bg-blue-200 text-blue-600 rounded-xl">Edit</button>
                <button className=" px-4 py-1 bg-red-200 text-red-600 rounded-xl" onClick={() => {deleteBlog(blog.id)}}>Delete</button>
            </div>
        </div>
     );
}
 
export default BlogDetails;

export const blogDetailsLoader = async ( { params }) => {
    const { id } = params;

    try {
        const res = await fetch("http://127.0.0.1:8090/api/collections/blog/records/" + id)

        if(!res.ok) {
            throw  Error(" Could not find the blog you are looking for")
        }

        const data = await res.json()
        return data;

    } catch (error) {
        console.error(error)
    }
}