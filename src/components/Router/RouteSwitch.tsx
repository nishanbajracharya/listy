import { Route, Switch, Redirect } from 'wouter';

import Home from '../pages/Home';
import Rank from '../pages/Rank';
import Compare from '../pages/Compare';
import route from '../../constants/config/route';

function RouteSwitch() {
  return (
    <Switch>
      <Route path={route.COMPARE.path}>
        <Compare />
      </Route>
      <Route path={route.RANK.path}>
        <Rank />
      </Route>
      <Route path={route.HOME.path}>
        <Home />
      </Route>
      <Redirect to={route.HOME.path} />
    </Switch>
  );
}

export default RouteSwitch;
