import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
 
  this.search = this.search.bind(this);  
  
  }

  componentDidMount () {
    this.handleClick();
  }

  handleClick () {
     $.ajax({
     type : 'GET',
     url: '/repos',
     data: JSON.parse(repos),//req.body
     contenType: 'application/json',
     success: function () {
       console.log(success);
     },
     error: function () {
        console.log (error);
     }
    });
  }


  search (term) {
    console.log(`${term} was searched`);
    // TODO

    $.ajax({
    type : 'POST',
    url: '/repos',
    data: JSON.stringify(term),
    contenType: 'application/json',
    success : function (term) {
      console.log('success')
    },
    error : function () {
      console.log('error')
    }
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
      <button onClick={this.handleClick.bind(this)}> Refresh </button>
    </div>)
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById('app'));