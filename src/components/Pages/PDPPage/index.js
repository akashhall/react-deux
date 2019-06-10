import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import InsuranceCard from './../../Molecule/InsuranceCard';
import Features from './../../Molecule/Features';
import { fetchProduct } from './../BrowsePage/action';
import BrowsePage from './../BrowsePage';
import './style.css';

class PDPPage extends React.Component {
    constructor(props) {
        super(props);
        this.medicalFeatures = [];
        this.travelFeatures = [];
        this.state = {
            productData: {},
            id:''
        }
    }
    componentWillMount() {
        /**Calling fetchProduct action for setting into state
         * getting this.props.location.state from browserRouter
         */
        const productData = this.props.getProductData(this.props.location.state)
        this.setState({ productData: productData.payload })
    }
    getId = (id) => {
        this.setState({id:id})
        this.props.history.push({ pathname: `/pdp/${id}`})
        console.log(id)
    }
    render() {
        // debugger
        /** In Return Calling Insusrance Card for basic information and Features for Medical and Travel Features
         *  Doing this for for sorting it in correct Id order: = MedicalFeatures.sort((a,b) => {return +a.benefitId.slice(4) - +b.benefitId.slice(4)})
         */
        return (
            <React.Fragment>
               {/* <Route path="" component={BrowsePage} /> */}
                {console.log(this.state.productData)}
                <div className="pdpContainer">
                    {this.state.productData && <div><div className="pdpContainerCell"><InsuranceCard planName={this.state.productData.plan.planName}
                        sumInsured={this.state.productData.sumInsured}
                        insuranceProviderName={this.state.productData.plan.insuranceProviderName}
                        premiumAmount={this.state.productData.totalAmount.amount}
                        onClick={() => {this.getId(this.state.productData.plan.id)}}
                        pdp={true}
                    /></div>
                        <br />
                        <div className="container">
                            <div className="floatLeft">
                                <span>Medical Features</span>
                                <br />
                                <Features data={this.state.productData.plan.planBenefitCategories.MedicalFeatures.sort((a,b) => {return +a.benefitId.slice(4) - +b.benefitId.slice(4)})} /> </div>
                            <div className="floatRight">
                                <span>Travel Features</span>
                                <br />
                                <Features data={this.state.productData.plan.planBenefitCategories.TravelFeatures.sort((a,b) => {return +a.benefitId.slice(4) - +b.benefitId.slice(4)})} /> </div>

                        </div>
                    </div>}

                </div>
            </React.Fragment>
        )
    }

}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
    return {
        getProductData: (productId) => dispatch(fetchProduct(productId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PDPPage);