import * as types from '../action-types';

let initState = {
    searchInfoList:{
        loading:false,
        list:[]
    }
}
export  default  function (state = initState,action) {
    switch (action.type){
        case types.AJAX_SEARCH:
        return {
            ...state,
            searchInfoList:{
            loading: false,
            list: action.Date
            }
        }
    }
}