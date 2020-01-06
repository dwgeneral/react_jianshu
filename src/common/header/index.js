import React, { Component } from 'react'
import { HeaderWraper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style'

class Header extends Component {
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
            <NavSearch />
            <i className="iconfont">&#xe62d;</i>
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
}

export default Header