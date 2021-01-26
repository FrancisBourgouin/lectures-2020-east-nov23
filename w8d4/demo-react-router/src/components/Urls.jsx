
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import ShortURLInfo from './ShortURLInfo'
import ShortURLList from './ShortURLList'

export default function Urls(props) {
  let match = useRouteMatch();
  console.log(match)

  return (
    <Switch>
      <Route path={match.path} exact>
        <ShortURLList />
      </Route>
      <Route path={`${match.path}/:shortUrl`}>
        <ShortURLInfo />
      </Route>
    </Switch>
  )
}