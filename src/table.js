import React from "react"

class Table extends React.Component{
    render(){
        return(
            <div>

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
                
        )
    }
}

export default Table 