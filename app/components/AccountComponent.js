import React from 'react'
import TextField from 'material-ui/TextField'
import {blueGrey300, gray500} from 'material-ui/styles/colors'
import RaisedButton from 'material-ui/RaisedButton'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import {List, ListItem} from 'material-ui/List'
import MobileTearSheet from './MoblieTearSheet'
import OrderComponent from './OrderComponent'


const style = {
  height: 100,
  width: 500,
  margin: 12,
  textAlign: 'center',
  display: 'inline-block',
};

const buttonStyle = {
  margin: 12
}
const containerStyle = {
  width: 300
}

const styles = {
  errorStyle: {
    color: gray500,
  },
  underlineStyle: {
    borderColor: blueGrey300,
  },
  floatingLabelStyle: {
    color: blueGrey300,
    margin: 5
  },
  floatingLabelFocusStyle: {
    color: blueGrey300,
  }
}


export default function AccountComponent (props) {

const user = props.user
const orders = props.productLines

  //console.log ("Account", orders)

//Gives each order a totalCost key and value from the ProductLines table
  orders.forEach(order =>{
    let totalCost = 0
    order.productLines.forEach(productLine => {
        totalCost += productLine.totalCost
    })
    order.totalCost = totalCost
  })

  //console.log(orders);


   return (

  <MobileTearSheet height={250}>
     <h1>Order History</h1>
      <table className="shopping-ckeckout">
        <thead>
          <tr>
          <th>Date</th>

          <th>Status</th>
          <th>Order ID</th>
          <th>Total</th>
          </tr>
        </thead>
        <tbody>
        {orders && orders.map(order => {

          return (<tr key={order.id}>
            <td>{order.updated_at.slice(0, 10)}  </td>

            <td>{order.status === 'cart' ? 'Open' : 'Completed' }</td>
             <td>{order.id}</td>
            <td>${order.totalCost}</td>
            <OrderComponent productLines={order.productLines}/>
          </tr>
        )})}
        </tbody>
      </table>
  </MobileTearSheet>
)}


