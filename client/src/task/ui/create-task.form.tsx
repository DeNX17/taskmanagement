import React, { ReactElement, Fragment } from 'react'
import { LabelInput } from '../../ui/label-input'



export const CreateTaskForm = (): ReactElement => (
  <Fragment>
    <LabelInput name="title" label="title" />
    <LabelInput name="description" label="description" />
    <button>Create</button>
  </Fragment>
)
