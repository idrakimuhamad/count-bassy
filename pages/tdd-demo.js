import React, { Component } from 'react'
import Router from 'next/router'
import ArrowKeysReact from 'arrow-keys-react'
import Head from '../components/head'
import Nav from '../components/nav'

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
          pathname: '/tdd-intro'
        })
      },
      right: () => {
        Router.push({
          pathname: '/component-demo'
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

  render() {
    return (
      <div {...ArrowKeysReact.events} ref={intro => (this.element = intro)} tabIndex="1">
        <section className="hero is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered has-text-grey-dark">
              <h1 className="title">Demo</h1>
              <h2 className="subtitle">Live coding</h2>
            </div>
            <div className="container">
              <div className="content">
                <p>Let's TDD a Todo Redux</p>
                <p>What we need before we can start:</p>
                <p>
                  <code>npm install jest enzyme enzyme-adapter-react-16 autodux</code>
                </p>
              </div>
            </div>
          </div>
        </section>

        <style jsx>{``}</style>
      </div>
    )
  }
}
