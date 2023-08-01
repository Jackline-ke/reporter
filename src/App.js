import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componets/Navbar/Navbar';
import Home from './pages/Home';
import { PostsPage } from './pages/PostPage';
// import Single from './pages/Single/Single';
import Write from './pages/Write/Write';


function App() {
  

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Post' element={<PostsPage />} />
          <Route path='/Write' element={<Write/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
