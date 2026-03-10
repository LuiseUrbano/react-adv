import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import { Routes } from './Routes';
import { Suspense } from 'react';
import logo from '../logo.svg';


export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {Routes.map(({ to, name }) => (
                <li key={to}>
                  <NavLink to={to} activeClassName="nav-active" exact>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>

            {
              Routes.map(({ to, Component }) => (
                <Route key={to} path={to} exact>
                  <Component />
                </Route>
              ))
            }

            <Route path="/users">
              <h1>Users</h1>
            </Route>
            <Route path="/">
              <h1>Home</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}