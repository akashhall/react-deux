import { getFullDataConst, filterDataConst, fetchProductConst, sortDataConst} from './action';


/**Commented sortDataConst and filterDataConst for further use this will helpful in prepopulating data to browse page*/

export function browseReducer(state = {}, action) {
    switch (action.type) {
        case getFullDataConst: {
            return Object.assign({}, state, {
                browseData: action.payload
            })
        }
            // case filterDataConst: {
            //     return Object.assign({}, state, {
            //         filterData: action.payload
            //     })
            // }
            // case sortDataConst: {
            //     return Object.assign({}, state, {
            //         filterData: action.payload
            //     })
            // }
        case fetchProductConst: {
            return Object.assign({}, state, {
                productData: action.payload
            })
        }
        default :return state;
    }

}