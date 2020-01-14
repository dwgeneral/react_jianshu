import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { TopicWrapper, TopicItem } from '../style'

class Topic extends PureComponent {
  componentDidMount(){
    this.props.getTopicList()
  }

  render(){
    const { topicList } = this.props
    return (
      <TopicWrapper>
        { 
          topicList.map((item)=>(
            <TopicItem key={item.id}>
              <img className="topic-pic" alt={item.title} src={item.src} />
              {item.title}
            </TopicItem>)
          )
        }
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    topicList: state.getIn(['homeReducer', 'topicList'])
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getTopicList(){
      dispatch(actionCreators.getTopicListAction())  
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic)