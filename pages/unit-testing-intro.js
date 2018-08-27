import React, { Component } from 'react'
import Router from 'next/router'
import ArrowKeysReact from 'arrow-keys-react'
import {
  UnitTestingIntro1,
  UnitTestingIntro2,
  UnitTestingIntro3,
  UnitTestingIntro4
} from '../components/UnitTestingScreen'
import Head from '../components/head'
import Nav from '../components/nav'

export default class UnitTestingIntro extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentScreen: 0,
      screens: [
        <UnitTestingIntro1 />,
        <UnitTestingIntro2 />,
        <UnitTestingIntro3 />,
        <UnitTestingIntro4 />
      ]
    }

    ArrowKeysReact.config({
      left: () => {
        Router.push({
          pathname: '/intro-autodux'
        })
      },
      right: () => {
        Router.push({
          pathname: '/tdd-intro'
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
