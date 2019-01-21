import React from 'react';
import { connect } from 'react-redux';
import InsuranceCard from './../../Molecule/InsuranceCard';
import Features from './../../Molecule/Features';
import { fetchProduct } from './../BrowsePage/action';
import './style.css';

class ComparePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            compareData: [],
        }
    }
    componentWillMount() {
        /** this.props.location.state is an array with selected insurance Id for comparing 
         * compareData will contain diffeent insurance card
         */
        const data = [];
        this.props.location.state.map((id) => { const product = this.props.fetchProductData(id); data.push(product.payload); })
        this.setState({ compareData: data });
    }

    render() {
        /**In return compareData is iterating and giving desired output*/
        return (
            <React.Fragment>
                <div className="compareContainer">
                    {this.state.compareData.map((productData, index) => {
                        return <div>
                            <div className="compareContainerCell" key={index}><InsuranceCard planName={productData.plan.planName}
                                sumInsured={productData.sumInsured}
                                insuranceProviderName={productData.plan.insuranceProviderName}
                                premiumAmount={productData.totalAmount.amount}
                            /></div>
                            <br />
                            <div>
                                <div className="medicalFeature">
                                    <span>Medical Features</span> 
                                    <br />
                                    <Features data={productData.plan.planBenefitCategories.MedicalFeatures.sort((a,b) => {return +a.benefitId.slice(4) - +b.benefitId.slice(4)})} /> </div>
                                <div className="travelFeature">
                                 <span>Travel Features</span> 
                                    <br />
                                    <Features data={productData.plan.planBenefitCategories.TravelFeatures.sort((a,b) => {return +a.benefitId.slice(4) - +b.benefitId.slice(4)})} /> </div>

                            </div>
                        </div>
                    })}
                </div>
            </React.Fragment>
        )
    }

}

const mapStateToProps = (state) => state;

/*dispactig desired actions*/
const mapDispatchToProps = (dispatch) => {
    return {
        fetchProductData: (id) => dispatch(fetchProduct(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComparePage);