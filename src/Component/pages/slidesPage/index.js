import React from 'react';
import './slide-page.css'
import Button from './../../atoms/button';
import Modal from './../../atoms/modal';
import DropDown from './../../atoms/dropDown';
import Carousel from './../../atoms/carousel';

export default class SlidePages extends React.Component {
    constructor (props) {
        super(props) 
        this.state = {
            dropDownArray : [],
            slides: 0,
            selectedValues : [],
            show: false,
        }
    };

    getSelectedValue=(value)=>{
        if(value !== 'Select Slides') {
            this.setState(prevState => ({
                selectedValues: [...prevState.selectedValues, value] 
              }))
        }
        this.setState({slides : value})
    }
    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    componentWillMount () {
        let array = [];
        for(let i = 0; i<= 20 ;i ++ ){
         array.push({ 
            id: i,
            value: i,
            optionText: i === 0 ? 'Select Slides' : i,
        })
        }
        this.setState({dropDownArray : array});
    }
    render() {
        console.log();
        return (
            <React.Fragment>
                {this.props.location && this.props.location.state && this.props.location.state.loginToken ?
                <div>
                <div className="pre-guide"> <span> Please Select Slides Between 1 to 20 </span></div>
                <DropDown className="drop-down" options={this.state.dropDownArray} onChange={this.getSelectedValue}/>
                <Carousel numberOfSlides={this.state.slides} selectedSlides={this.state.selectedValues}/>
                <div>{this.state.slides > 0 ? <Button value="Finish" className="finishButton" onClick={this.showModal} /> : null}</div>
                <Modal show={this.state.show} handleClose={this.hideModal} customClassName="slidesNumber"> 
                    <div><span> User Selected Slides Are :-</span> <br />{this.state.selectedValues.toString()}</div>
                </Modal> </div>: null }
            </React.Fragment>
        )
    }
}
