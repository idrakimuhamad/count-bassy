import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/styles/hljs'

export default () => (
  <div>
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered has-text-grey-dark">
          <h1 className="title">Redux</h1>
          <h2 className="subtitle">Reducers</h2>
        </div>
        <div className="container">
          <div className="content">
            Reducers specify how the application's state changes in response to actions sent to the
            store.
          </div>
          <div className="box">
            <SyntaxHighlighter language="javascript" style={github}>
              {`import {
    ADD_TODO,
    ...
  } from './actions'

  function todos(state = [], action) {
    switch (action.type) {
      case ADD_TODO:
        return [
          ...state,
          {
            text: action.text,
            completed: false
          }
        ]
      // ...
    }
  }`}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </section>

    <style jsx>{``}</style>
  </div>
)
