import React, { Component } from 'react'
import Router from 'next/router'
import ArrowKeysReact from 'arrow-keys-react'
import Head from '../components/head'
import Demo from '../components/layout/demo'

export default class TddIntro extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentScreen: 0,
      screens: []
    }

    ArrowKeysReact.config({
      left: () => {
        Router.push({
          pathname: '/tdd-demo'
        })
      },
      right: () => {
        Router.push({
          pathname: '/credit'
        })
      },
      up: () => {},
      down: () => {}
    })
  }

  componentDidMount() {
    this.focusOnDiv()
  }

  focusOnDiv = () => {
    if (this.element) this.element.focus()
  }

  handleClick = () => alert('Kony is king')

  render() {
    return (
      <div {...ArrowKeysReact.events} ref={intro => (this.element = intro)} tabIndex="1">
        <section className="hero is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered has-text-grey-dark">
              <h1 className="title">Demo</h1>
              <h2 className="subtitle">Component Test</h2>
            </div>
            <div className="container">
              <div className="content">
                <Demo color="white" backgroundColor="blue" handleClick={this.handleClick} text="Hello"></Demo>
              </div>
            </div>
          </div>
        </section>

        <style jsx>{``}</style>
      </div>
    )
  }
}
