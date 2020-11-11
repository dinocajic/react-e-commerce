import React, { useEffect } from 'react';

import './App.css';
import Header from './components/Layout/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import Payment from './components/Payment/Payment';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {

  const [{}, dispatch] = useStateValue();

  // Run only once when the app component loads
  // As soon as the app loads, add the onAuthStateChanged listener
  // Whenever the authentication changes, it will give us the authenticated user
  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>> ', authUser);

      // If there was a user that logged in or if the user's logged in
      if ( authUser ) {
        
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    })
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />

        <Switch>
          <Route path='/' exact><Home /></Route>
          <Route path='/checkout'><Checkout /></Route>
          <Route path='/login'><Login /></Route>
          <Route path='/payment'><Payment /></Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
