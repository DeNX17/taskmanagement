import React, { ReactElement } from 'react'
import { Formik } from 'formik'
import { CreateTaskForm } from './ui/create-task.form'
import authFetch from '../common/auth-fetch'

import { withRouter } from "react-router";
import { tasks, generateRoute } from '../common/routes';

const initialValues = {
  title: "",
  description: ""
}

export const CreateTaskPage = withRouter(({ history }): ReactElement => {
  const handleSubmit = async (values: any): Promise<void> => {
    console.log("submit")

    await authFetch(generateRoute("api/tasks"), {
      method: "POST",
      body: JSON.stringify(values)
    }).then(() => history.push(tasks)).catch((err) => console.log(err))
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} component={CreateTaskForm} />
  )
})