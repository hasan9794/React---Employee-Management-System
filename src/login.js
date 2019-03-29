import React from "react"
import './App.css';
import Admin from "./adminPanel"
import swal from 'sweetalert';
import Navbar from "./navbar"

class LoginForm extends React.Component {
    constructor(){
        super()
        this.state = {
            user: "",
            pw: "",
            isLoggedIn: true,
            inputArray: [],
            addBtn: false
        }
    }

    logout(){
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
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
            swal("Login Succesful!", "You are now directed to dashboard", "success");
        } else{
            swal("Invalid Credentials");
        }
    }

    handleClick(){
        let obj = {
            fName: this._firstName.value ,
            lName: this._lastName.value ,
            email: this._email.value ,
            salary: this._salary.value ,
            date: this._date.value,
            id: Date.now()
        }
        console.log(obj)
        
        let arr = this.state.inputArray;
        arr.push(obj)
        console.log(arr)
        
        this.setState({
            inputArray: arr,
            addBtn: !this.state.addBtn
        })
    }

    del(id){
        let element = this.state.inputArray.filter((e) =>{
            if(e.id !== id){
                return true
            }
        })

        this.setState({
            inputArray: element
        })
    }

    editText(event){
        let a = prompt("Enter text or value to be repplaced")
        event.target.innerHTML = a;
    }

    render(){
        let loggedIn = this.state.isLoggedIn
        return(
            <div className="App"> {
                !loggedIn && 
                <div className="row App-header">
                <img src={this.props.imgURL} className="App-logo" alt="logo" />
                    <div style={{width: 300}}>
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

                        <input style={{width: 300, marginTop: 30}} onClick={this.validiate.bind(this)} className="waves-effect waves-light btn-small " type="submit"></input>
                   </div> {/* <a  href >Button</a> */}
                </div>
                }
                {loggedIn && 
                    <div>
                    <Navbar 
                        method={this.logout.bind(this)}
                    />
                    <div className="container">
                    { !this.state.addBtn && <div class="row">
                            <table style={{marginTop: 30}} className="striped" >
                                <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Salary</th>
                                    <th>Job Start Date</th>
                                </tr>   
                                </thead>
                                <tbody>
                                    {   
                                        this.state.inputArray.map((e) => 
                                                <tr>
                                                    <td name="fName" onClick={this.editText.bind(this)}>{e.fName}</td>
                                                    <td name="lName" onClick={this.editText.bind(this)}>{e.lName}</td>
                                                    <td name="email" onClick={this.editText.bind(this)}>{e.email}</td>
                                                    <td name="salary" onClick={this.editText.bind(this)}>{e.salary}</td>
                                                    <td name="date" onClick={this.editText.bind(this)}>{e.date}</td>
                                                    <td><i onClick={this.del.bind(this,e.id)} class="far fa-trash-alt ui"></i></td>
                                                </tr>        
                                        )
                                    }  
                                </tbody>
                                
                            </table>
                        </div>}
                        {this.state.addBtn && <div>
    
                        <div>
                            <h2>Add an Employee</h2>
                        </div>
                        <div className="row">
                            <div class="input-field col s6">
                                <input ref={(s) => this._firstName = s} name="fName" id="first_name" type="text" class="validate" autoFocus/>
                                <label for="first_name">First Name</label>
                            </div>
                            <div class="input-field col s6">
                                <input ref={(s) => this._lastName = s} name="lName" id="last_name" type="text" class="validate"  />
                                <label for="last_name">Last Name</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input ref={(s) => this._email = s} name="email" id="email" type="email" class="validate"  />
                                <label for="email">Email</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s6">
                                <input ref={(s) => this._salary = s} name="salary" id="salary" type="number" class="validate"  />
                                <label for="salary">Salary</label>
                            </div>
                            <div class="input-field col s6">
                                <input ref={(s) => this._date = s} name="date" id="date" type="text" class="datepicker"  />
                                <label for="date">Date of Joining (eg. 04/12/2017)</label>
                            </div>
                            <div className="input-field">
                                <div style={{width: "100%"}} className="col">
                                    <button onClick={this.handleClick.bind(this)} style={{width: "100%", marginTop: 20}} class="btn waves-effect waves-light" type="submit" name="action">Submit</button>
                                </div>
                            </div>
                        </div>
                        </div> }
                    </div>
                    <a onClick={() => {this.setState({addBtn: !this.state.addBtn})}} href class="float">
                        <i className="fa fa-plus my-float"></i>
                    </a>
                        
                </div>
                }
            </div>

        )
    }
}

export default LoginForm