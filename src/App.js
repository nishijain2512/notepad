import React from 'react';
import {Route, Redirect, Switch, withRouter} from 'react-router-dom';
import ListPage from '../src/containers/listPage';
import DisplayNote from './components/displayNote';
import EditNote from './containers/EditNote';
import TopNav from '../src/components/topNav';
import DevMode from './components/devMode';

function App() {
  return (
    <div>
        <TopNav />
        <Switch>
          <Route path="/DisplayNote" component={DisplayNote}/>
          <Route path="/EditNote" component={EditNote}/>
          <Route path="/NewNote" component={EditNote}/>
          <Route path="/ListPage" component={ListPage}/>
          <Route path="/dev" component={DevMode}/>
          <Route path="/" exact component={ListPage}/>
          <Redirect to="/" />
        </Switch>
    </div>
  );
} 

export default withRouter(App);
