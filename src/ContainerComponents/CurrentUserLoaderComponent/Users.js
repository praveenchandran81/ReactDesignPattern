import { UserInfo } from "./UserInfo"


export const Users=({users})=>{


   return(
       users?
       users.map(user=>{
           return <UserInfo key={user.id} user={user}></UserInfo>
       }):<p>Loading users..</p>
       
   )
    
}