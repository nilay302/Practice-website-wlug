import './App.css';
// import Sidebar from './Components/Sidebar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Components/HomePage/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import SidebarLayout from './Components/SidebarLayout';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<SidebarLayout/>}>
          <Route exact path='/' element={<Home/>} />
          </Route>
        </Routes>
        <Routes>
          <Route exact path = "/login" element={<Login/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
