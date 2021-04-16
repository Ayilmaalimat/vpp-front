import {
    TOGGLE_COSTS_FETCH_LOADER,WRITE_COST_BY_ID
} from './types'
import {costGetByIdReq, costsUpdateReq} from "../../utils/requests";


const initialState={
    costsFetchLoader: false,
    costById: {}
}


export const costsReducer = (state=initialState, action)=>{
    switch (action.type) {
        case TOGGLE_COSTS_FETCH_LOADER:
            return {
                ...state,
                costsFetchLoader: action.payload
            }

        case WRITE_COST_BY_ID:
            return {
                ...state,
                costById: action.payload
            }
        default:{
            return{
                ...state
            }
        }
    }
}

export const toggleCostsFetchLoader = bool=>{
    return{
        type: TOGGLE_COSTS_FETCH_LOADER,
        payload: bool
    }
}
export const costGetById = (id)=>{
    return async dispatch=>{
        dispatch(toggleCostsFetchLoader(true))
        await costGetByIdReq(id)
            .then(response=>dispatch({type: WRITE_COST_BY_ID,payload: response.data.data[0]}))
        dispatch(toggleCostsFetchLoader(false))
    }
}
export const costsUpdate = (id,data)=>{
    return async dispatch=>{
        dispatch(toggleCostsFetchLoader(true))
        await costsUpdateReq(id,data)
            .then(async ()=>
                await costGetByIdReq(id)
                .then(response=>dispatch({type: WRITE_COST_BY_ID,payload: response.data.data[0]})))
        dispatch(toggleCostsFetchLoader(false))
    }
}



