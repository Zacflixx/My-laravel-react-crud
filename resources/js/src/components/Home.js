import React from 'react';
import { Link } from 'react-router-dom';
import AppContainer from './AppContainer';

const Home = () => {
    return (
        <AppContainer
        title="LaraveL ReactJS - CRUD">

        <Link to="/add" class="btn btn-primary">ADD POST</Link>
        <div class="table-responsive">
        <table class="table table-striped mt-4">
               <thead>
                 <tr>
                       <th>ID</th>
                       <th>Title</th>
                       <th>Desctiption</th>
                       <th>Action</th>
                 </tr>
               </thead>
               <tbody>
                <tr>
                    <td>1</td>
                    <td>Sample Title</td>
                    <td>Sample Desctiption</td>
                    <td> 
                        <Link to="/edit/1" class="btn btn-warning">EDIT</Link>
                         <a href="#" class="btn btn-danger pl-4">DELETE</a> 

                    </td>
                </tr>

               </tbody>

        </table>
        </div>
  
        </AppContainer>
    );
};
 export default Home;
