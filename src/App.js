import React from 'react';
import { Provider } from 'react-redux'
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
      </div>
    </Provider>
  );
}

export default App;
