import axios from "axios";
import React, { useState, useEffect } from "react";

export const UserContainerComponent = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log('calling useEffect...');
    (async ()=>{
        const response=await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log('response',response);
        setUser(response.data);
    })();

    return ()=>{

        console.log('cleaning.. ')
    }
   
  }, []);

  return(

    <>
        {

            React.Children.map(children,child=>{
                
                if(React.isValidElement(child)){
                    return React.cloneElement(child,{user})
                }
                return child;
            })

        }
    </>

  )
};
