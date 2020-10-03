import React from 'react'
import PropTypes from 'prop-types'

function Product(props) {
    return (
        <div>
            <img src={props.product.image} alt={props.product.name}/>
            <p>Name: {props.product.name}</p>
            <p>Price: {props.product.price}</p>
        </div>
    )
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string
    })
}

export default Product

