import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Movies from 'pages/SelectMovie';
import Auth from 'pages/Home';
import Details from 'pages/MovieDetails';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Auth />
      </Route>
      <Route path="/movies" exact>
        <Movies />
      </Route>
      <Route path="/movies/:movieId">
        <Details />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;