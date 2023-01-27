const baseUrl = 'https://swapi.dev/api/starships/'

export async function getAllStarships() {
  const res = await fetch(`${baseUrl}`)
  return res.json()
}

export async function getDetails(apiUrl) {
  const res = await fetch(`${apiUrl}`)
  return res.json()
}