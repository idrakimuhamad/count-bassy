import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/styles/hljs'

export default () => (
  <div>
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered has-text-grey-dark">
          <h1 className="title">Unit Test</h1>
        </div>
        <div className="container">
          <div className="content">
            <p>
              A unit as the smallest testable part of an application
            </p>
            <p>Unit tests are short code fragments during the development process, which forms the basis for component testing</p>
            <p>Each test case is independent from the others, and substitution may be use to assist testing in isolation</p>
          </div>
        </div>
      </div>
    </section>

    <style jsx>{``}</style>
  </div>
)
