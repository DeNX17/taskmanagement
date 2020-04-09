import React, { ReactElement } from 'react'
import { Form, Field } from 'formik'
import { LabelInput } from '../ui/label-input'

interface Props {
  buttonText: string
}

export const SignupForm = ({ buttonText }: Props): ReactElement => (
  <Form>
    <LabelInput name="username" label="user name" />

    <LabelInput name="password" label="password" />

    <button type="submit" >{buttonText}</button>
  </Form>
)
