import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { HeaderWraper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style'
import { actionCreators } from './store'

const Header = (props) => {
  const { focused, handleSearchFocus } = props
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
          <CSSTransition in={focused} timeout={200} classNames="slide">
            <NavSearch
              className={focused ? 'focused' : ''}
              onFocus={() => handleSearchFocus(true)}
              onBlur={() => handleSearchFocus(false)}
            />
          </CSSTransition>
          <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe62d;</i>
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

const mapStateToProps = (state) => {
  return {
    focused: state.headerReducer.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchFocus(value){
      dispatch(actionCreators.focusSearchAction(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)