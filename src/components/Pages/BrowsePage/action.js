
var data = require('./../../../../assets/data.json');
export const getFullDataConst = 'getFullData';
export const fetchProductConst = 'getProductData';
// export const sortDataConst = 'sortDataConst';
// export const filterDataConst = 'getFilterData';

/**Commented sortDataConst and filterDataConst for further use this will helpful in prepopulating data to browse page */

export function getFullData(payload = data) {
    return {
        type: getFullDataConst,
        payload: payload
    }
}

export function filterDataByInsuranceProvider(filterValue, payload = data) {
    if (filterValue !== 'InsuranceProviderFilter') {
        const updateData = Object.assign({}, payload);
        const filterData = payload.content.filter((value) => { return value.plan.insuranceProviderName === filterValue })
        updateData.content = filterData;
        return {
            type: getFullDataConst,
            payload: updateData
        }
    }
    else {
        return {
            type: getFullDataConst,
            payload: payload
        }
    }
}
export function filterDataByServiceAreaProvider(filterValue, payload = data) {
    if (filterValue !== 'ServiceAreaIdsFilter') {
        const updateData = Object.assign({}, payload);
        const filterData = payload.content.filter((value) => { return value.plan.planEligibility.serviceAreaIds[0] === filterValue })
        updateData.content = filterData;
        return {
            type: getFullDataConst,
            payload: updateData
        }
    }
    else {
        return {
            type: getFullDataConst,
            payload: payload
        }
    }

}
export function sortFilter(filterValue, payload = data) {
    if (filterValue !== 'SortFilter') {
        const updateData = Object.assign({}, payload);
        const sortData = Object.assign([],payload.content).sort((a, b) => {
            return filterValue === 'Amount: Low - High' ?
                a.totalAmount.amount - b.totalAmount.amount : filterValue === 'Amount: High - Low' ? b.totalAmount.amount - a.totalAmount.amount :
                    a.plan.createdAt - b.plan.createdAt
        })
        updateData.content = sortData;
        return {
            type: getFullDataConst,
            payload: updateData
        }
    }
    else {
        return {
            type: getFullDataConst,
            payload: payload
        }
    }

}

export function fetchProduct(planId, payload = data) {
    const productData = payload.content.filter((value) => { return value.plan.id === planId })
    return {
        type: fetchProductConst,
        payload: productData[0]
    }
}