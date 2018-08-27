import React, { Component } from 'react'
import Router from 'next/router'
import ArrowKeysReact from 'arrow-keys-react'
import {
  IntroTddScreen1,
  IntroTddScreen2,
  IntroTddScreen3,
  IntroTddScreen4
} from '../components/Tdd'
import Head from '../components/head'
import Nav from '../components/nav'

export default class NextSession extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentScreen: 0,
      screens: []
    }

    ArrowKeysReact.config({
      left: () => {
        Router.push({
          pathname: '/credit'
        })
      },
      right: () => {},
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
              <h1 className="title">Next</h1>
            </div>
            <div className="container">
              <div className="content">
                <ul>
                  <li>
                    <p>Developing isolated component with Storybook</p>
                  </li>
                  <li>
                    <p>Getting started with Next.js and Now</p>
                  </li>
                  <li>
                    <p>Build a <em>static</em> Progressive Web App with Gatsby</p>
                  </li>
                  <li><p>...</p></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <style jsx>{``}</style>
      </div>
    )
  }
}
