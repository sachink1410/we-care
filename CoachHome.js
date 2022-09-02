import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import Card from "react-bootstrap/Card";
import coachImage from '../images/coach.jpg';
import { Link, Outlet } from 'react-router-dom';


function CoachHome() {
    return (
        <>
            <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
                <div class="container-fluid ">
                    <span class="navbar-brand " href="#">WeCare</span>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul class="navbar-nav ">
                            <li class="nav-item">
                                <Link to="/coachviewprofile" class="nav-link active" aria-current="page" href="#">View Profile</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/coachhome" class="nav-link active" aria-current="page" href="#">My Schedule</Link>
                            </li>
                            <li class="nav-item">
                                <span class="nav-link active" aria-current="page" >call us:0802233447</span>
                            </li>
                            <li class="nav-item">
                                <Link to="/coachlogin" class="nav-link active" aria-current="page" >Logout</Link>
                            </li>
                            <Outlet />
                        </ul>
                    </div>
                </div>
            </nav>

            <body>

            </body>

            <footer class="text-center text-white fixed-bottom" style={{ backgroundColor: "#21081a" }}>

                <div class="container p-2"></div>



                <div class="text-center p-2" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2020 Copyright:
                    <span class="text-white" >WeCare All rights reserved</span>
                </div>

            </footer>

        </>
    )
}
export default CoachHome;