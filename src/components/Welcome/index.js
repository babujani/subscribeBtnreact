import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {status: true}

  action = () => {
    this.setState(prevState => ({status: !prevState.status}))
  }

  action2 = () => {
    this.setState(prevState => ({status: !prevState.status}))
  }

  render() {
    const {status} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        {status && (
          <button
            onClick={this.action}
            className="subscribe-button"
            type="button"
          >
            Subscribe
          </button>
        )}
        {!status && (
          <button
            onClick={this.action2}
            className="subscribe-button"
            type="button"
          >
            Subscribed
          </button>
        )}
      </div>
    )
  }
}
export default Welcome
