import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import { Page404 } from '../components/pages/error/Page404';
import { Home } from '../components/pages/Home';
import { Search } from '../components/pages/Search';
import { CustomerRoutes } from './CustomerRoutes';
import { EmployeeRoutes } from './EmployeeRoutes';

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Home />}></Route>
      <Route path="/search" render={() => <Search />}></Route>
      <Route
        path="/customer"
        render={({ match: { url } }) => (
          <Switch>
            {CustomerRoutes.map((customerRoute) => {
              return (
                <Route
                  key={customerRoute.path}
                  path={`${url}${customerRoute.path}`}
                  exact={customerRoute.exact}
                  render={() => customerRoute.children}
                ></Route>
              );
            })}
          </Switch>
        )}
      ></Route>
      <Route
        path="/employee"
        render={({ match: { url } }) => (
          <Switch>
            {EmployeeRoutes.map((employeeRoute) => {
              return (
                <Route
                  key={employeeRoute.path}
                  path={`${url}${employeeRoute.path}`}
                  exact={employeeRoute.exact}
                  render={() => employeeRoute.children}
                ></Route>
              );
            })}
          </Switch>
        )}
      ></Route>
      <Route component={Page404}></Route>
    </Switch>
  );
};
