import React, { ReactElement } from 'react'
import { Formik } from 'formik'
import { CreateTaskForm } from './ui/create-task.form'
import authFetch from '../common/auth-fetch'

const initialValues = {
  title: "",
  description: ""
}

export const CreateTaskPage = (): ReactElement => {
  const handleSubmit = (values: any): void => {
    const data = authFetch("http://localhost:5000/tasks", {
      method: "POST",
      body: JSON.stringify(values)
    })

    console.log(data)
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} component={CreateTaskForm} />
  )
}