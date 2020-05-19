import React from 'react';
import styled from 'styled-components';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/tags">标签</Link>
            </li>
            <li>
              <Link to="/money">记账</Link>
            </li>
            <li>
              <Link to="/statistics">统计</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/tags">
            <Tags />
          </Route>
          <Route path="/money">
            <Money />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Redirect exact from="/" to="/money" />
          <Route path="*"><NoMatch /></Route>
        </Switch>
      </div>
    </Router>
  );
}

function NoMatch() {
  return (
    <div>页面不存在</div>
  )
}

function Statistics() {
  return <h2>Statistics</h2>;
}

function Tags() {
  return <h2>Tags</h2>;
}

function Money() {
  return <h2>Money</h2>;
}

export default App;
