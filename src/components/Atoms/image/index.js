import React from 'react'

const Button = (props) => {
    const { className, src, value, id, onClick } = props;
    return (
        <React.Fragment>
            <img src={src} className={className} onClick={onClick} />
        </React.Fragment>
    )
}

export default Button;