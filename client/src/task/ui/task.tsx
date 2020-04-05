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
  padding: 10px;
`

const Title = styled("p")`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
`

const Description = styled("p")`
  color: grey;
`

const CreatedAt = styled("p")`
  text-align: right;  
`

const Footer = styled("div")`
  display: flex;
  justify-content: space-between;
`

const Labels = styled("div")`
  display: flex;
`

const Label = styled("p")`
  padding: 5px 10px;
  border: 1px solid black;
`

export const Task = ({ title, description, created_at, comments, author, labels }: Props): ReactElement => (
  <Root>
    <Title>Title: {title}</Title>
    <Description>Description: {description}</Description>

    <Footer>
      <p>Comments count {comments.length}</p>
      <CreatedAt>{created_at}</CreatedAt>
    </Footer>

    <p>Author - {author.username}</p>

    Labels:<Labels>{labels.map(({ name, id }: any) => <Label key={id}>{name}</Label>)}</Labels>
  </Root>
)
