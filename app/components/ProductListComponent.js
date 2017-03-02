import React from 'react'


const divStyle = {
	height: 200,
	width: 200
}

export default function ProductListComponent (props) {

	const handleSubmit = props.handleSubmit;
	console.log(props.handleSubmit)

    return (
        <div>
        <h1> Paintings </h1>

        <ul> 
        {props.products && props.products.map(painting => {
        	return (
        	<li key={painting.title}> 
        	<div> {painting.id} </div> 
        	<img src={painting.url} style={divStyle}  />
        	<div  > {painting.title}, {painting.artistName}  </div>
        	<div> {painting.year} </div>
        	<div> ${painting.price} </div>
        	<button type="submit" onClick={handleSubmit}> Add to Cart </button>
        	</li>
        	)
       	})}
       	</ul>

        </div>
    )



}



