import Loadable from 'react-loadable'
import LoadingPage from './Components/atom/LoadingPage'

export const AsyncHome = Loadable({
    loader: () => import('./Components/pages/Home'),
    loading: LoadingPage,
})
export const AsyncProfile = Loadable({
    loader: () => import('./Components/pages/Profile'),
    loading: LoadingPage,
})
export const AsyncProject = Loadable({
    loader: () => import('./Components/pages/Project'),
    loading: LoadingPage,
})