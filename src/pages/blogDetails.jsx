import {useLoaderData, useParams } from "react-router-dom";

const BlogDetails = () => {

    const { id } = useParams();
    const blog = useLoaderData();

    return ( 
        <div>
            <h1>{ blog.title }</h1>
            <h2>{ blog.body }</h2>
            <h3>{ blog.author }</h3>
            <p>{ id }</p>
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