import {
  BrowserRouter as Router, Routes,
  Route,

} from "react-router-dom"
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import About  from "./routes/About";
import Navigation from './components/Navigation';
function App() {
 return(
 <Router basename={process.env.PUBLIC_URL}>
   <Navigation></Navigation>
   <Routes basename={process.env.PUBLIC_URL}>
     
   <Route path={`/`} exact={true} element={<Home />} ></Route>
   <Route path={"/about"} element={<About />} ></Route>
     <Route path="/movie/:id" element={<Detail />} ></Route>

   </Routes>
 </Router> 
 );
}

export default App;
