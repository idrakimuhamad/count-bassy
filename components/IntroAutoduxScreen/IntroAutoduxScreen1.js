import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/styles/hljs'

export default () => (
  <div>
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered has-text-grey-dark">
          <h1 className="title">Redux</h1>
          <h2 className="subtitle">Actions</h2>
        </div>
        <div className="container">
          <div className="content">
            <p>
              Actions are payloads of information that send data from your application to your
              store. They are the only source of information for the store. You send them to the
              store using <code>store.dispatch()</code>
            </p>
          </div>
          <div className="box">
            <SyntaxHighlighter language="javascript" style={github}>
              {`const ADD_TODO = 'ADD_TODO'`}
            </SyntaxHighlighter>
          </div>
          <div className="box">
            <SyntaxHighlighter language="javascript" style={github}>
              {`{
  type: ADD_TODO,
  text: 'Build my first Redux app'
}`}
            </SyntaxHighlighter>
          </div>
          <div className="box">
            <SyntaxHighlighter language="javascript" style={github}>
              {`import { ADD_TODO, REMOVE_TODO } from '../actionTypes'`}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </section>

    <style jsx>{``}</style>
  </div>
)
