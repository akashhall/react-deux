import React from 'react';
import { connect } from 'react-redux';
import InsuranceCard from './../../Molecule/InsuranceCard';
import DropDown from './../../../components/Atoms/dropDown';
import Button from './../../Atoms/button';
import { getFullData, filterDataByInsuranceProvider, filterDataByServiceAreaProvider, sortFilter } from './action';
import './style.css';

class BrowsePage extends React.Component {
    constructor(props) {
        super(props);
        this.insuranceProviderNameData = ['InsuranceProviderFilter'];
        this.serviceAreaIds = ['ServiceAreaIdsFilter'];
        this.sortData = ['SortFilter', 'Amount: Low - High', 'Amount: High - Low', 'Created At']
        this.compareSet = [],
            this.state = {
                browseData: {},
                compareButton: false,
            }
    }
    componentWillMount() {
        /*Calling an action to get full browse data*/
        let fullData = this.props.getBrowseData();
        /*setting up filter values*/
        fullData.payload.content.map(this.setFilterValue);
        /*setting brwoseData to state*/
        this.setState({ browseData: fullData.payload })
    }
    componentWillReceiveProps(nextprops) {
        /*This will work after each and every filter action performed*/
        if (nextprops.homeData.browseData && nextprops.homeData.browseData.content !== null) {
            this.setState({ browseData: nextprops.homeData.browseData })
        }
    }
    setFilterValue = (value) => {
        /** Setting filter values in an array for dropdown
        Here fetching only unique values to an array for filter */ 
        this.insuranceProviderNameData.includes(value.plan.insuranceProviderName) !== true ?
            this.insuranceProviderNameData.push(value.plan.insuranceProviderName) : null;
        this.serviceAreaIds.includes(value.plan.planEligibility.serviceAreaIds[0]) !== true ?
            this.serviceAreaIds.push(value.plan.planEligibility.serviceAreaIds[0]) : null;
    }
    compareCheck = (id) => {
        /*Here setting up an array for compare with different product Id's*/
        if (this.compareSet.includes(id) === true) {
            let index = this.compareSet.indexOf(id);
            if (index > -1) {
                this.compareSet.splice(index, 1);
            }
        } else {
            this.compareSet.push(id);
        }
        this.compareSet.length === 2 || this.compareSet.length === 3 ? this.setState({ compareButton: true }) : this.setState({ compareButton: false })
    }
    compareButtonClick = () => {
        /* Sending user to Compare Page */
        this.props.history.push({ pathname: '/Compare', state: this.compareSet })
    }
    render() {
        /*In Return Calling DropDown for Filter and InsuranceCard for each and every Insurance Info*/
        return (
            <React.Fragment>
                <div className="filter">
                    <DropDown className="left" options={this.insuranceProviderNameData} onChange={this.props.getProviderFilterData} />
                    <DropDown className="right" options={this.serviceAreaIds} onChange={this.props.getServiceFilterData} />
                    <DropDown className="right" options={this.sortData} onChange={this.props.getSortFilterData} />
                    {this.state.compareButton ? <Button value='Compare' className="buttonClass" onClick={this.compareButtonClick} /> : null}
                </div>
                <div className="insuranceContainer">
                    <div className="insuranceCardGrid">
                        {this.state.browseData.content.map((insurance, index) => {
                            return <div className="insuranceCardCell" key={index}><InsuranceCard id={insurance.plan.id} planName={insurance.plan.planName}
                                sumInsured={insurance.sumInsured}
                                insuranceProviderName={insurance.plan.insuranceProviderName}
                                premiumAmount={insurance.totalAmount.amount}
                                compareCheck={this.compareCheck}
                            /> </div>
                        })}
                    </div>
                </div>
            </React.Fragment>
        )
    }

}
/*Getting Main state */
const mapStateToProps = (state) => {
    return {
        homeData: state.homeReducer
    }
}

/*dispactig desired actions*/
const mapDispatchToProps = (dispatch) => {
    return {
        getBrowseData: () => dispatch(getFullData()),
        getProviderFilterData: (value) => dispatch(filterDataByInsuranceProvider(value)),
        getServiceFilterData: (value) => dispatch(filterDataByServiceAreaProvider(value)),
        getSortFilterData: (value) => dispatch(sortFilter(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowsePage);