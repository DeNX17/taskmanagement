import React, { ReactElement } from 'react'
import { Form, Field } from 'formik'

interface Props {
  buttonText: string
}

export const SignupForm = ({ buttonText }: Props): ReactElement => (
  <Form>
    <label>userName</label>
    <Field name="username" />

    <br />

    <label>password</label>
    <Field name="password" />

    <br />

    <button type="submit" >{buttonText}</button>
  </Form>
)
