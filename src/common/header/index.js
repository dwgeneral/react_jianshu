import React, { Component } from 'react'
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

class Header extends Component {

  showHotSearch() {
    const { focused, list, page, totalPage, handleMouseEnter, mouseIn, handleSwitchClick } = this.props
    const pageList = []
    const perPage = actionCreators.perPage
    for (let index = (page - 1) * perPage; index < page * perPage; index++) {
      const jsList = list.toJS()
      if (jsList[index]) {
        pageList.push(<SearchInfoItem key={jsList[index]}>{jsList[index]}</SearchInfoItem>)
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={() => handleMouseEnter(true)} onMouseLeave={() => handleMouseEnter(false)}>
          <SearchInfoTitle>
            热门搜索
          <SearchInfoSwitch onClick={() => handleSwitchClick(page, totalPage)}>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render(){
    const { focused, handleSearchFocus } = this.props
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
            { this.showHotSearch() }
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

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['headerReducer', 'focused']),
    list: state.getIn(['headerReducer', 'list']),
    page: state.getIn(['headerReducer', 'page']),
    totalPage: state.getIn(['headerReducer', 'totalPage']),
    mouseIn: state.getIn(['headerReducer', 'mouseIn'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchFocus(value){
      dispatch(actionCreators.getHotSearch())
      dispatch(actionCreators.focusSearchAction(value))
    },
    handleMouseEnter(value){
      dispatch(actionCreators.enterMouseAction(value))
    },
    handleSwitchClick(page, totalPage){
      let value = 1
      if (page < totalPage) {
        value = page + 1
      }       
      dispatch(actionCreators.clickSwitchAction(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)