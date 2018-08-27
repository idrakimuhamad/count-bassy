import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/styles/hljs'

export default () => (
  <div>
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered has-text-grey-dark">
          <h1 className="title">TDD</h1>
          <h2 className="subtitle">Test-first development</h2>
        </div>
        <div className="container">
          <div className="content">
            <p>
              Writing a test before you write just enough production code to fulfill that test and
              refactoring
            </p>
            <blockquote>
              “If you’re doing test-driven development well, you’ll never write comments in your
              code because your tests are a form of documentation for how your program should work,”
              <footer>- Alex Clark, Codecademy</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>

    <style jsx>{``}</style>
  </div>
)
