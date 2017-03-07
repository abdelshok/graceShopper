import React from 'react'
import {Link} from 'react-router'
import {Grid, Row, Col} from 'react-bootstrap'
import JumbotronContainer from './JumbotronContainer'


const divStyle = {
	height: 500,
	width: 500
}

export default function ProductListComponent (props) {
    return (
        <div>
        <h1 className="shop-header"> Shop The Collection </h1>
        <Grid>
        <Row className = "show-grid">
        {props.products && props.products.map(painting => {
            return (
                <Col xs={6} md={4} key={painting.id}>
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
