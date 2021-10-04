import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import About from './Component/About/About';
import Service from './Component/Service/Service'
import NotFound from './Component/NotFound/NotFound';
import Donate from './Component/Donate/Donate';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header></Header>
            <Switch>
              <Route path='/home'>
                  <Home></Home>
              </Route>
              <Route exact path='/'>
                <Home></Home>
              </Route>
              <Route path='/about'>
              <About></About>
              </Route>
              <Route path='/service'>
                <Service></Service>
              </Route>
              <Route path='/donate'>
                <Donate></Donate>
              </Route>
              <Route path='*'>
                <NotFound></NotFound>
              </Route>
            </Switch>
            <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
