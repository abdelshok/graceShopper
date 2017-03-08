import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import OrderComponent from './OrderComponent'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'


class AccountComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      orderNumber: -1,
    }
    this.handleClick = this.handleClick.bind(this)
  }

//Selects which order details to display
  handleClick = function(row) {
    //Only will change the state if the click is inside a valid row
    if (row.length) {
      this.setState({orderNumber: row})
    }
}

  render() {
    const orders = this.props.productLines
   //Gives each order a totalCost key and value from the ProductLines table
     orders.forEach(order => {
      let totalCost = 0
      order.productLines.forEach(productLine => {
          totalCost += productLine.totalCost
      })
      order.totalCost = totalCost
    })

   return (
    <div>
    <Paper zDepth={4}>
       <h1 className="account-header">Order History</h1>
       <Table displayRowCheckbox={false} onRowSelection={this.handleClick}>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Date</TableHeaderColumn>
          <TableHeaderColumn>Status</TableHeaderColumn>
          <TableHeaderColumn>Cost</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
      {orders && orders.map(order => {
        if (order.status === 'order'){
            return (<TableRow key={order.id} >
                <TableRowColumn>{order.id}</TableRowColumn>
                <TableRowColumn>{order.updated_at.slice(0, 10)}</TableRowColumn>
                <TableRowColumn>{order.status === 'cart' ? 'Open' : 'Completed' }</TableRowColumn>
                <TableRowColumn>${order.totalCost}</TableRowColumn>
            </TableRow>
          )}}
        )}
      </TableBody>
    </Table>
  </Paper>
  <Paper>
    {(this.state.orderNumber >= 0  ) && <OrderComponent orders={orders} orderNumber={this.state.orderNumber} totalCost={orders[this.state.orderNumber].totalCost} />}
  </Paper>

  </div>
  )
  }
}

export default AccountComponent

