import React from 'react';
import RepoList from './RepoList.jsx';

const tableStyle = {
                  border: '5px solid blue', 
                  flexDirection: 'row',
                  backgroundColor: 'yellow'
         
 };



const RepoListEntry = (props) => (
  <div className="col-md-6 offset-md-3">
          
    <table style={tableStyle}>
      <tbody>
    <tr>{props.repo.id}</tr>
    <tr>{props.repo.name}</tr>
    <tr>{props.repo.full_name}</tr>
    <tr>{props.repo.html_url}</tr>
      </tbody>
    </table>     

     
  </div>
)

export default RepoListEntry;