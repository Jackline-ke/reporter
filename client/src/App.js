import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componets/Navbar/Navbar';
import Home from './pages/Home';
import Single from './pages/Single/Single';
import Register from './pages/Register/Register';
import Write from './pages/Write/Write';
import Login from './pages/Login/Login';
import Settings from './pages/Settings/Settings';
import { useContext } from 'react';
import { Context } from './context/Context';
// import axios from "axios" 


function App() {
  const {user} = useContext(Context)
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/post' element={<PostsPage />} /> */}
          <Route path='/write' element={user ? <Write /> :<Register/>} />
          <Route path='/post/:postId' element={<Single />}/>
          <Route path='/register' element={user ? <Home/> :<Register />} />
          <Route path='/login' element={user ? <Home/> :<Login />} />
          <Route path='/settings' element={user ? <Settings /> :<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
