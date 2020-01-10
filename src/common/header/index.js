import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import {
  HeaderWraper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem
} from './style'

const showHotSearch = (flag, list) => {
  if (flag) {
    return (
      <SearchInfo>
        <SearchInfoTitle>
          热门搜索
                <SearchInfoSwitch>换一批</SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          { 
            list.map((item)=>{
              return(<SearchInfoItem key={item}>{item}</SearchInfoItem>)
            })
          }
        </SearchInfoList>
      </SearchInfo>
    )
  } else {
    return null
  }
}

const Header = (props) => {
  const { focused, handleSearchFocus, list } = props
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
          { showHotSearch(focused, list) }
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
    focused: state.getIn(['headerReducer', 'focused']),
    list: state.getIn(['headerReducer', 'list'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchFocus(value){
      dispatch(actionCreators.getHotSearch())
      dispatch(actionCreators.focusSearchAction(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)