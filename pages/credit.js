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

export default class Credit extends Component {
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
          pathname: '/next-session'
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
              <h1 className="title">Credit</h1>
            </div>
            <div className="container">
              <div className="content">
                <ul>
                  <li>
                    <a href="http://www.jamesshore.com/Blog/Red-Green-Refactor.html">
                      James Shore: Red-Green-Refactor
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/ericelliott/autodux">Eric Elliot: autodux</a>
                  </li>
                  <li>
                    <a href="https://news.codecademy.com/test-driven-development/">
                      Codeacademy: Why Use Test-Driven Development?
                    </a>
                  </li>
                  <li>
                    <a href="https://medium.com/front-end-hacking/autodux-is-awesome-lets-tdd-code-a-todo-list-duck-b906e28c0764">
                      Yazeed Bzadough: Autodux Is Awesome: Let’s TDD Code a Todo List Duck
                    </a>
                  </li>
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
