import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/styles/hljs'

export default () => (
  <div>
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered has-text-grey-dark">
          <h1 className="title">Redux</h1>
          <h2 className="subtitle">Boilerplate overload</h2>
        </div>
        <div className="container">
          <div className="box">
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
        </div>
      </div>
    </section>

    <style jsx>{``}</style>
  </div>
)
