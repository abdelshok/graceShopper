import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import browserHistory from 'react-router'


const divStyle = {
    height: 450,
    width: 450
}


const style = {margin: 5}


export default function SingleProductComponent (props) {
  const product = props.product.product
  const handleClick = props.handleClick
  const handleOpen = props.handleOpen
  const handleCloseCheckout = props.handleCloseCheckout


    const actions = [
        <FlatButton
          key="1"
          label="Continue Shopping"
          default={true}
          onTouchTap={() => {props.handleCloseShop()}}
        />,
        <FlatButton
          key="2"
          label="Checkout"
          default={true}
          keyboardFocused={true}
          onTouchTap={() => {
            handleCloseCheckout()
          }}
        />,
      ]

   return (
      <div>
      <div className="single-product">
          <h1 className="product-title"> {product.title} </h1>
          <img src={product.url} style={divStyle}  />
          <div className="product-info">
           <div> {product.artistName} </div>
           <div> {product.year} </div>
           <div> ${product.price} </div>
           <span> {product.description} </span>
           </div>
          <span> 
          <RaisedButton
          id="Button"
          label={product.quantity > 0 ? 'Add To Cart' : 'Sold out!'}
          style={style}
          disabled={(product.quantity < 1)}
          onClick={() => {
            handleClick(product.id)
            handleOpen()
          }
          } />
          </span>
        <Dialog
            actions={actions}
            modal={false}
            open={props.open}
            onRequestClose={props.action}> Added to Cart! </Dialog>
       </div>
       </div>
   )
}
