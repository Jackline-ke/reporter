import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componets/Navbar/Navbar';
import Home from './pages/Home';
import { PostsPage } from './pages/PostPage';
import Single from './pages/Single/Single';
import Register from './pages/Register/Register';
import Write from './pages/Write/Write';
import Login from './pages/Login/Login';
import Settings from './pages/Settings/Settings';


function App() {
  const user = false;
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
