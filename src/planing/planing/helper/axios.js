import Axios from 'axios'

const axios = Axios.create({
 headers: {
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest'
 },
 responseType: 'json'
})

export default axios
