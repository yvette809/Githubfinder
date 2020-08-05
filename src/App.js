import React from 'react';

import './App.css';
import Search from './components/users/Search'
import NavBar from './layout/NavBar';
import Users from './components/users/Users'
import axios from 'axios'
//import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component{

  state={
    users:[],
    loading:false,
    alert:null
  }

  // async componentDidMount (){
  //   this.setState({loading:true})
  //   const res = await axios.get('https://api.github.com/users')
  //   console.log('the response is', res)
  //   this.setState({users: res.data, loading: false})
  // }

// search github users
  searchUsers = async (text) => {
    this.setState({loading:true})
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`)
    
    this.setState({users: res.data.items, loading: false})
  }

  // clear users from state
  clearUsers =()=>{
    this.setState({users:""})
  }

  // set Alerts
  setAlert = (msg,type)=>{
    this.setState({
      alert:{msg,type}
    })
  }
  

  render(){
    return (
      <div className="App">
        <NavBar />
        <Search
         searchUsers={this.searchUsers} 
         clearUsers={this.clearUsers}
         showClear = {this.state.users.length >0?true:false}
         setAlert= {this.setAlert}
         />
        <Users loading={this.state.loading} users= {this.state.users}/>
       
      </div>
    );
  }
}


  


export default App;
