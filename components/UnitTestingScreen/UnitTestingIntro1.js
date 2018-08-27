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
            <blockquote>
              “Unit testing is a software testing method by which individual units of source code, sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures, are tested to determine whether they are fit for use”
              <footer>- Kolawa, Adam; Huizinga, Dorota (2007), <em>Automated Defect Prevention: Best Practices in Software Management</em></footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>

    <style jsx>{``}</style>
  </div>
)
