import React from 'react';

import './App.css';

import NavBar from './layout/NavBar';
import Users from './components/users/Users'
import axios from 'axios'
//import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component{

  state={
    users:[],
    loading:false
  }

  async componentDidMount (){
    this.setState({loading:true})
    const res = await axios.get('https://api.github.com/users')
    console.log('the response is', res)
    this.setState({users: res.data, loading: false})
  }

  render(){
    return (
      <div className="App">
        <NavBar />
        <Users loading={this.state.loading} users= {this.state.users}/>
       
      </div>
    );
  }
}


  


export default App;
