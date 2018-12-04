import Axios from 'axios'

async function getMentorsFromDb() {
  //this code runs every time it tried to make a request
  const response = await Axios.get('/api/getallmentors').catch(err => {
    throw new Error('Whoops, error in fetching data from api!' + err)
  })
  const body = await response.data
  return body
}

async function postNewMentor(formdata) {
  const response = await Axios.post('/api/creatementor', { formdata }).catch(err => {
    throw new Error('Whoops, error in posting data from api!' + err)
  })
  const body = await response.data
  return body
}

export { getMentorsFromDb, postNewMentor }
