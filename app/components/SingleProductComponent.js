import React from 'react'


const divStyle = {
    height: 200,
    width: 200
}

export default function SingleProductComponent (props) {


  console.log("INSIDE SINGLEPRODUCT", props)
  const product = props.product.product
  const artist = props.product.artist

   return (
       <div>
       <h1> {product.title} </h1>
       <ul>
           <img src={product.url} style={divStyle}  />
           <div> Artist: {artist.name} </div>
           <div> Year: {product.year} </div>
           <div> Price: ${product.price} </div>
           <span> Description: {product.description} </span>
        </ul>
       </div>
   )

}


