import React from 'react'

const InputBox = (props) => {
    const { className, value , id, onChange, name, placeholder} = props;
    return (
        <React.Fragment>
        <input className={className} value={value} id={id} onChange={onChange} name={name} placeholder={placeholder}/>
        </React.Fragment>
    )
}

export default InputBox;