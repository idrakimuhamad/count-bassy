import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/styles/hljs'

export default () => (
  <div>
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered has-text-grey-dark">
          <h1 className="title">Redux</h1>
          <h2 className="subtitle">Action Creators</h2>
        </div>
        <div className="container">
          <div className="content">Action creators are functions that create actions.</div>
          <div className="box">
            <h4>Traditional Flux</h4>
            <SyntaxHighlighter language="javascript" style={github}>
              {`function addTodoWithDispatch(text) {
  const action = {
    type: ADD_TODO,
    text
  }

  dispatch(action)
}`}
            </SyntaxHighlighter>
          </div>
          <div className="box">
            <SyntaxHighlighter language="javascript" style={github}>{`function addTodo(text) {
    return {
      type: ADD_TODO,
      text
    }
  }

  // dispatch the action
  dispatch(addTodo(text))
`}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    </section>

    <style jsx>{``}</style>
  </div>
)
