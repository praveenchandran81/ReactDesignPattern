
import React, { useState, useEffect } from "react";

export const DataSource = ({getDataSource=()=>{},resourceName, children }) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    
    (async ()=>{
        // const response=await axios.get(resourceUrl);
        // console.log('response',response.data);
        const data = await getDataSource();
        setState(data);
    })();

    return ()=>{

        console.log('cleaning.. ');
        setState([]);
    }
   
  }, [getDataSource]);

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
