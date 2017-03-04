import React from 'react'
import {Link} from 'react-router'

const divStyle = {
	height: 200,
	width: 200
}

export default function ProductListComponent (props) {
    return (
        <div>
        <h1> The Collection </h1>
        <ul>
        {props.products && props.products.map(painting => {
            return (
                <li key={painting.id}>
                <Link to={`/products/${painting.id}`}>
                <img src={painting.url} style={divStyle}  />
                </Link>
                </li>
                )
        })}
        </ul>
        </div>
        )
}
