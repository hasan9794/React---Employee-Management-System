import React from "react"

class Navbar extends React.Component {
    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                    <a href className="brand-logo">AdminPanel</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li style={{marginRight: 20}}>Welcome! Admin</li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar