import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import { Suspense } from 'react';
import logo from '../logo.svg';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              <li>
                <NavLink to="/" activeClassName="nav-active" exact>
                  Shopping Page
                </NavLink>
              </li>
              <li>
                <NavLink to="/users" activeClassName="nav-active" exact>
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="nav-active" exact>
                  about
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>

            <Route path="/users">
              <h1>Users</h1>
            </Route>
            <Route path="/about">
              <h1>About</h1>
            </Route>
            <Route path="/">
              <ShoppingPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}