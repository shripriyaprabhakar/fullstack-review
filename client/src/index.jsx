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

  search (term) {
    console.log(`${term} was searched`);
    // TODO

    $.ajax({
    type : 'POST',
    url: '/repos',
    
    contenType: 'application/json',
    success : function (term) {
      term : term;
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
    </div>)
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById('app'));