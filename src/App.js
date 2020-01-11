import React, { Fragment } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'
import Header from './common/header/index'
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
            <Route path='/' exact render={()=><div>home</div>}></Route> 
            <Route path='/detail' exact render={()=><div>detail</div>}></Route> 
          </Fragment> 
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
