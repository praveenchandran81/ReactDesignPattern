
import { printProps } from "./printProps"

export const MyComponent =({user})=>{
    const {name,age}= user || {};
    return(user?
        <>
            Name : {name}
            Age : {age}
             
            
        </>:<p>Loading..</p>
         
    )
}

const MyComponentWrapped = printProps(MyComponent)

export const AppHOC =()=>{


    


    return(
       <MyComponentWrapped prop1="praveen" prop2={40} prop3="hello" user={{name:'pc',age:44}} />
    )

}