import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/styles/hljs'

export default () => (
  <div>
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered has-text-grey-dark">
          <h1 className="title">Unit Test</h1>
          <h2 className="subtitle">For front end (specifically React)</h2>
        </div>
        <div className="container">
          <div className="content">
            <ol>
              <li>
                Testing basic component rendering
              </li>
              <li>
                Testing props
              </li>
              <li>
                Testing events
              </li>
              <li>
                Testing event handlers
              </li>
              <li>
                Others (Redux, saga)
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <style jsx>{``}</style>
  </div>
)
