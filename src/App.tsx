import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Destination from "./pages/destination";
import Crew from "./pages/crew";
import Technology from "./pages/technology";


function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/destination" element={<Destination/>}/>
        <Route path="/crew" element={<Crew/>}/>
        <Route path="/technology" element={<Technology/>}/>

        {/* Unknown paths */}
        <Route path="*" element={<Navigate to={"/"}/>}/>
      </Routes>
    </Router>

)
}

export default App;
