import React from "react"

class Admin extends React.Component {
    render(){
        
        return(
            <div>
            <nav>
                <div className="nav-wrapper">
                    <a href className="brand-logo">AdminPanel</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li style={{marginRight: 20}}>Welcome! Admin</li>
                    </ul>
                </div>
            </nav>
                <div className="container">
                    <div class="row">
                        <table style={{marginTop: 30}} className="striped">
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Salary</th>
                                <th>Job Start Date</th>
                            </tr>
                            <tr>
                                <td>Muhammad</td>
                                <td>Hasan</td>
                                <td>hasan@gmail.com</td>
                                <td>20,00000</td>
                                <td>1, January 2020</td>
                            </tr>
                            <tr>
                                <td>Muhammad</td>
                                <td>Hasan</td>
                                <td>hasan@gmail.com</td>
                                <td>20,00000</td>
                                <td>1, January 2020</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin