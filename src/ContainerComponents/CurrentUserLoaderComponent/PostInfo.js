

    export const PostInfo=({post})=>{

        const {userId,id,title,body}=post || {};
        
    
        return(
            post?
            (    
            <>
            Post Info
            <p>{id}</p>
            <p>{userId}</p>
            <p>{title}</p>
            <p>{body}</p>
             
            </>)
        :<p>Loading...</p>
        )
    
    
    }