import React, { useState } from "react"
import { connect } from "react-redux"
import api from "../utils/api"
import { FieldWrapper, InputText } from "./../components/forms"
import { FormTitle, Button, Tooltip } from "./../components/atoms"
import { toast } from "react-toastify"
import { loading } from "../redux/actions"
import { login } from "../redux/actions"
import _ from "lodash"

const ResetPassword = (props) => {
  const [values, setValues] = useState({
    password: "",
    password_confirmation: "",
  })
  const [errors, setErrors] = useState({})

  const winURL = window.location.href

  var params = {}
  var parser = document.createElement("a")
  parser.href = winURL
  var query = parser.search.substring(1)
  var vars = query.split("&")
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=")
    params[pair[0]] = decodeURIComponent(pair[1])
  }

  // console.log("params", params)

  const _resetPassword = (values) => {
    const password = values.password
    const confirm = values.password_confirmation

    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

    if (re.test(String(password)) === false) {
      setErrors({ ...errors, password: "Password strength is too low." })
      return
    } else if (password !== confirm) {
      setErrors({
        email: "",
        password_confirmation: "Password and password repeat not the same.",
      })
      return
    } else {
      setErrors({
        password: "",
        password_confirmation: "",
      })
    }

    props.loading(true)

    const url =
      "forgot-password/reset?" +
      "email=" +
      params.email +
      "&" +
      "token=" +
      params.token +
      "&" +
      "password=" +
      password +
      "&" +
      "password_confirmation=" +
      confirm

    console.log("resetpassword API URL", url)

    // return

    api
      .post(url)
      .then((result) => {
        props.loading(false)
        toast.success(`Password reset successfully!`)
        props.login({ email: params.email, password: password })
      })
      .catch((error) => {
        console.log("error", error)

        props.loading(false)
        toast.error(`Error: Reset password failed.`)
      })
  }

  return (
    <div>
      <div className="bg-white py-10 pb-32 lg:pb-52 mm-motif motif-br">
        <div className="block-640">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              _resetPassword(values)
            }}
          >
            <FormTitle>Reset password</FormTitle>

            <div className="flex justify-start">
              <div className="flex-grow">
                <FieldWrapper>
                  <InputText
                    label="New password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    onChange={(e) => {
                      setValues({ ...values, password: e.target.value })
                    }}
                    value={values.password}
                    error={_.get(errors, "password")}
                  />
                </FieldWrapper>
              </div>
              <div className="ml-4 pt-14">
                <Tooltip
                  tip="Password must contain at least one uppercase letter, one
                    lowercase letter and one number. Min. 8 characters."
                />
              </div>
            </div>

            <FieldWrapper>
              <InputText
                label="New password repeat"
                name="password_confirmation"
                type="password"
                placeholder="Enter password"
                onChange={(e) => {
                  setValues({
                    ...values,
                    password_confirmation: e.target.value,
                  })
                }}
                value={values.password_confirmation}
                error={_.get(errors, "password_confirmation")}
              />
            </FieldWrapper>

            <div className="flex flex-col-reverse lg:flex-row">
              <Button
                css="w-full lg:w-auto"
                variant="hollow"
                onClick={() => props.history.push("/")}
              >
                Cancel
              </Button>
              <Button
                css="w-full lg:flex-grow lg:w-auto lg:ml-2 mb-2 lg:mb-0"
                type="submit"
              >
                Reset your password
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    loading: (param) => dispatch(loading(param)),
    login: (params) => dispatch(login(params)),
  }
}

export default connect(null, mapDispatchToProps)(ResetPassword)
