import React from 'react'

const divStyle = {
    height: 200,
    width: 200
}

export default function SingleProductComponent (props) {
  const product = props.product.product
  const artist = props.product.artist
  const handleClick = props.handleClick

   return (
      <div>
          <h1> {product.title} </h1>
          <img src={product.url} style={divStyle}  />
           <div> Artist: {product.artistName} </div>
           <div> Year: {product.year} </div>
           <div> Price: ${product.price} </div>
           <span> Description: {product.description} </span>
           <button type="submit" onClick={() => handleClick(product.id)}> Add to Cart </button>
       </div>
   )
}