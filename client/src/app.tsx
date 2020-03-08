import React, { ReactElement, Fragment } from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";
import { MainPage } from './main/main.page';
import { root } from './common/routes';
import { Navigation } from './ui/navigation';

export const App = (): ReactElement => (
  <Fragment>
    <Navigation />
    <Switch>
      <Route path={root} exact component={MainPage} />
    </Switch>
  </Fragment>
)
