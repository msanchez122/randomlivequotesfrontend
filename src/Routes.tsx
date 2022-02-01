import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DashBoard from './components/DashBoard'
import NotFoundPage from './components/NotFoundPage'
import Home from './Home'

const Routes = () => {
  return (
    <Switch>
       <Route exact path={'/dashboard'} component={DashBoard}></Route>
       <Route exact path={'/'} component={Home}></Route>
       <Route exact path={'/*'} component={NotFoundPage}></Route>
    </Switch>
  )
}

export default Routes
