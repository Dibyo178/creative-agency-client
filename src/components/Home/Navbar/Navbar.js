import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import logo from "../../../images/logos/logo.png"

const Navbar = () => {

    return (
   
         <div className="container">
         <nav className="navbar navbar-expand-lg navbar-light" >
                <a className="navbar-brand" href="#">
                    <img className="img-fluid" style={{height:'47px'}} src={logo} alt=""/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/portfolio">Our Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/team">Our Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact Us</a>
                        </li>
                    </ul>
                    <button type="button" className="btn btn-design"><strong>Login</strong></button>
                </div>
            </nav>
         </div>
        
    );
};

export default Navbar;