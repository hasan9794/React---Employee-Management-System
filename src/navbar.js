import React from "react"

class Navbar extends React.Component {
    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                    <a href className="brand-logo">AdminPanel</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li style={{marginLeft: 20}}>Howdy, Admin</li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar