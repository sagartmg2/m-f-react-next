import axios from "axios"
import { useEffect, useState } from "react"

function Comments({ comments }) {
    return <>
        <hr />
        <ul>
            {
                comments?.map(comment => {
                    return <li key={comment.id}>{comment.title}</li>
                })
            }
        </ul>

    </>
}
export default Comments


export async function getStaticProps() {
    // export async function getServerSideProps(){

    console.log("fetch api static  posts ");

    let res = await axios.get("http://localhost:8000/comments")

    return {
        props: {
            comments: res.data
        },
        revalidate: 10
    }
} 
