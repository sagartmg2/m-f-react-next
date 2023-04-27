import axios from "axios"
import { useEffect, useState } from "react"

function Posts({ posts }) {
    return <>
        <hr />
        <ul>
            {

                posts?.map(post => {
                    return <li key={post.id}>{post.title}</li>
                })
            }
        </ul>

    </>
}
export default Posts


export async function getStaticProps(){
// export async function getServerSideProps(){

console.log("fetch api static  posts ");

    let data = await axios.get("https://dummyjson.com/posts")

    return {
        props: {
            posts: data.data.posts
        }
    }
} 
