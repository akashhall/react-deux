
import React from "react";

class Dropdown extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
  const { className } = this.props;
  let options = this.props.options;
  const selectOption = (obj, index) => {
    return (
      <option key={index} value={obj.value ? obj.value : null}>
        {obj.optionText}
      </option>
    );
  };
  return (
    <div >
      <select className={className} onChange={(e)=>this.props.onChange && this.props.onChange(e.target.value)}>
        {options && options.map(selectOption)}
      </select>
    </div>
  );
  }
};
export default Dropdown;
