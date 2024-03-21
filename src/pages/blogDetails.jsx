import PocketBase from "pocketbase"
import {useLoaderData, useParams, Form, Link, redirect } from "react-router-dom";

const BlogDetails = () => {

    const { id } = useParams();
    const blog = useLoaderData();

    return ( 
        <div className=" ">
            <h1 className=" font-bold text-2xl">{ blog.title }</h1>
            <img src={blog.image_url} />
            <h2>{ blog.author }</h2>
            <p>{ blog.body }</p>
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