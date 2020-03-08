import React, { ReactElement } from 'react'
import styled from 'styled-components'

interface Props {
  id: string
  title: string
  description: string
  status: string
  rating: number
  created_at: string
  comments: any
  labels: any
  author: any
}

const Root = styled("div")`
  border: 1px solid grey;
  margin: 0px 20px;
`

export const Task = ({ title, description }: Props): ReactElement => (
  <Root>
    <p>{title}</p>
    <p>{description}</p>
  </Root>
)
