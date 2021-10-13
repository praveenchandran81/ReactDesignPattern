export const UserInfo=({user})=>{

    const {id,name,username,email}=user || {};
    

    return(
        user?
        (    
        <>
        User Info
        <p>{id}</p>
        <p>{name}</p>
        <p>{username}</p>
        <p>{email}</p>
        
        </>)
    :<p>Loading...</p>
    )


}