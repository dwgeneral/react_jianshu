import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { RecommendWrapper, RecommendItem } from '../style'

class Recommend extends PureComponent {
  componentDidMount(){
    this.props.getRecommendList()
  }
  render(){
    const { recommendList } = this.props
    return (
      <RecommendWrapper>
        { 
          recommendList.map((item)=>{
            return(
              <RecommendItem key={item.id} imageUrl={item.imageUrl} />
            )
          })
        }
      </RecommendWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  recommendList: state.getIn(["homeReducer", "recommendList"])
})

 const mapDispatchToProps = (dispatch) => ({
   getRecommendList(){
     dispatch(actionCreators.getRecommendListAction())
   }
 })

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)