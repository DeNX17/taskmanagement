import React, { ReactElement, useState, Fragment } from 'react'
import { Formik } from "formik"
import { SignupForm } from './signup.form'
import authFetch from "../common/auth-fetch"
import Cookies from 'js-cookie'
import { generateRoute, tasks } from '../common/routes'
import { useHistory } from 'react-router'

interface Sign {
  username: string
  password: string
}

const initialValues = {
  username: "",
  password: ""
}

export const AuthPage = (): ReactElement => {
  const history = useHistory()

  const [isSignup, setIsSignup] = useState(true)

  const handleSignup = async (values: Sign): Promise<void> => {
    const data = await authFetch(generateRoute("api/auth/signup"), {
      method: "POST",
      body: JSON.stringify(values)
    })

    if (data.result) {
      alert("success")
      return
    }

    alert("error")
  }


  const handleSignin = async (values: Sign): Promise<void> => {
    const response = await (await fetch(generateRoute("api/auth/signin"), {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })).json()

    if (response.accessToken) {
      Cookies.set("token", response.accessToken)
      alert("Success")
      history.push(tasks)
    }
  }

  return (
    <Fragment>
      <button onClick={(): void => setIsSignup(!isSignup)}>switch to {isSignup ? "sign in" : "sign up"}</button>
      <br />

      {isSignup ?
        <Formik initialValues={initialValues} onSubmit={handleSignup} component={(): ReactElement => <SignupForm buttonText="Sing up" />} /> :
        <Formik initialValues={initialValues} onSubmit={handleSignin} component={(): ReactElement => <SignupForm buttonText="Sing in" />} />}
    </Fragment>
  )
}