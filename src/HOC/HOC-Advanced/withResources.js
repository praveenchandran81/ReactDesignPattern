import { useState, useEffect } from "react";
import axios from "axios";

export const withResources = (Component,getUrl,resourceName) => {
  return (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
      //effect
      (async () => {
        const response = await axios.get(getUrl);
        console.log("response", response.data);
        setData(response.data);
      })();
      return () => {
        //cleanup
        setData(null);
      };
    }, []);

    const compProps={
        [resourceName]:data

    }

    return( 
         <Component {...props} {...compProps}/>
    )


  };
};
