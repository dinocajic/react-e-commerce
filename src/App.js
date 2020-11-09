import './App.css';
import Header from './components/layout/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <Switch>
          <Route path='/' exact><Home /></Route>
          <Route path='/checkout'><Checkout /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
