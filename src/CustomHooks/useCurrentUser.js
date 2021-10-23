import { useState ,useEffect } from "react"
import axios from 'axios';
export const useCurrentUser=()=>{

   const [user, setUser] = useState(null);

   useEffect(() => {
       (async ()=>{
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
            setUser(response.data);
       })();
       return () => {
          // cleanup
       }
   }, [])

   return user;

}