
export const LargeListItemProduct=({product})=>{
    const {name,price,rating,description}=product;
    return(
        <div>
            <h1>{name}</h1>
            <p>{price}</p>
            <p>Rating {rating}</p>
            <h3>Description</h3>
            <p>{description}</p>
        </div>
        
    )
}