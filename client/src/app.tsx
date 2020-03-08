import React, { ReactElement, Fragment } from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";
import { MainPage } from './main/main.page';
import { root, auth, tasks, createTask } from './common/routes';
import { Navigation } from './ui/navigation';
import { AuthPage } from './auth/auth.page';
import { TasksPage } from './task/tasks.page';
import { CreateTaskPage } from './task/create-task.page';

export const App = (): ReactElement => (
  <Fragment>
    <Navigation />
    <Switch>
      <Route path={root} exact component={MainPage} />
      <Route path={auth} exact component={AuthPage} />
      <Route path={tasks} exact component={TasksPage} />
      <Route path={createTask} exact component={CreateTaskPage} />
    </Switch>
  </Fragment>
)
