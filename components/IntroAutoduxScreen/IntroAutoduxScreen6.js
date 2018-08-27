import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/styles/hljs'

export default () => (
  <div>
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered has-text-grey-dark">
          <h1 className="title">Autodux</h1>
          <h2 className="subtitle">Redux on autopilot</h2>
          <small>https://github.com/ericelliott/autodux</small>
        </div>
        <div className="container">
          <div className="box">
            <p>From this:</p>
            <SyntaxHighlighter language="javascript" style={github}>
              {`const reducer = (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        return state
    }
  }

  const actionTypes = { ... }
  const actions = { ... }`}
            </SyntaxHighlighter>
          </div>
          <div className="box">
            <p>To this:</p>

            <SyntaxHighlighter language="javascript" style={github}>
              {`const counter = autodux({
  slice: 'counter',
  initial: 0,
  actions: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1
  }
});`}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </section>

    <style jsx>{``}</style>
  </div>
)
