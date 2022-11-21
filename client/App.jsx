import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllApplications from './components/AllApplications';
import AddApplication from './components/AddApplication';
import ApplicationStats from './components/ApplicationStats';

import './styles.scss';

const App = () => {
  //add functionality here

  return (
    <div className='router'>
      <main>
        <Switch>
          <Route
            exact
            path='/'
            component={AllApplications}
            />
            <Route
              exact
              path='/addApplication'
              component={AddApplication}
              />    
              <Route
              exact
              path='/ApplicationStats'
              component={ApplicationStats}
              />     
            </Switch>
      </main>
    </div>
  )
}

export default App;