import React from "react"
import { useState } from "react/cjs/react.development"

export const UnControlledOnBoardingFlow=({children,onFinish})=>{

    const [onBoardingData,setOnBoardingData]=useState();
    const [currentIndex,setCurrentIndex]=useState(0);

    const goToNext=(stepData)=>{

        const nextIndex=currentIndex + 1;

        const updateData={

            ...onBoardingData,
            ...stepData
        }
        
        if(nextIndex<children.length){
            setCurrentIndex((prevIndex)=>prevIndex+1)
        }
        else{
            onFinish({fulldata:updateData,completed:true});
        }

        setOnBoardingData(updateData);

        
    }
    

    const currentChild=React.Children.toArray(children)[currentIndex];

    if(React.isValidElement(currentChild)){

        return React.cloneElement(currentChild,{goToNext})
        
    }

    return currentChild;

    
}