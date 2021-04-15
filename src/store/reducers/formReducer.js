import {
    WRITE_FORM_TITLE
} from './types'


const initialState={
    formTitle: '',
}


export const formReducer = (state=initialState, action)=>{
    switch (action.type) {
        case WRITE_FORM_TITLE:
            return {
                ...state,
                formTitle: action.payload
            }
        default:{
            return{
                ...state
            }
        }
    }
}

export const writeFormTitle = text=>{
    return{
        type: WRITE_FORM_TITLE,
        payload: text
    }
}



