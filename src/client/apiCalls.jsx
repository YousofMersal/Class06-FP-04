async function GetJsonFromApi() {
  try {
    //this code runs every time it tried to make a request
    const response = await fetch('/api/mentors')
    const body = await response.json()
    return body
  } catch (err) {
    //this code runs only when an error happens.
    throw new Error('Whoops, error in fetching data!: ' + err)
  }
}

export { GetJsonFromApi }
