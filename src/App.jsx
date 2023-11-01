import Signup from "./Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appbar from "./Appbar";
import Signin from "./Signin";
import AddCourse from "./AddCourse.jsx";
import Courses from "./Courses";
import Course from "./Course";

function App() {
  return (
      <div style={{width:"100vw" ,
          height:"100vh",
          backgroundColor: "#C4DFDF" }}>
          

              <Router>
                <Appbar/>
                <Routes>
                  <Route path={"/course/:courseId"} element={<Course />} />
                  
                  <Route path={"/courses"} element={<Courses />} />
                  <Route path={"/addcourse"} element={<AddCourse/>}/>
                  <Route path={"/signin"} element={<Signin/>}/> 
                  <Route path={"/signup"} element={<Signup/>}/>
                </Routes>
              </Router>
              
          
  
  
      </div>    
  );

  
}


export default App;