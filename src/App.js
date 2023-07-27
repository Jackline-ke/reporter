import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componets/Navbar/Navbar';
import Blogs from './pages/Blogs';
import Home from './pages/Home';
import Post from './pages/Post';


function App() {
  

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Post' element={<Post />} />
          <Route path='/Blogs' element={<Blogs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
