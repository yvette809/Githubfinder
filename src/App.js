import React, {useState} from 'react';
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

const App = ()=>{
 const [users,setUsers] = useState([]);
 const [user,setUser] = useState({});
 const [repos,setRepos] = useState([]);
 const [loading,setLoading] = useState(false);
 const [alert,setAlert] = useState(null);
  
  
  // async componentDidMount (){
  //  setLoading(true)
  //   const res = await axios.get('https://api.github.com/users')
  //   console.log('the response is', res)
  //   setUsers( res.data)
  //   setLoading(false)
  // }

// search github users
const searchUsers = async (text) => {
  setLoading(true)
  const res = await axios.get(`https://api.github.com/search/users?q=${text}`)
  
  setUsers(res.data.items);
  setLoading(false);
}


// Get singlegithub user

const getUser = async (username) =>{
  setLoading(true)
  const res = await axios.get(`https://api.github.com/users/${username}`)
  setUser( res.data)
  setLoading(false)
}

// get users repos
const getUserRepos = async (username) =>{
  setLoading(true)
  const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`)
  setRepos( res.data)
  setLoading(false)
}

// clear users from state
const clearUsers =()=>{
  setUsers([])
  setLoading(false)
}

// set Alerts
const showAlert = (msg,type)=>{
  setAlert({msg,type})

  setTimeout(()=> setAlert(null),1000)
  }


  return (
   
    <Router>
      <div className="App">
         <NavBar />
      <div className = "container">
        <Alert alert ={alert}/>
        <Switch>
          <Route exact path='/' render = {props=>(
            <>
           <Search
            searchUsers={searchUsers} 
            clearUsers={clearUsers}
            showClear = {users.length >0?true:false}
            setAlert= {showAlert}
       />
      <Users loading={this.state.loading} users= {this.state.users}/>
            </>
          )}>
         </Route>
          <Route  path ='/about' component ={About}></Route>
          <Route exact path ='/user/:login' render = {props =>(
            <User
             {...props} 
             getUser = {getUser} 
             user={user} 
             loading={loading}
             getUserRepos={getUserRepos}
             repos ={repos}
             />
            )}>
          </Route>  
        </Switch>
        </div>
       </div>
    </Router> 
  )

}
  

export default App;
