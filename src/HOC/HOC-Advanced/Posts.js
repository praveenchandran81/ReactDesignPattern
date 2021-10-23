 ;

export const Posts=(props)=>{

    
    return(

        <>
            {props.posts.map(post=>{
                return(
                    <>
                    <h1>{post.id}</h1>
                    <p>{post.title}</p>
                    </>
                )
            })}
        </>
        

    )
}