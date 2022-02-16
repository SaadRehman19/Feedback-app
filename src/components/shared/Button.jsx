import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, type, version, isDisabled }) => {
    return ( <
        div >
        <
        button type = { type }
        className = { `btn btn-${version}` }
        disabled = { isDisabled } > { /* {children} */ }
        Send < /button> <
        /div>
        // <div className="btn">
    )
}

//default prop
Button.defaultProps = {
    type: 'button',
    version: 'primary',
    // isDisabled:'false',
}

//propstypes 
Button.propTypes = {
    type: PropTypes.string,
    version: PropTypes.string,
    // isDisabled:PropTypes.bool
}



export default Button