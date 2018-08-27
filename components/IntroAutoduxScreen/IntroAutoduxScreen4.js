import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/styles/hljs'

export default () => (
  <div>
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered has-text-grey-dark">
          <h1 className="title">Redux</h1>
          <h2 className="subtitle">Store</h2>
        </div>
        <div className="container">
          <div className="content">
            <p>The Store is the object that brings reducers and action together.</p>
            <ul>
              <li>Holds application state;</li>
              <li>Allows access to state via getState();</li>
              <li>Allows state to be updated via dispatch(action);</li>
              <li>Registers listeners via subscribe(listener);</li>
              <li>
                Handles unregistering of listeners via the function returned by subscribe(listener).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <style jsx>{``}</style>
  </div>
)
