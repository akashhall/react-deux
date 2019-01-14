import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SlidePage from './../Component/pages/slidesPage'
import LoginPage from './../Component/pages/loginPage'
const Routes = () => (
  <Switch>
     <Route exact path='/' component={LoginPage}/>
     <Route exact path='/slides' component={SlidePage}/>
  </Switch>
)
export default Routes;
