import './App.css';
import Header from './components/Layout/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <Switch>
          <Route path='/' exact><Home /></Route>
          <Route path='/checkout'><Checkout /></Route>
          <Route path='/login'><Login /></Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
