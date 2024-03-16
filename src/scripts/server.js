export async function getBlogs() {
    try {
        const res = await fetch("http://127.0.0.1:8090/api/collections/blog/records")

        if(!res.ok) {
            throw new Error(" Could not get blogs")
        }

        const data = await res.json()
        return data.items;

    } catch (error) {
        console.error(error)
        
    }
}


export async function createBlog() {
    
}