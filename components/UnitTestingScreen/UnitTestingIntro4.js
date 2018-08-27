import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/styles/hljs'

export default () => (
  <div>
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered has-text-grey-dark">
          <h1 className="title">Unit Test</h1>
          <h2 className="subtitle">Frameworks</h2>
        </div>
        <div className="container">
          <div className="content">
            <h4>Jest</h4>
            <p>
              Jest is a JavaScript test runner maintained by Facebook. Included performance, mocking, snapshot, code coverage, sandbox.
            </p>
          </div>
          <div className="content">
            <h4>Enzyme</h4>
            <p>
              Enzyme is a library that wraps packages like React TestUtils, JSDOM and CheerIO to create a simpler interface for writing unit tests (work with shallow rendering).
            </p>
          </div>
        </div>
      </div>
    </section>

    <style jsx>{``}</style>
  </div>
)
