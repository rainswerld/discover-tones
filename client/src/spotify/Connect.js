const clientId = 'a1516982e6044f1cac493ab1c8492818'
const clientSecret = 'a3be153a02124321bdbd647aa70732b4'

const getToken = async () => {

  const result = await fetch('https://accounts.spotify.com/api/token'), {
    method: 'POST',
    headers: {
      'Content-Type': `application/x-www-form-urlencoded`,
      'Authorization': 'Basic ' + btoa( clientId + ':' + clientSecret)
    },
    body: 'grant_type=client_credentials'
  }

  const data = await result.json()
  console.log(data)
  return data.access_token
}
