import logo from './MsLogo.png';
import React, { Component } from 'react'
import {Link} from "react-router-dom";


export class NavBar extends Component {
  render() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={logo} height="25" width="25" alt="Not Available"/></Link>
                    <Link className="navbar-brand" to="/">Acquired Finance Systems - VI Portal</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link" to="/newRequest">New Request</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/reports">Reports</Link>
                        </li>                        
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        </div>
    )
  }
}

export default NavBar