import React from 'react'
import PropTypes from 'prop-types'

function ContactCard(props) {
    return (
        <div>
            <div>
                <img src={props.imgUrl} alt="kitten" />
                <h3>{props.name}</h3>
                <p>Phone: {props.phone}</p>
                <p>Email: {props.email}</p>
            </div>
        </div>
    )
}

ContactCard.propTypes = {
    name: PropTypes.string,
    imgUrl: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string
}

export default ContactCard

