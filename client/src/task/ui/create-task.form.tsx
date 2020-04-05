import React, { ReactElement, useState, useEffect } from 'react'
import { LabelInput } from '../../ui/label-input'
import { Form, FormikProps } from 'formik'
import { awaitFetch } from '../../common/await-fetch'
import styled from 'styled-components'
import { LabelButton } from './label-button'

type Props = FormikProps<any> & {

}

const Labels = styled("div")`
  display: flex;
`

export const CreateTaskForm = ({ values, setFieldValue }: Props): ReactElement => {
  const [labels, setLabels] = useState([])

  useEffect((): void => {
    awaitFetch("api/labels").then((res) => setLabels(res))
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