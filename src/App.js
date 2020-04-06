import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavPage from './pages/NavPage';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={NavPage} />
        <Route path="/:id" component={DetailsPage} />
      </Switch>
    </Router>
  );
}

export default App;
