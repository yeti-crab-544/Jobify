import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllApplications from './components/AllApplications';

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
            {/* <Route
              exact
              path='/addPlant'
              component={AddApplication}
              />         */}
            </Switch>
      </main>
    </div>
  )
}

export default App;