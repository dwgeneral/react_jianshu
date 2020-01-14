import React, { PureComponent } from 'react'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'

class Home extends PureComponent {
  handleScrollTop(){
    window.scrollTo(0, 0)
  }

  render(){
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt="banner" className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4866/3867aec8b10cb452ef5ff4448f59c1b335b6af54.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        <BackTop onClick={this.handleScrollTop}>顶部</BackTop>
      </HomeWrapper>
    )
  }
}

export default Home