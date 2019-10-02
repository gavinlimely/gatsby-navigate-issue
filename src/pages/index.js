import React from "react"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"

class IndexPage extends React.Component {

  componentDidUpdate(prevProps, prevState, snapshot) {
    // I would expect state to be the new value, it doesn't seem to update when linking to the same page.
    // It does however work when using gatsby develop, just not in production mode.
    // Manually refresh the page and this.props.location.state has the correct value
    console.log(this.props.location.state)
  }

  handleClick(e) {
    e.preventDefault()
    navigate("/", {
      state: {
        random: this.getRandomNumber(),
      },
    })
  }

  outputRandom() {
    if (this.props.location.state && this.props.location.state.random) {
      return <p>Random number is: {this.props.location.state.random}</p>
    } else {
      return <p>No random number in state.</p>
    }
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 1000)
  }

  render() {
    return (
      <Layout>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image/>
        </div>
        {this.outputRandom()}
        <a href="#" onClick={this.handleClick.bind(this)}>Update Random Number</a>
      </Layout>
    )
  }
}

export default IndexPage
