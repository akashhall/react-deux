
import React from 'react';
import Image from './../../Atoms/image';
import Link from './../../Atoms/link';
import Checkbox from './../../Atoms/checkbox';
import Button from './../../Atoms/button';
import './style.css';

class InsuranceCard extends React.Component{
    constructor (props)
    {
        super(props)
        this.state = {
            highlightCardState : false, 
        }
    };
    render () {
    const { planName, sumInsured, insuranceProviderName, premiumAmount, id,compareCheck, pdp,onClick } = this.props;
    let src = '';
    /** Dynamically adding img with desired Insurance Card */
    if (insuranceProviderName === 'Reliance Health Insurance') {
        src = 'RelianceGeneral';
    } else if (insuranceProviderName.indexOf('Ergo General Insurance') > -1) {
        src = 'HDFCErgo';
    } else {
        src = 'Religare'
    }
    /** For Highlighting card when clicks on checkbox*/
    const highlightCard = (id) =>{
        if(this.state.highlightCardState) {
            this.setState({highlightCardState :false})
        } else {
            this.setState({highlightCardState :true})
        }
        compareCheck(id);
    }
    const imageSrc = `./../../../../assets/${src}.png`
    return (
        <div className= {this.state.highlightCardState ? "insuraceCardHighlight" : "insuraceCard"}>
            {pdp && <Button value='X'onClick={()=>{onClick(id)}} />}
            <Image src={imageSrc} className="imageWidth"/>
            <span> {planName} </span>
            <span> {insuranceProviderName} </span>
            <span> Sum Insured : {sumInsured} </span>
            <span> Premium : {premiumAmount} </span>
            { id && <Link className="linkClass" href='pdp' value="SEE DETAILS" id={id} />}
            {compareCheck && <Checkbox onClick={()=> highlightCard(id)} />}
        </div>
    )

}
}

export default InsuranceCard;