// Write your code here
import {Component} from 'react'
import './index.css'
class LightDarkMode extends Component {
  state = {
    color: 'Light',
    isDark: true,
    boxStyle: {
      border: 'none',
      backgroundColor: 'black',
      position: 'absolute',
      left: '40%',
      top: '30%',
      color: 'white',
      textAlign: 'center',
    },
  }

  onChanging = () => {
    this.setState(prevState => ({
      color: prevState.color === 'Light' ? 'Dark' : 'Light',
      isDark: !prevState.isDark,
      boxStyle: {
        ...prevState.boxStyle,
        backgroundColor: prevState.isDark ? 'white' : 'black',
        color: prevState.isDark ? 'black' : 'white',
      },
    }))
  }
  render() {
    const {color, boxStyle} = this.state
    return (
      <div className="s">
        <h1 className="heading">Click to change Mode</h1>
        <button type="btn" onClick={this.onChanging}>
          {`${color} Mode`}
        </button>
      </div>
    )
  }
}
export default LightDarkMode
