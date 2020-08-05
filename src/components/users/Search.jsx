import React, { Component } from 'react'
//import { propTypes } from 'prop-types'

 class Search extends Component {

    state={
        text:""
    }

    // static PropType ={
    //     searchUsers: propTypes.func.isRequired,
    //     clearUsers: propTypes.func.isRequired
    // }

    onSubmit= (e)=>{
        e.preventDefault()
        if(this.state.text=== ''){
            this.props.setAlert('please enter something', 'light')
        }else{
        this.props.searchUsers(this.state.text)
        this.setState({text:''})

        }
        
    }
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                <input 
                type="text" 
                name = "text"
                 placeholder = "search Users..." 
                 value = {this.state.text}
                 onChange = {(e)=> this.setState({text: e.currentTarget.value})}
                 />
                <input 
                type="submit" 
                value= "search" 
                className=" btn btn-dark btn-block"
                />
                </form>
                {this.props.showClear && <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button>}
                
            </div>
        )
    }
}

export default Search
