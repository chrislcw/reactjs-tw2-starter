import api from "./../../utils/api"

const pathURL = "auth"

export const login = (params) => {
  const url = `${pathURL}/login`

  return api.post(url, params)
}

export const logout = () => {
  const url = `${pathURL}/logout`
  return api.get(url)
}
