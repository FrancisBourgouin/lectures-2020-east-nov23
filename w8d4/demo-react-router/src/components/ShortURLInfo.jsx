import { useRouteMatch } from 'react-router-dom'

export default function ShortURLInfo(props) {
  let match = useRouteMatch();
  console.log(match)
  // axios.get(`/api/urls/${match.params.shortUrl}`).then(res => ) //res contain the json of this specific url
  return <h1>SHOW THE INFO OF ONE SPECFIC shorturl {match.params.shortUrl}</h1>
}