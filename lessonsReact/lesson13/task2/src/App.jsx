import React from 'react';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';

import Products from './Products';
import Home from './Home.jsx';

const App = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation__item">
            <Link to="/products">Products</Link>
          </li>
        </ul>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products" component={Products}></Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
