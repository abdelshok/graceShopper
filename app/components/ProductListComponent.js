import React from 'react'


export default function ProductListComponent (props) {

    return (
        <div>
        <h1> Paintings </h1>

        <ul> 
        {props.products && props.products.map(painting => {
        	return (
        	<li key={painting.title}>
        	<div> {painting.id} </div> 
        	<img src={painting.url}   />
        	<div> {painting.title}</div>
        	<div> {painting.year} </div>
        	<div> ${painting.price} </div>
        	</li>

        	)
       	})}
       	</ul>

        </div>
    )


}



