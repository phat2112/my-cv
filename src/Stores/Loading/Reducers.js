import {INITIAL_STATE} from 'Stores/Loading/States'
import {LoadingAction} from 'Stores/Loading/constant'

const loadingReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case LoadingAction.SHOW_LOADING:
            return {
                ...state,
                loading: true,
            }
        case LoadingAction.HIDE_LOADING:
            return {
                ...state, 
                loading: false,
            }
        default: 
            return state
    }
}