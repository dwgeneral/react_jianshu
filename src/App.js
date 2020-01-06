import React, { Component } from 'react';
import store from './store'
import { Provider } from 'react-redux'
import Header from './common/header/index'
import { GlobalResetStyle } from './style';
import { GlobalIconFont } from './assets/iconfont/iconfont'

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <GlobalResetStyle />
          <GlobalIconFont />
          <Header />
        </div>
      </Provider>
    )
  }
}

export default App
