import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './style/index.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Header from './components/header';
import Misssions from './pages/Missions';
import Profile from './pages/Profile';
import Rockets from './pages/Rockets';
import store from './redux/configureStore';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/missions">
            <Misssions />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route exact path="/">
            <Rockets />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
