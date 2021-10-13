
export const LargeListItemPerson=({people})=>{
    const {name,age,place,hobbies}=people;
    return(
        <div>
            <h1>{name}</h1>
            <p>Age {age} years</p>
            <p>Place : {place}</p>
            <h3>Hobbies</h3>
            <ul>
                {hobbies.map((hobby,index)=>{
                    return <li key={index}>{hobby}</li>
                })}
            </ul>
        </div>
        
    )
}