import React, { Component } from 'react'
import Router from 'next/router'
import ArrowKeysReact from 'arrow-keys-react'
import {
  IntroAutoduxScreen1,
  IntroAutoduxScreen2,
  IntroAutoduxScreen3,
  IntroAutoduxScreen4,
  IntroAutoduxScreen5,
  IntroAutoduxScreen6
} from '../components/IntroAutoduxScreen'
import Head from '../components/head'
import Nav from '../components/nav'

export default class IntroAutodux extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentScreen: 0,
      screens: [
        <IntroAutoduxScreen1 />,
        <IntroAutoduxScreen2 />,
        <IntroAutoduxScreen3 />,
        <IntroAutoduxScreen4 />,
        <IntroAutoduxScreen5 />,
        <IntroAutoduxScreen6 />
      ]
    }

    ArrowKeysReact.config({
      left: () => {
        Router.push({
          pathname: '/'
        })
      },
      right: () => {
        Router.push({
          pathname: '/unit-testing-intro'
        })
      },
      up: () => {
        if (this.state.currentScreen > 0) {
          this.setState({
            currentScreen: this.state.currentScreen - 1
          })
        }
      },
      down: () => {
        if (this.state.currentScreen < this.state.screens.length - 1) {
          this.setState({
            currentScreen: this.state.currentScreen + 1
          })
        }
      }
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
        {this.state.screens.map((screen, index) => {
          if (index === this.state.currentScreen) {
            return <div key={index}>{screen}</div>
          }
        })}
      </div>
    )
  }
}
