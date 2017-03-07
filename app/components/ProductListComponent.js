import React from 'react'
import {Link} from 'react-router'
import {Grid, Row, Col} from 'react-bootstrap'

const divStyle = {
	height: 400,
	width: 400
}

const barStyle = {
  color: '#606060',
  fontSize: 30,
  textAlign: 'center',
}


export default function ProductListComponent (props) {
    return (
        <div>
        <h1 style={barStyle} > Shop The Collection </h1>
        <Grid>
        <Row className = "show-grid"  >
        {props.products && props.products.map(painting => {
            return (
                <Col xs={6} md={4} key={painting.id}  >
                <Link to={`/products/${painting.id}`}>
                <img src={painting.url} style={divStyle}  />
                </Link>
                </Col>
                )
        })}
        </Row>
        </Grid>

        </div>
        )
}
