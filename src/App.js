import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Amplify
import Amplify from "aws-amplify";

// Pages
import Home from "./pages/Home"
import Error from "./pages/Error";
import Produss from "./pages/Produss";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProdusDetails from "./pages/ProdusDetails";
import Admin from './pages/Admin';

// Components
import Layout from "./components/Layout"

// Amplify Configurations
import awsExports from "./aws-exports";
Amplify.configure(awsExports);


const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/produse">
            <Produss />
          </Route>
          <Route
            path="/produse/:id"
            children={<ProdusDetails></ProdusDetails>}>
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
