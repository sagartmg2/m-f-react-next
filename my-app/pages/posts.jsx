import axios from "axios"
import { useEffect, useState } from "react"

function Posts() {
    console.log("re-render");

    const [posts, setPost] = useState([])
    const [count, setcount] = useState(0);
    const [isLoadig, setLoading] = useState(true)

    useEffect(() => {
        console.log("use-effect -- mount");
        axios.get("https://dummyjson.com/posts")
            .then((res) => {
                console.log(res.data.posts)
                setPost(res.data.posts)
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        console.log("did update")
        console.log("there is a change in count")
    }, [count])





    return <>
        posts count:{count}
        <hr />
        <button onClick={() => { setcount(count + 1) }} >increment</button>
        <ul>
            {
                isLoadig
                ?
                <><p>is Loading .. please wait</p></>
                :
                posts.map(post => {
                    return <li key={post.id}>{post.title}</li>
                })
            }
        </ul>

    </>
}
export default Posts