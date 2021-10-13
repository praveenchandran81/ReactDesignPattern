import axios from "axios";
import React, { useState, useEffect } from "react";

export const ResourceLoader = ({resourceUrl,resourceName, children }) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    
    (async ()=>{
        const response=await axios.get(resourceUrl);
        console.log('response',response.data);
        setState(response.data);
    })();

    return ()=>{

        console.log('cleaning.. ')
    }
   
  }, [resourceUrl]);

  return(

    <>
        {


            React.Children.map(children,child=>{
                console.log('users',state);
                if(React.isValidElement(child)){
                    
                    return React.cloneElement(child,{[resourceName]:state})
                }
                return child;
            })

        }
    </>

  )
};
