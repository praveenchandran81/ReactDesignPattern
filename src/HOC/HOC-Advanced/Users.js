 

export const Users =(props)=>{
    return(props.users?
        <>
            {props.users.map(user=>{
                return(
                <>
                <h1>{user.name}</h1>
                <p>{user.username}</p>
                <p>{user.email}</p>
                </>)
            })}
        </>:<p>Loading users..</p>
         
    )

}