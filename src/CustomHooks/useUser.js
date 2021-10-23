import { useState,useEffect } from "react";
import axios from 'axios';

export const useUser= id =>{

    const [user,setUser]=useState(null);
    console.log('url',`https://jsonplaceholder.typicode.com/users/${id}`);
    useEffect(() => {
        
        (async ()=>{
            const response=await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            console.log('response.data',response.data);
            setUser(response.data);
        })();
        return () => {
           
        }
    }, [id])

    console.log('user final',user);
    return user;

}
