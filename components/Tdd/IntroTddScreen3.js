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
              The goal of software tests is to catch any errors before making that software widely
              available. By writing tests first, you’re laying out a detailed roadmap for what an
              ideal version of your code is supposed to accomplish. You let the program tell you
              what to write next.
            </p>
            <p>
              Combined with the use of CI/CD and automation, this process can be seamless because
              you're now depending on your tests that decide whether your code are breaking or not
            </p>
          </div>
        </div>
      </div>
    </section>

    <style jsx>{``}</style>
  </div>
)
