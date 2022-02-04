import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DashBoard from './views/DashBoard'
import NotFoundPage from './views/NotFoundPage'
import QuoteForm from './components/QuoteForm'
import Home from './views/Home'

const Routes = () => {
  return (
    <Switch>
       <Route exact path={'/dashboard'} component={DashBoard}></Route>
       <Route exact path={'/'} component={Home}></Route>
       <Route exact path={'/createQuote'} component={QuoteForm}></Route>
       <Route exact path={'/*'} component={NotFoundPage}></Route>
    </Switch>
  )
}

export default Routes
