import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import axios from "axios";

import Card from "react-bootstrap/Card";
import coachImage from '../images/coach.jpg';
import { useNavigate } from "react-router-dom";

function CoachLogin() {
    let navigate = useNavigate()
    const [id, setId] = useState();
    const [password, setPassword] = useState();
    const [msg, setMsg] = useState();
    const [reqFlag, setReqFlag] = useState(false);
    const [passFlag, setPassFlag] = useState(false);
    const [invalidFlag, setInvalidFlag] = useState(false);


    function handleLogin(e) {
        e.preventDefault();
        if (id === "") {
            setMsg("Id field is required")
            setReqFlag(true)
        }
        else if (password.length < 5 || password.length > 10) {
            setMsg("Password should have 5 to 10 characters")
            setPassFlag(true)
        }
        else {
            axios.get('http://localhost:4000/coaches')
                .then((res) => {
                    for (let i = 0; i < res.data.length; i++) {
                        const userId = res.data[i].id;
                        const pass = res.data[i].password;
                        if (userId == id) {
                            if (id == userId && password == pass) {
                                navigate('/coachhome/' + id)
                            } else {
                                setMsg("Invalid Credentials")
                                setInvalidFlag(true)
                            }
                        }
                    }

                })
        }
    }



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
                                <span class="nav-link active" aria-current="page" href="#">call us:0802233447</span>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <body>
                < Card style={{
                    width: '15rem', backgroundColor: 'black', 'margin-left': 'auto',
                    'margin-right': 'auto', marginTop: '30px'
                }}>
                    <Card.Img variant='top' src={coachImage} className="img-thumbnail" />
                    <Card.Body style={{ backgroundColor: 'black', color: 'white' }} >

                        <div className="text-center">
                            <Card.Title>Login As Life Coach</Card.Title>

                            <form onSubmit={handleLogin}>
                                <div class="form-group">

                                    <input type="number" class="form-control" placeholder="Coach Id" value={id}
                                        onChange={(event) => { setId(event.target.value) }} />
                                    {reqFlag ? msg : null}

                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="Password" value={password}
                                        onChange={(event) => { setPassword(event.target.value) }} />
                                    {passFlag ? msg : null}
                                </div>

                                <button type="submit" class="btn btn-success">Login</button>
                                {invalidFlag ? msg : null}
                            </form>


                        </div>
                    </Card.Body>
                </Card>





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
export default CoachLogin;
