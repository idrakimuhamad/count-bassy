import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

export default () => (
  <div>
    <section className="hero is-primary is-bold is-fullheight">
      <div className="hero-body ">
        <div className="container has-text-centered">
          <h1 className="title">Getting started with Autodux and Test Driven Development</h1>
          <h2 className="subtitle">Two unrelated topics...</h2>
          <Link prefetch href="/intro-autodux">
            <a className="button is-large has-background-light has-text-primary">Let's start</a>
          </Link>
        </div>
      </div>
    </section>

    <style jsx>{``}</style>
  </div>
)
