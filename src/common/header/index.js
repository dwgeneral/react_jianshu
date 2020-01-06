import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { HeaderWraper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style'

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      focused: false
    }
    this.handleSearchFocus = this.handleSearchFocus.bind(this)
  }

  render(){
    return (
      <HeaderWraper >
        <Logo />
        <Nav>
          <NavItem className="left">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登陆</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={this.state.focused} timeout={200} classNames="slide">
              <NavSearch 
                className={this.state.focused ? 'focused' : ''} 
                onFocus={()=>this.handleSearchFocus(true)}
                onBlur={()=>this.handleSearchFocus(false)}
              />
            </CSSTransition>
            <i className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe62d;</i>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="write">
            <i className="iconfont">&#xe615;</i>
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWraper>
    )
  }

  handleSearchFocus(value){
    this.setState({
      focused: value
    })
  }


}

export default Header