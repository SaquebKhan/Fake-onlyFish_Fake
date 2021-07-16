import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchMarinas from './pages/SearchMarinas';
// import Blog from '.pages/Blog/Blog';
// import Donation from '.pages/Donation/Donation';
// import Contact from '.pages/Contact/Contact';
import NavTabs from './components/NavTabs';

function App() {
  return (
    <Router>
      <>
      <NavTabs />
      <Switch>
        <Route exact path='/' component={SearchMarinas} />
        {/* <Route exact path='/Blog' component={Blog} />
        <Route exact path='/Dontation' component={Donation} />
        <Route exact path='/Contact' component={Contact} /> */}
        <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
      </Switch>
      </>
    </Router>
  );
}

export default App;
