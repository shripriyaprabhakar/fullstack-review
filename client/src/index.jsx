import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import RepoListEntry from './components/RepoListEntry.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
 
  this.search = this.search.bind(this);  
  
  }

  componentDidMount () {
    this.refresh();
  }

  refresh() {
    var self = this;
     $.ajax({
     type : 'GET',
     url: '/repos',
     dataType: 'json',//req.body
     success: function (result) {
       var newArr = self.state.repos;
        console.log(result);
       newArr = newArr.concat(result);
console.log(newArr);
       self.setState({repos : newArr})
     },
     error: function () {
        console.log ('error');
     }
    });
  }


  search (term) {
    console.log(`${term} was searched`);
    // TODO
     var self = this;
    $.ajax({
    type : 'POST',
    url: '/repos',
    data: {username:term},
    contenType: 'application/json',
    success : function () {
      console.log('success');
       self.refresh();
    },
    error : function () {
      //console.log('error')
    }
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
      <button onClick={this.refresh.bind(this)}> Refresh </button>
    </div>)
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById('app'));