import React, { ReactElement } from 'react'
import {
  Link
} from "react-router-dom";
import { root } from '../common/routes';


export const Navigation = (): ReactElement => (
  <div>
    <ul>
      <Link to={root}>Main</Link>
    </ul>
  </div>
)
