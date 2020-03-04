import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Auth from '../../pages/Auth'
import DefaultLayout from '../../layout/DefaultLayout'

import routes from '../../pages/routes'

const generateRoute = (route) => (
  <Route key={route.id} exact path={route.path}>
    <route.component />
  </Route>
)

const NavSwitcher = (props) => (
  <>
    <Switch>
      <Route path="/auth/:slug">
        <Auth />
      </Route>
    </Switch>
    {props.location.pathname !== '/auth/login' && (
      <DefaultLayout>
        <Switch>
          {routes.map(generateRoute)}
          <Route path="*">notfound</Route>
        </Switch>
      </DefaultLayout>
    )}
  </>
)

export default withRouter(NavSwitcher)
