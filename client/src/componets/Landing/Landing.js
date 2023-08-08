import Posts from '../Posts/Posts'
import Sidebar from '../Sidebar/Sidebar'
import './Landing.css'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useLocation } from 'react-router-dom'

const Landing = () => {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts');
        // Assuming the response data is an array of posts
        setPosts(response.data);
        console.log(response.data); // Logging the data inside the try block to access the response
      } catch (error) {
        console.error('Error fetching posts:', error);
        // Handle the error appropriately, for example, show an error message to the user
        // You can set an empty array or handle it based on your application's requirements
        setPosts([]);
      }
    };

    fetchPosts();
  }, []);
  

  return (
    <div className='landing'>
        <Posts posts={posts} />
        <Sidebar />
    </div>
  )
}

export default Landing