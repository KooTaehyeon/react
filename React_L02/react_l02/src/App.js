import './App.css';
import React,{useState,useEffect} from 'react';

function App() {
  let [funcShow, setFuncShow ]=useState(true)
  let [classShow, setClassShow ]=useState(true)
  return (
    <div className="container">
     <h1>world</h1>
     <input type='button' value="remove func" onClick={function(){
       setFuncShow(false)
     }} ></input>
     <input type='button' value="remove class" onClick={function(){
       setClassShow(false)
     }} ></input>
    {funcShow ? <FuncComp initNumber={2}></FuncComp> : null}
     {classShow?<ClassComp initNumber={2}></ClassComp>:null}
    </div>
  );
}

let funStyle = 'color:blue';
let funId= 0;
function FuncComp(props){
  let numberState = useState(props.initNumber);
  let number = numberState[0]; 
  let setNumber = numberState[1];
   
  // let dateState = useState((new Date()).toString());
  // let date = dateState[0]; 
  // let setDate = dateState[1];

  let [_date,setDate] = useState((new Date()).toString());

  useEffect(function(){
    console.log('%cfunc=> useEffect (componentDidMount '+(++funId),funStyle);
    document.title =number; 
    return function(){
      console.log('%cfunc=> useEffect  return (componentWillUnMount) '+(++funId),funStyle);
    }
  },[]);

  useEffect(function(){
    console.log('%cfunc=> useEffect (componentDidMount& componentDidUpdate) '+(++funId),funStyle);
    document.title =number; 
    return function(){
      console.log('%cfunc=> useEffect number return (componentDidMount& componentDidUpdate) '+(++funId),funStyle);
    }
  },[number]);
  useEffect(function(){
    console.log('%cfunc=> useEffect _date (componentDidMount& componentDidUpdate) '+(++funId),funStyle);
    document.title =_date; 
    return function(){
      console.log('%cfunc=> useEffect date return (componentDidMount& componentDidUpdate) '+(++funId),funStyle);
    }
  },[_date]);


  console.log('%cfunc=> render'+(++funId),funStyle);
  return(
    <div className='container'>
      <h2>funcion style component</h2>
      <p>Number:{number}</p>
      <p>Date:{_date}</p>
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
  componentWillMount() {
    console.log("%cclass=> componentWillUnmount ",classStyle);
  }
  componentDidMount(){
    console.log("%cclass=> componentDidMount ",classStyle);
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log("%cclass=>shouldComponentUpdate",classStyle);
    return true;
  }
  componentWillUpdate(nextProps,nextState){
    console.log("%cclass=>componentWillUpdate",classStyle);
  
  }
  componentDidUpdate(nextProps,nextState){
    console.log("%cclass=>componentDidUpdate",classStyle);

  }
  componentWillUnmount(nextProps,nextState){
    console.log("%cclass=>componentWillUnmount",classStyle);

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
