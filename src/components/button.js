import React, { Component } from 'react'
import { navigate } from 'gatsby'

const MAX = 10;
const MIN = 0;

class FateButton extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log("I've been clicked")
    const random = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
    console.log(`random: ${random}`)
    random % 2 ? navigate('/naughty') : navigate('/nice')
  }

  render() {
    return (
        <button onClick={this.handleClick}>
          Click me
        </button>
    )
  }
}

export default FateButton;