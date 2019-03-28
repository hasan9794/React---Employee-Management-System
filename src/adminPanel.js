import React from "react"
import "./adminPanel.css"
import Navbar from "./navbar"
import swal from 'sweetalert';



class Admin extends React.Component {
    constructor(){
        super()

        this.state ={
            inputArray: [],
            addBtn: false
        }
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
        console.log([event.target.value])
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
        
        return(
            <div>
                <Navbar />
                <div className="container">
                { !this.state.addBtn && <div class="row">
                        <table style={{marginTop: 30}} className="striped">
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Salary</th>
                                <th>Job Start Date</th>
                            </tr>   
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
                            
                        </table>
                    </div>}
                    {this.state.addBtn && <div>

                    <div>
                        <h2>Add an Employee</h2>
                    </div>
                    <div className="row">
                        <div class="input-field col s6">
                            <input ref={(s) => this._firstName = s} name="fName" id="first_name" type="text" class="validate"  />
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
            
        )
    }
}

export default Admin