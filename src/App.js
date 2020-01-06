import React from 'react';
import Header from './common/header/index'
import { GlobalResetStyle } from './style';
import { GlobalIconFont } from './assets/iconfont/iconfont'

function App() {
  return (
    <div className="App">
      <GlobalResetStyle />
      <GlobalIconFont />
      <Header />
    </div>
  );
}

export default App;
