import React, {useEffect,useState} from 'react';


function Hello(){
  useEffect(()=>{
    console.log("hi");
    return ()=>{
      console.log("bye");
    }
  },[])
  return <h1>Hello 굿</h1>
}


function App(){
  const [showing,setShowing] = useState(false);
  const onClick = ()=> setShowing((prev)=> !prev);
  return(
    <div>
      {showing? <Hello />:null}
      <button onClick={onClick}>{showing ? "Hide":"Show"}</button>
    </div>
  );
}

export default App;
