import './App.css';
import React,{useState} from 'react';

function App() {
  return (
    <div className="container">
     <h1>world</h1>
     <FuncComp initNumber={2}></FuncComp>
     <ClassComp initNumber={2}></ClassComp>
    </div>
  );
}

function FuncComp(props){
  let numberState = useState(props.initNumber);
  let number = numberState[0]; 
  let setNumber = numberState[1];
   
  let dateState = useState((new Date()).toString());
  let date = dateState[0]; 
  let setDate = dateState[1];
  return(
    <div className='container'>
      <h2>funcion style component</h2>
      <p>Number:{number}</p>
      <p>Date:{date}</p>
      <input type='button' value="random" onClick={
    function(){
      setNumber(Math.random());
    }
  }></input>
   <input type='button' value="Date" onClick={
    function(){
      setDate((new Date()).toString());
    }
  }></input>
    </div>
  );
}
const classStyle = 'color:red';
class ClassComp extends React.Component{
  state = {
    number:this.props.initNumber,
    date: (new Date()).toString()
  }
  componentWillUnmount(){
      console.log("%cclass=> componentWillUnmount ",classStyle);
  }
  componentDidMount(){
    console.log("%cclass=> componentDidMount ",classStyle);
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log("%cclass=>shouldComponentUpdate",classStyle);
    return true;
  }
  render(){
    console.log("%cclass => render", classStyle);
    return(
    <div className='container'> 
  <h2> class style component</h2>
  <p>Number:{this.state.number}</p>
  <p>Date:{this.state.date}</p>
  <input type='button' value="random" onClick={
    function(){
      this.setState({number:Math.random()})
    }.bind(this)
  }></input>
  <input type='button' value="data" onClick={
    function(){
      this.setState({date:(new Date()).toString()})
    }.bind(this)
  }></input>
    </div>
    )
  }
}

export default App;
