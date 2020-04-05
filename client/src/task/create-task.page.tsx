import React, { ReactElement, useState, useEffect } from 'react'
import { Formik } from 'formik'
import { CreateTaskForm } from './ui/create-task.form'
import authFetch from '../common/auth-fetch'

import { withRouter } from "react-router";
import { tasks, generateRoute } from '../common/routes';

interface CreateTaskInput {
  title: string
  description: string
  labelsIds: string[]
}

const initialValues = {
  title: "",
  description: "",
  labelIds: []
}

export const CreateTaskPage = withRouter(({ history }): ReactElement => {
  const handleSubmit = async (values: any): Promise<void> => {
    await authFetch(generateRoute("api/tasks"), {
      method: "POST",
      body: JSON.stringify(values)
    }).then(() => history.push(tasks)).catch((err) => console.log(err))
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} component={CreateTaskForm} />
  )
})