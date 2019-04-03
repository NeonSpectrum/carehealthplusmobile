import Axios from 'react-native-axios'

export const baseURL = 'http://localhost/api'
export const googleAPI = 'AIzaSyABxtKogXuWlEjb5yLzvikqIleo8cDBacE'

export const axios = Axios.create({
  baseURL
})
