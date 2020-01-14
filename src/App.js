import React, { Fragment } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'
import Header from './common/header/index'
import Home from './pages/home'
import Detail from './pages/detail'
import { GlobalResetStyle } from './style';
import { GlobalIconFont } from './assets/iconfont/iconfont'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GlobalResetStyle />
        <GlobalIconFont />
        <Header />
        <BrowserRouter>
          <Fragment>
            <Route path='/' exact component={Home}></Route> 
            <Route path='/detail' exact component={Detail}></Route> 
          </Fragment> 
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
