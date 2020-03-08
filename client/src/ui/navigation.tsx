import React, { ReactElement } from 'react'
import {
  Link
} from "react-router-dom";
import { root, auth } from '../common/routes';

const items = [
  {
    name: "Main",
    path: root
  },
  {
    name: "Auth",
    path: auth,
  }
]

export const Navigation = (): ReactElement => (
  <ul>
    {items.map((item): ReactElement =>
      <li>
        <Link to={item.path}>
          {item.name}
        </Link>
      </li>)}
  </ul>
)
