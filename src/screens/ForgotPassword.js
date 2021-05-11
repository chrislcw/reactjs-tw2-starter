import React, { useState } from "react"

// Redux
import { login } from "../redux/actions"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { FormTitle, Button } from "./../components/atoms"
import { FieldWrapper, InputText } from "./../components/forms"
import api from "../utils/api"
import { loading } from "../redux/actions"
import _ from "lodash"

const ForgotPassword = (props) => {
  const [values, setValues] = useState({ email: "" })
  const [emailSent, setEmailSent] = useState(false)
  const [errors, setErrors] = useState({})

  const _sendEmail = (values) => {
    const email = values.email

    console.log("email", email)

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (re.test(String(email).toLowerCase()) === false) {
      setErrors({ email: "Invalid email format" })
      return
    }

    const url = "forgot-password/email?email=" + email

    console.log("///////////////////////////////////////////////////////")
    console.log("forgot-password API URL", url)
    console.log("///////////////////////////////////////////////////////")

    // return
    props.loading(true)

    api
      .post(url)
      .then((result) => {
        console.log("A")
        setEmailSent(true)
        // props.loading(false)
      })
      .catch((error) => {
        console.log("B")
        setEmailSent(true)
        // props.loading(false)
        // toast.error(`Error: fail to send email address.`)
      })
  }

  return (
    <div>
      <div className="bg-white py-10 pb-32 lg:pb-52 mm-motif motif-br">
        <div className="block-640">
          {!!emailSent ? (
            <div className="flex items-center flex-col">
              <FormTitle>Done</FormTitle>
              <p className="mb-16">
                If the email address exists in our database, a reset link has
                been sent.
              </p>
              <div className="flex justify-center">
                <Button
                  css="w-full lg:w-6/12"
                  onClick={() => props.history.push("/")}
                >
                  Continue
                </Button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                _sendEmail(values)
              }}
            >
              <FormTitle>Enter your email address</FormTitle>

              <FieldWrapper>
                <InputText
                  label="Email address"
                  name="email"
                  type="text"
                  placeholder="Enter email address"
                  onChange={(e) => {
                    setValues({ ...values, email: e.target.value })
                  }}
                  value={values.email}
                  error={_.get(errors, "email")}
                />
              </FieldWrapper>

              <div className="flex flex-col-reverse lg:flex-row">
                <Button
                  css="w-full lg:w-auto"
                  variant="hollow"
                  onClick={() => props.history.goBack()}
                >
                  Cancel
                </Button>
                <Button
                  css="w-full lg:flex-grow lg:w-auto lg:ml-2 mb-2 lg:mb-0"
                  type="submit"
                >
                  Send password reset link
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userLogin: state.Auth.userLogin,
    access_token: state.Auth.access_token,
    role: state.Auth.role,
    // role: "admin",
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (params) => dispatch(login(params)),
    loading: (param) => dispatch(loading(param)),
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)
)
