import './App.css';
import Header from './components/layout/Header';
import Home from './components/Home/Home';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/' exact>
            <Header />
            <Home />
          </Route>

          <Route path='/checkout'>
            <Header />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
