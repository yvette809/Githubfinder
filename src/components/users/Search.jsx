import React, { useState } from 'react'
//import { propTypes } from 'prop-types'

const Search = ({searchUsers,showClear,clearUsers, showAlert})=>{

    const[text, setText] = useState('')



   const onSubmit = (e)=>{
        e.preventDefault()
        if(text=== ''){
            showAlert('please enter something', 'light')
        }else{
        searchUsers(text)
        setText('')

        }
        
    }
  
        return (
            <div>
                <form className="form" onSubmit={onSubmit}>
                <input 
                type="text" 
                name = "text"
                 placeholder = "search Users..." 
                 value = {text}
                 onChange = {(e)=> setText( e.currentTarget.value)}
                 />
                <input 
                type="submit" 
                value= "search" 
                className=" btn btn-dark btn-block"
                />
                </form>
                {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
                
            </div>
        )
 

}


   

export default Search
