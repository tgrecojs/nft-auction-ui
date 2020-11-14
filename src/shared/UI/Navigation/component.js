import RouteLink from '../RouteLink/component';
import { NavBar } from "../../styled"
import cuid from 'cuid';

const defaultRoutes = [
  {
    path: 'home',
    displayText: 'Home'
  },
  {
    path: 'about-us',
    displayText: 'About Us',
    as: 'about'
  }
];

const Navigation = ({ routes = defaultRoutes }) => (
  <NavBar>
      {routes.map(x => (
        <span key={cuid()}>
          <RouteLink {...x} />
        </span>
      ))}
  </NavBar>
);

export default Navigation;
