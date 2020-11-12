import React, { useEffect } from 'react';

import './App.css';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import Payment from './components/Payment/Payment';
import Orders from './components/Orders/Orders';
import Navigation from './components/Layout/Navigation/Navigation';
import Footer from './components/Layout/Footer/Footer';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import 'bootstrap/dist/css/bootstrap.min.css';

const promise = loadStripe('pk_test_51HmLp7JbOxSALtT8cS0NrDJChCKsUG4moKuql2blqcbU4ntB6hrolf4wgRguSPGZVf6DR1ierl4xarr8UaEIL0dp00fHqhf4S6');

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
        <Navigation />

        <Switch>
          <Route path='/' exact><Home /></Route>
          <Route path='/checkout'><Checkout /></Route>
          <Route path='/login'><Login /></Route>
          <Route path='/payment'>
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/orders'><Orders /></Route>
        </Switch>

        <Footer />

        <link
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
        
      </div>
    </Router>
  );
}

export default App;
