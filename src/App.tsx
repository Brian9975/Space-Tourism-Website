import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Destination from "./pages/destination";
import Crew from "./pages/crew";
import Technology from "./pages/technology";
import Layout from "./components/layout";


function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home/></Layout>}/>
        <Route path="/destination" element={<Layout><Destination/></Layout>}/>
        <Route path="/crew" element={<Layout><Crew/></Layout>}/>
        <Route path="/technology" element={<Layout><Technology/></Layout>}/>

        {/* Unknown paths */}
        <Route path="*" element={<Navigate to={"/"}/>}/>
      </Routes>
    </Router>

)
}

export default App;
