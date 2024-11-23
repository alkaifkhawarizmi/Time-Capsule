import Body from "./components/Body"
import Nav from "./components/Nav"
import { BrowserRouter as Router, Route, Routes, data } from "react-router-dom";
import UploadPage from "./components/UplaodPage"
import LandingPage from "./components/LandingPage";
import store from "./store";
import { Provider } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  return (
    

    <Router>
      <Routes>
   
   <Route path="/" element={<LandingPage />}/>
      
   <Route path="/upload" element={<UploadPage />}/>
      
      </Routes>
    </Router>

  )
}

export default App
