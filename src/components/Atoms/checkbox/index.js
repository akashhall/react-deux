import React from 'react'

const InputBox = (props) => {
    const { className, state, onChange, onClick} = props;
    return (
        <React.Fragment>
         <input type="checkbox"
          checked={state && state.isChecked}
          onChange={onChange}
          onClick={onClick}
        />
        </React.Fragment>
    )
}

export default InputBox;