import Axios from 'axios'

async function getMentorsFromDb() {
  //this code runs every time it tried to make a request
  const response = await Axios.get('/api/getallmentors').catch(err => {
    throw new Error('Whoops, error in fetching data from api!' + err)
  })
  return await response.data
}

async function postNewMentor(params) {
  const response = await Axios.post('/api/creatementor', { data: params }).catch(
    err => {
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
      } else if (err.request) {
        // The request was made but no response was received
        throw new Error('Whoops something went wring while POSTing!: ' + err.request)
      } else {
        // Something happened in setting up the request that triggered an err
        throw new Error(
          'Whoops something went wring while POSTing!: ' + err.response
        )
      }
      console.log(err.config)
    }
  )
  return await response
}

//almost the exact same as postNewMentor but only sends 1 peice of data.
//The id of the element to be deleted from the database.

async function deleteMentor(key) {
  const response = await Axios.post('/api/deletementor', { id: key }).catch(err => {
    if (err.response) {
      console.log(err.response.data)
      console.log(err.response.status)
      console.log(err.response.headers)
    } else if (err.request) {
      throw new Error('Whoops something went wring while POSTing!: ' + err.request)
    } else {
      throw new Error('Whoops something went wring while POSTing!: ' + err.response)
    }
    console.log(err.config)
  })
  return await response
}

//very similair to postNewMentor
async function updateMentor(params) {
  const response = await Axios.post('/api/updatementor', { data: params }).catch(
    err => {
      if (err.response) {
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
      } else if (err.request) {
        throw new Error('Whoops something went wring while POSTing!: ' + err.request)
      } else {
        throw new Error(
          'Whoops something went wring while POSTing!: ' + err.response
        )
      }
      console.log(err.config)
    }
  )
  return await response
}

export { getMentorsFromDb, postNewMentor, deleteMentor, updateMentor }
