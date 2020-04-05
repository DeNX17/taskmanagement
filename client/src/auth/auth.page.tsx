import React, { ReactElement, useState, Fragment } from 'react'
import { Formik } from "formik"
import { SignupForm } from './signup.form'
import authFetch from "../common/auth-fetch"
import Cookies from 'js-cookie'

interface Sign {
  username: string
  password: string
}

const initialValues = {
  username: "",
  password: ""
}

export const AuthPage = (): ReactElement => {
  const [isSignup, setIsSignup] = useState(true)

  const handleSignup = async (values: Sign): Promise<void> => {
    const data = await authFetch("/api/auth/signup", {
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
    const data = await authFetch("/api/auth/signin", {
      method: "POST",
      body: JSON.stringify(values),
    }).then((res): void => {
      Cookies.set("token", res.accessToken)
    })

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