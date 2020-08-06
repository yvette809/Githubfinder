import React from 'react';

import './App.css';
import Search from './components/users/Search'
import NavBar from './layout/NavBar';
import Alert from './layout/Alert'
import Users from './components/users/Users'
import User from './components/users/User'
import axios from 'axios'
import About from './components/pages/About'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
//import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component{

  state={
    users:[],
    loading:false,
    alert:null,
    user:{}
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


  // Get singlegithub user

  getUser = async (username) =>{
    this.setState({loading:true})
    const res = await axios.get(`https://api.github.com/users/${username}`)
    this.setState({user: res.data, loading: false})
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

    setTimeout(()=> this.setState({alert:null}),1000)
  }
  

  render(){
    return (
     
      <Router>
        <div className="App">
           <NavBar />
        <div className = "container">
          <Alert alert ={this.state.alert}/>
          <Switch>
            <Route exact path='/' render = {props=>(
              <>
             <Search
              searchUsers={this.searchUsers} 
              clearUsers={this.clearUsers}
              showClear = {this.state.users.length >0?true:false}
              setAlert= {this.setAlert}
         />
        <Users loading={this.state.loading} users= {this.state.users}/>
              </>
            )}>
           </Route>
            <Route  path ='/about' component ={About}></Route>
            <Route exact path ='/user/:login' render = {props =>(
              <User {...props} getUser = {this.getUser} user={this.state.user} loading={this.state.loading}/>
              )}>
            </Route>  
          </Switch>
          </div>
         </div>
      </Router> 
    )
  }
}


  


export default App;
