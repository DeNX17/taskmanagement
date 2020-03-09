import React, { ReactElement, Fragment } from 'react'
import { LabelInput } from '../../ui/label-input'
import { Form } from 'formik'

export const CreateTaskForm = (): ReactElement => (
  <Form>
    <LabelInput name="title" label="title" />
    <LabelInput name="description" label="description" />
    <button>Create</button>
  </Form>
)
