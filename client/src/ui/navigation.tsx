import React, { ReactElement } from 'react'
import {
  Link
} from "react-router-dom";
import { root, auth } from '../common/routes';
import styled from 'styled-components';

const StyledUl = styled("ul")`
  display: flex;
  align-items: center;
  background-color: #c1bcff;
`
const StyledLi = styled("li")`
  color: black;
  transform: none;
  text-decoration: none;
  padding: 12px 20px;
  list-style-type: none;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    opacity: 0.6;
  }
`

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
  <StyledUl>
    {items.map((item): ReactElement =>
      <StyledLi key={item.name}>
        <StyledLink to={item.path}>
          {item.name}
        </StyledLink>
      </StyledLi>
    )}
  </StyledUl>
)
