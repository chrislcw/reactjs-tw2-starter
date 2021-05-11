import React, { useState, useEffect, useRef } from "react"

// Redux
import { login } from "../redux/actions"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import { FormTitle, Button, TextLink } from "./../components/atoms"
import { FieldWrapper, InputText } from "./../components/forms"

const Login = (props) => {
  const [values, setValues] = useState({ email: "", password: "" })

  const _login = (values, actions) => {
    props.login(values)
  }

  const useFocus = () => {
    const htmlElRef = useRef(null)
    const setFocus = () => {
      htmlElRef.current && htmlElRef.current.focus()
    }

    return [htmlElRef, setFocus]
  }

  const [inputRef, setInputFocus] = useFocus()

  useEffect(() => {
    console.log("useEffect props.userLogin", props.userLogin)

    if (!!props.userLogin.isSubmitted && !!props.userLogin.error) {
      setValues({ ...values, password: "" })
      setInputFocus()
    }
    // eslint-disable-next-line
  }, [props.userLogin])

  return (
    <div>
      <div className="bg-white py-10 pb-32 lg:pb-52 mm-motif motif-br">
        <div className="block-640">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              _login(values)
            }}
          >
            <FormTitle>Log in</FormTitle>

            <FieldWrapper>
              <InputText
                label="Email address"
                name="email"
                type="email"
                placeholder="Enter email address"
                onChange={(e) => {
                  setValues({ ...values, email: e.target.value })
                }}
                value={values.email}
              />
            </FieldWrapper>
            <FieldWrapper>
              <InputText
                ref={inputRef}
                label="Password"
                name="password"
                type="password"
                placeholder="Enter password"
                onChange={(e) => {
                  setValues({ ...values, password: e.target.value })
                }}
                value={values.password}
              />
            </FieldWrapper>

            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
              <Button css="mb-4 md:mb-0" type="submit">
                Login
              </Button>
              <TextLink onClick={() => props.history.push("/forgotpassword")}>
                Forgot your password? Click here
              </TextLink>
            </div>

            <div className="flex flex-col-reverse md:flex-row justify-start items-center">
              <span className="mr-5">Don’t have an account yet ?</span>
              <Button
                css="mb-4 md:mb-0"
                variant="hollow"
                onClick={() => {
                  props.history.push("/register")
                }}
              >
                Request an account
              </Button>
            </div>
          </form>
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
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
