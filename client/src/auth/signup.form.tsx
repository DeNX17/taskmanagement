import React, { ReactElement } from 'react'
import { Form, Field } from 'formik'

interface Props {

}

export const SignupForm = ({ }: Props): ReactElement => (
  <Form>
    <label>userName</label>
    <Field name="username" />

    <br />

    <label>password</label>
    <Field name="password" />

    <br />

    <button>sign up</button>
  </Form>
)
