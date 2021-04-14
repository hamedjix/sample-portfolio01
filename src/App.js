//Import Components
import Nav from './components/Nav';
//import Pages
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUS';
import OurWork from './pages/OurWork';
import MovieDetails from './pages/MovieDetail';

//import Style
import GlobalStyle from './components/GlobalStyle';
import { Route, Switch } from 'react-router';
//Movie State
import MovieState from './movieState';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path='/'>
          <AboutUs />
        </Route>
        <Route path='/contact'>
          <ContactUs />
        </Route>
        <Route exact path='/work'>
          <OurWork />
        </Route>
        <Route path='/work/:id'>
          <MovieDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
