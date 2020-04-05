import React, { ReactElement, useState, useEffect } from 'react'
import { generateRoute, createLabel } from '../common/routes'
import { Link } from 'react-router-dom'

export const LabelsPage = (): ReactElement => {
  const [labels, setLabels] = useState([])

  useEffect((): void => {
    fetch(generateRoute("api/labels")).then((res) => res.json()).then((res) => setLabels(res))
  }, [])

  console.log(labels)

  return (
    <div>
      <Link to={createLabel}><button>Create label</button></Link>
      {labels.map(({ id, name }) => <div key={id}>{name}</div>)}
    </div>
  )
}