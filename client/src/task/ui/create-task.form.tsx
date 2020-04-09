import React, { ReactElement, useState, useEffect } from 'react'
import { LabelInput } from '../../ui/label-input'
import { Form, FormikProps } from 'formik'
import styled from 'styled-components'
import { LabelButton } from './label-button'
import { CreateTaskInput } from '../create-task.page'
import { generateRoute } from '../../common/routes'

type Props = FormikProps<CreateTaskInput> & {

}

const Labels = styled("div")`
  display: flex;
`

export const CreateTaskForm = ({ values, setFieldValue }: Props): ReactElement => {
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
    <Form>
      <LabelInput name="title" label="title" />
      <LabelInput name="description" label="description" />

      <Labels>
        {labels.map(({ name, id }) => (
          <LabelButton
            key={id}
            id={id}
            name={name} setFieldValue={setFieldValue}
            isChecked={values.labelIds.includes(id)}
            values={values}
          />

        ))}
      </Labels>

      <button>Create</button>
    </Form>
  )
}