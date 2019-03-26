import React from "react"
import './App.css';
import Admin from "./adminPanel"
class LoginForm extends React.Component {
    constructor(){
        super()
        this.state = {
            user: "",
            pw: "",
            isLoggedIn: true
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    validiate(){
        if(this.state.user === "admin@domain.com" && this.state.pw === "admin" ){
            this.setState({
                isLoggedIn: true
            })
        }
    }
    render(){
        const loggedIn = this.state.isLoggedIn
        return(
            <div className="App"> {
                !loggedIn && 
                <div className="row App-header">
                <img src={this.props.imgURL} className="App-logo" alt="logo" />
                    <input 
                        name="user" 
                        placeholder="Username..." 
                        id="first_name" 
                        type="text" 
                        className="validate" 
                        onChange={this.handleChange.bind(this)} 
                    />
                    <input 
                        name="pw" 
                        placeholder="Password..." 
                        id="first_name" 
                        type="password" 
                        className="validate" 
                        onChange={this.handleChange.bind(this)} 
                    />

                    <h1>{this.state.user}  {this.state.pw}</h1>
                    <input onClick={this.validiate.bind(this)} className="waves-effect waves-light btn-large " type="submit"></input>
                    {/* <a  href >Button</a> */}
                </div>
                }
                {loggedIn && <Admin /> }
            </div>

        )
    }
}

export default LoginForm