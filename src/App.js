import React from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom'
import * as routes from 'Routes'
import Dashboard from 'Containers/Dashboard.js'


const App = ({ location }) =>{
  return  (
   <>
    <Switch>
      <Dashboard path='/dashboard' exact component={routes.AsyncHome} />
      <Dashboard path='/profile' exact component={routes.AsyncProfile} />
      <Dashboard path='/project' exact component={routes.AsyncProject} />
      <Redirect exact from="/" to="/dashboard" />
    </Switch>
   </>
  )
}


export default withRouter(App);
