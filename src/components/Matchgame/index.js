import Navbar from '../Navbar'
import Tablist from '../Tablist'
import TabItem from '../TabItem'
import RandomImage from '../RandomImage'
import './index.css'
import {Component} from 'react'

class Matchgame extends Component {
  state = {score: 0, tabid: 'FRUIT', random: 0}
  onChangeTab = id => {
    this.setState({tabid: id})
  }
  matchImage = id => {
    const {imagesList} = this.props
    const {random} = this.state
    if (id === imagesList[random].id) {
      const rand = this.randomGenerator()
      this.setState(prevState => ({random: rand, score: prevState.score + 1}))
      console.log(rand)
    }
  }
  randomGenerator = () => {
    const {imagesList} = this.props
    const length = imagesList.length
    const randomValue = Math.floor(Math.random() * length)
    return randomValue
  }
  render() {
    const {tabsList, imagesList} = this.props
    const {tabid, random,score} = this.state
    const filteredList = imagesList.filter(each => each.category === tabid)
    return (
      <div className="container2">
        <Navbar score={score} />
        <div className="center">
          <RandomImage each={imagesList[random]} />
        </div>
        <ul className="container1">
          {tabsList.map(each => (
            <Tablist
              onChangeTab={this.onChangeTab}
              key={each.tabId}
              each={each}
            />
          ))}
        </ul>
        <ul className="container3">
          {filteredList.map(each => (
            <TabItem key={each.id} each={each} matchImage={this.matchImage} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Matchgame
