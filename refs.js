//allows you to surpass the normal dataflow scheme, as it also allows you to access DOM nodes

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
       key: value,
    }
    this.refName = React.createRef();
  }
  //example
  handleRef = () => {
    this.refName.current.focus(); //or
    this.refName.current.placeholder = 'button clicked';
    //...
  }

  render() {
    return (
      <div >
        <button onClick={this.handleRef}>Click Me</button>
        <form>
          <input type='text' placeholder='button is not clicked yet' ref={this.inputRef}></input>
        </form>
      </div>
    )
  }
}

export default (Home);