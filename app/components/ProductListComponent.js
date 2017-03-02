import React from 'react'


const divStyle = {
    height: 200,
    width: 200
}

export default function ProductListComponent (props) {

   return (
       <div>
       <h1> Paintings </h1>

       <ul>
       {props.products && props.products.map(painting => {
           return (
           <li key={painting.title}>
           <div> {painting.id} </div>
           <img src={painting.url} style={divStyle}  />
           <div  > {painting.title}</div>
           <div> {painting.year} </div>
           <div> ${painting.price} </div>
           </li>

           )
          })}
          </ul>

       </div>
   )


}



