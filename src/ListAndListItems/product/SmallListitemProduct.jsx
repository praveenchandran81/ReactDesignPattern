
export const SmallListItemProduct=({product})=>{
    const {name,price}=product;
    return(
        <p>Name : {name} , Price {price}</p>
    )
}