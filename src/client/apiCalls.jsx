async function GetJsonFromApi() {
  const response = await fetch('/api/mentors')
  const body = await response.json()
  return body
}

export { GetJsonFromApi }
