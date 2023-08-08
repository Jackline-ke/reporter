import React, { useContext, useEffect, useState } from 'react'
import './SinglePost.css'
import {FaEdit, FaTrash} from "react-icons/fa"
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { Context } from '../../context/Context'


const SinglePost = () => {
    const PF = "http://localhost:5000/images/"
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})
    const {user} = useContext(Context)
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [updateMode, setUpdateMode] = useState(false)

    useEffect(() =>{
        const getPost = async () =>{
            const res = await axios.get("/posts/" + path)
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)
        };
        getPost();
    }, [path]);

    const handleDelete = async () => {
        try{
            await axios.delete(`/posts/${post._id}`, {data: {username:user.username}})
            window.location.replace("/")
        }catch(err){

        }
    }
    const handleUpdate = async () =>{
        try{
            await axios.put(`/posts/${post._id}`, {
                username:user.username, 
                title, 
                desc,
            })
            // window.location.reload()
            setUpdateMode(false)
        }catch(err){

        }
    }
    
  return (
    <div className='singlepost font-serif'>
        <div className='singlePostWrapper'>
            {post.photo &&
            <img src={PF + post.photo} alt='Single Post' className='singlePostImg w-full h-72 rounded-lg'/> }
                {
                    updateMode ? <div className='flex justify-center'><input type="text" value={title} className="singlePostTitleInput w-full " autoFocus onChange={(e) => setTitle(e.target.value)} /></div> : (
                        <div className='singlePostHeader mt-4'>
                            <h1 className='singlePostTitle font-serif text-4xl font-semibold'>{title}</h1>
                                {post.username === user?.username && (
                                    <div className='singlePostEdit flex float-right'>
                                        <FaEdit className='text-[#189614] font-thin cursor-pointer' onClick={() => setUpdateMode(true)}/>
                                        <FaTrash className='ml-4 text-[#ff3434] cursor-pointer' onClick={handleDelete}/>
                                    </div>
                                )}
                        </div>
                    )
                }
            
            <div className='singlePostInfo mt-4 flex mb-2'>
                <span className='singlePostAuthor font-serif text-[#ff1212]'>Autor: <Link to={`/?users=${post.username}`}> <b>{post.username}</b></Link></span>
                <span className='singlePostDate ml-8 font-thin text-sm'>{new Date(post.createdAt).toDateString()}</span>
            </div>
            <hr className='w-96'/>
            { updateMode ? (
                <textarea className='singlePostDesc singlePostDescInput w-full' value={desc} onChange={(e) => setDesc(e.target.value)} /> ) :(
                    <p className='singlePostDesc mt-2 font-serif'>{desc}</p>
                )
            }
            {updateMode && (
                <button className='singlePostButton' onClick={handleUpdate}>Update</button>
            )}
            
           
        </div>
    </div>
  )
}

export default SinglePost