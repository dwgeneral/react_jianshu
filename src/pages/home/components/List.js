import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { ListItem, ListInfo } from '../style'

class List extends PureComponent {
  componentDidMount(){
    this.props.getArticleList()
  }
  render(){
    const { articleList } = this.props
    return (
      <div>
        { 
          articleList.map((item)=>{
            return(
              <ListItem key={item.id}>
                <img alt={item.alt} className="pic" src={item.imageUrl} />
                <ListInfo>
                  <h3 className="title">{item.title}</h3>
                  <p>{item.desc}</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  articleList: state.getIn(['homeReducer', 'articleList'])
})

const mapDispatchToProps = (dispatch) => ({
  getArticleList(){
    dispatch(actionCreators.getArticleListAction())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List)