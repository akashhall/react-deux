import React from 'react'
import { Switch, Route } from 'react-router-dom'
import BrowsePage from './../Pages/BrowsePage';
import Loadable from 'react-loadable';

/* Code Splitting with help of react-loadable*/
function Loading({ error }) {
  if (error) {
    return 'Oh nooess!';
  } else {
    return <h3>Loading...</h3>;
  }
}

const PDP = Loadable({
    loader : () => import('./../Pages/PDPPage'),
    loading : Loading
})
const ComparePage = Loadable({
  loader : () => import('./../Pages/ComparePage'),
  loading : Loading
})
const MainRoutes = () => (
  <>
    <Switch>
      <Route exact path='/' component={BrowsePage}/>
      <Route path='/PDP' component={PDP}/>
      <Route path='/Compare' component={ComparePage}/>
    </Switch>
  </>
)

export default MainRoutes;