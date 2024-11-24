import Body from "./components/Body"
import Nav from "./components/Nav"
import { BrowserRouter as Router, Route, Routes, data } from "react-router-dom";
import UploadPage from "./components/UplaodPage"
import LandingPage from "./components/LandingPage";
import store from "./store";
import { Provider } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import Capsules from "./components/Capsules";
import Capsule from "./components/Capsule";

function App() {

  return (
    

    <Router>
      <Routes>
   
   <Route path="/" element={<LandingPage />}/>
      
   <Route path="/upload" element={<UploadPage />}/>

   <Route path="/capsules" element={<Capsules />}/>

   <Route path="/capsule/:id" element={<Capsule />}/>
      
      </Routes>
    </Router>

  )
}

export default App
