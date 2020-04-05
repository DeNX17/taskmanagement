import React, { ReactElement } from 'react'
import styled from 'styled-components'

interface Props {
  name: string
  isChecked: boolean
  values: any
  id: string
  setFieldValue: (field: string, value: string[], isValidate?: boolean) => void
}

const Root = styled("div") <{ isChecked: boolean }>`
  border: 1px solid grey;
  height: 44px;
  width: 100px;
  text-align: center;
  cursor: pointer;

  background-color: ${(p) => p.isChecked ? "grey" : "white"};
`

export const LabelButton = ({ name, isChecked, setFieldValue, values, id }: Props): ReactElement => {

  const handleClick = (): void => {
    const newValue = isChecked ? [...values.labelIds.filter((labelId: string) => labelId !== id)] : [...values.labelIds, id]
    setFieldValue("labelIds", newValue)
  }

  return (
    <Root isChecked={isChecked} onClick={handleClick}>
      <p>{name}</p>
    </Root>
  )
}
