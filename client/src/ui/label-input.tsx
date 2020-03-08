import React, { ReactElement } from 'react'
import { Field } from 'formik'

interface Props {
  label?: string
  name: string
}

export const LabelInput = ({ label, name }: Props): ReactElement => (
  <div>
    <label>{label} </label>
    <Field name={name} />
  </div>
)
