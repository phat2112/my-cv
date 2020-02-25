import {LoadingAction} from 'Stores/Loading/constant'
const showLoading = loading => ({
    type: LoadingAction.SHOW_LOADING,
    loading,
})
const hideLoading = loading => ({
    type: LoadingAction.HIDE_LOADING,
    loading,
})