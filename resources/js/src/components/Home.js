import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppContainer from './AppContainer'; 
import api from '../api';



const Home = () => {
   const [posts, setPosts]= useState(null);

    useEffect(() => {
   api.getAllPosts().then(res =>{
    const result = res.data;
    setPosts(result.data)
   });
}, []);

    const renderPosts = () => {
        if(!posts) {
            return  ( 
                <tr>
                    <td colSpan="4"> Loading Posts</td>
                </tr>
                );
        }
        if(posts.length ===0) {
         return  (
                <tr>
                    <td colSpan="4"> There is no post yet. Add one.</td>
                </tr>
                );
        }

        return posts.map((post) => (
            <tr>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.description}</td>
                <td> <Link className="btn btn-warning"
                to={`/posts/${post.id}`}>
                EDIT
                </Link> </td>
                <button type="button" className="btn btn-danger">
                    DELETE
                </button>
            </tr>
        ))
    }

    return (
        <AppContainer
        title="LaraveL ReactJS - CRUD">

        <Link to="/add" className="btn btn-primary">ADD POST</Link>
        <div className="table-responsive">
        <table className="table table-striped mt-4">
               <thead>
                 <tr>
                       <th>ID</th>
                       <th>Title</th>
                       <th>Desctiption</th>
                       <th>Action</th>
                 </tr>
               </thead>
               <tbody>
                {renderPosts()}
               </tbody>

        </table>
        </div>
  
        </AppContainer>
    );
};
 export default Home;
