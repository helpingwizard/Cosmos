import Signup from "./Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appbar from "./Appbar";
import Signin from "./Signin";




function App() {
  return (
      <div style={{width:"100vw" ,
          height:"100vh",
          backgroundColor: "#C4DFDF" }}>
          

              <Router>
                <Appbar/>
                <Routes>
                    
                  <Route path={"/signin"} element={<Signin/>}/> 
                  <Route path={"/signup"} element={<Signup/>}/>
                </Routes>
              </Router>
              
          
  
  
      </div>    
  );

  
}


export default App;