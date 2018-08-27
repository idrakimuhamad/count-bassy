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
              It’s one way to think through your requirements or design before your write your
              functional code (implying that TDD is both an important agile requirements and agile
              design technique)
            </p>
            <blockquote>
              “Many mistake an investment in quality as something that lengthens the development
              process. At Spotify, we know that shipping high-quality code enables speed of
              iteration.”
              <footer>- Nitzan Blouin, Director of Engineering at Spotify</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>

    <style jsx>{``}</style>
  </div>
)
