import React, { ReactElement, useState, useEffect } from 'react'
import { generateRoute, createLabel } from '../common/routes'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Label = styled("div")`
  border: 1px solid black;
  width: 150px;
  text-align: center;
`

export const LabelsPage = (): ReactElement => {
  const [labels, setLabels] = useState([])

  useEffect((): void => {
    fetch(generateRoute("api/labels"), {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then((res) => res.json()).then((res) => setLabels(res))
  }, [])

  return (
    <div>
      <Link to={createLabel}><button>Create label</button></Link>

      {labels.map(({ id, name }) => <Label key={id}>{name}</Label>)}
    </div>
  )
}