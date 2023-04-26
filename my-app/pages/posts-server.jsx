import axios from "axios"
import { useEffect, useState } from "react"

function Posts({posts}) {  // { posts:[] ,users:[]}
    console.log("re-render");

    return <>
        <hr />
        <ul>
            {

                posts.map(post => {
                    return <li key={post.id}>{post.title}</li>
                })
            }
        </ul>

    </>
}
export default Posts

export async function getServerSideProps() {

    console.log("fetch api ");
    let data = await axios.get("https://dummyjson.com/posts")

    return {
        props: {
            posts: data.data.posts
        }
    }
}