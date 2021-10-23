import { useCurrentUser } from "./useCurrentUser"
import {useUser} from './useUser';
export const AppCustomHooks =()=>{

    //const currentUser=useCurrentUser();
   const currentUser=useUser(2)
    console.log(currentUser);
    return(
        <>
        <h1>{currentUser.name}</h1>
        <p>{currentUser.username}</p>
        <p>{currentUser.email}</p>
        </>
    )

}