import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchMarinas from './pages/SearchMarinas';
// import NavTabs from './components/NavTabs';

function App() {
  return (
    <Router>
      <>
      
      <Switch>
        <Route exact path='/' component={SearchMarinas} />
        <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
      </Switch>
      </>
    </Router>
  );
}

export default App;
