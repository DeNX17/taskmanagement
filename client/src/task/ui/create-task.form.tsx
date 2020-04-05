import React, { ReactElement, useState, useEffect } from 'react'
import { LabelInput } from '../../ui/label-input'
import { Form } from 'formik'
import { awaitFetch } from '../../common/await-fetch'
import styled from 'styled-components'

const Labels = styled("div")`
  display: flex;
`

export const CreateTaskForm = (): ReactElement => {
  const [labels, setLabels] = useState([])

  useEffect((): void => {
    awaitFetch("api/labels").then((res) => setLabels(res))
  }, [])
  console.log(labels)
  return (
    <Form>
      <LabelInput name="title" label="title" />
      <LabelInput name="description" label="description" />

      <Labels>{labels.map(({ name, id }) => <div key={id}>{name}</div>)}</Labels>
      <button>Create</button>
    </Form>
  )
}