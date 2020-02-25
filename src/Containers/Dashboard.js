import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import DashboardLayout from 'Components/pages/DashboardLayout'

const DashboardContainer = ({component: Component, ...rest}) => {
    const RouterContext = React.createContext()
    return (
        <Route
        {...rest}
        render={({location, history, ...props}) => (
            <RouterContext.Provider value={rest}>
                 <DashboardLayout>
                    <Component location={location} history={history} {...props} />
                </DashboardLayout>
            </RouterContext.Provider>
        )} 
        />
    )
}
export default DashboardContainer