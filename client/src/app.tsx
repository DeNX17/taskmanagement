import React, { ReactElement, Fragment } from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";
import { MainPage } from './main/main.page';
import { root, auth } from './common/routes';
import { Navigation } from './ui/navigation';
import { AuthPage } from './auth/auth.page';

export const App = (): ReactElement => (
  <Fragment>
    <Navigation />
    <Switch>
      <Route path={root} exact component={MainPage} />
      <Route path={auth} exact component={AuthPage} />
    </Switch>
  </Fragment>
)
