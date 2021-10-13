import { PostInfo } from "./PostInfo"


export const Posts=({posts})=>{


    return(
        posts?
        posts.map(post=>{
            return <PostInfo key={post.id} post={post}></PostInfo>
        }):<p>Loading posts..</p>
        
    )
     
 }