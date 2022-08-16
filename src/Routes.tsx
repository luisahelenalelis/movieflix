import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Movies from 'pages/Movies';
import Auth from 'pages/Home';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Auth />
      </Route>
      <Route path="/movies">
        <Movies />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;