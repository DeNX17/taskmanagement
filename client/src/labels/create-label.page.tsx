import React, { ReactElement } from 'react'
import { Formik, Form } from 'formik'
import { LabelInput } from '../ui/label-input'
import { generateRoute, labels } from '../common/routes'
import { useHistory } from 'react-router'

const initialValues = {
  name: ""
}

export const CreateLabelPage = (): ReactElement => {
  const history = useHistory()

  const handleSubmit = (values: any): void => {
    try {
      fetch(generateRoute("api/labels"), {
        method: "POST",
        mode: "cors",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
      }).then(() => history.push(labels))

    } catch { }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      component={(): ReactElement =>
        <Form>
          <LabelInput name="name" label="Label name" />
          <button type="submit">Submit</button>
        </Form>
      } />
  )
}