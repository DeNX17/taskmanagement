import React, { ReactElement } from 'react'
import { Field } from 'formik'
import styled from 'styled-components'

interface Props {
  label?: string
  name: string
}

const Root = styled("div")`
  display: flex;
  flex-direction: column;
  max-width: 320px;
`

const Label = styled("label")`
  margin-bottom: 8px;
`

export const LabelInput = ({ label, name }: Props): ReactElement => (
  <Root>
    <Label>{label} </Label>
    <Field name={name} />
  </Root>
)
