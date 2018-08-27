export default (props) => (
  <a href={props.href} style={{
    color: props.color,
    backgroundColor: props.backgroundColor
  }} onClick={props.handleClick} className="button">
    {props.text}
  </a>
)
