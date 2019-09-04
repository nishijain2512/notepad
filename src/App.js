import React from 'react';
import {Route, Redirect, Switch, withRouter} from 'react-router-dom';
import DisplayNote from './components/DisplayNote/DisplayNote';
import EditNote from './containers/Note/EditNote/EditNote';
import Lists from './containers/Lists/Lists';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/DisplayNote" component={DisplayNote}/>
          <Route path="/EditNote" component={EditNote}/>
          <Route path="/NewNote" component={EditNote}/>
          <Route path="/Lists" component={Lists}/>
          <Route path="/" exact component={Lists}/>
          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
} 

export default withRouter(App);
