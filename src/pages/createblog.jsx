import PocketBase from 'pocketbase'
import { Form, redirect, useActionData } from "react-router-dom";

const CreateBlog = () => {

    const data = useActionData()

    return ( 
        <div className=" mt-10 flex items-center justify-center">

           <Form className=" w-96 h-96 border border-gray-300 bg-white flex flex-col items-center rounded-xl"
           method="post" action="/create">

                <h1>Hi!, Please enter blog data. All fields must be filled</h1>

                <input className="py-1 px-6 border border-gray-200 mt-4 rounded-lg" 
                type="text" name="title" placeholder="Enter Blog Title" required />

                <textarea className="py-1 px-6 border border-gray-200 mt-4 rounded-lg" 
                type="text" name="body" placeholder="Enter Blog Body" required />

                <input className="py-1 px-6 border border-gray-200 mt-4 rounded-lg" 
                type="text" name="author" placeholder="Enter Author Name" required />

                <input className="py-1 px-6 border border-gray-200 mt-4 rounded-lg" 
                type="text" name="url" placeholder="Enter Image Url" required />

                <button className="mt-10 px-5 py-1 rounded-xl font-bold bg-blue-800">Submit Data ⚡</button>
                { data && data.error && <p>{ data.error }</p>}

           </Form>
        </div>
     );
}
 
export default CreateBlog;

export const submitBlogDataAction = async ({ request }) => {
    const data = await request.formData()

    const blogData = {
        title: data.get('title'),
        body: data.get('body'),
        author: data.get('author'),
        url: data.get('url')
    }

    const pb = new PocketBase('http://127.0.0.1:8090')

    const response = await pb.collection('blog')
    .create(blogData)
    .then((res) => {
    })
    .catch((e) => {
        console.error(e)
    })
    
    return redirect("/blogs")

}