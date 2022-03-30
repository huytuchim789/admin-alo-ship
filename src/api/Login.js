import axios from 'axios'
export const login = (phone, pass) => {
  return axios.post('./login', { phone_number: phone, password: pass })
}
export const logout = () => {
  return axios.post('./logout')
}
