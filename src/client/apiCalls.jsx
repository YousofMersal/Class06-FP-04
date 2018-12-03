async function getMentorsFromDb() {
  try {
    //this code runs every time it tried to make a request
    const response = await fetch('/api/dbtest')
    const body = await response.json()
    return body
  } catch (err) {
    //this code runs only when an error happens.
    throw new Error('Whoops, error in fetching data from api!' + err)
  }
}

export { getMentorsFromDb }
