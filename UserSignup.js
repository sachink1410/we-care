import { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"
import Card from "react-bootstrap/Card";
import validators from '../validators';
import { Link, Outlet } from 'react-router-dom';

function UserSignup() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState();
    const [gender, setGender] = useState();
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [pincode, setPincode] = useState(0);
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");

    const [successFlag, setSuccessFlag] = useState(false);
    const [success, setSuccess] = useState();
    const [err, setErr] = useState({
        nameErr: "Name should have 3 to 50 characters",
        passwordErr: "Password should have 5 to 10 characters",
        ageErr: "Age should be between 20 to 100 years",
        mobileErr: "Mobile number should have 10 digits",
        emailErr: "Email field is required",
        pincodeErr: "pincode should have 6 digits",
        cityErr: "City should have 6 to 20 characters",
        stateErr: "State should have 6 to 20 characters",
        countryErr: "Country should have 6 to 20 characters"

    })


    useEffect(() => {
        axios.get('http://localhost:4000/users').then((res) => {
            console.log(res.data)
        })
    })

    function handleJoin(e) {
        e.preventDefault();
        if ((validators.validateName(name)) && (validators.validatePassword(password))
            && (validators.validateAge(dateOfBirth)) && (validators.validatePhoneNumber(mobile)) &&
            (validators.validateEmail(email)) && (validators.validateAddress(city)) &&
            (validators.validateAddress(state)) && (validators.validateAddress(country)) &&
            (validators.valiatePinCode(pincode))) {
            let newUser = {
                name: name,
                password: password,
                gender: gender,
                dateOfBirth: dateOfBirth,
                email: email,
                mobileNumber: mobile,
                pincode: pincode,
                city: city,
                state: state,
                country: country


            }

            axios.post('http://localhost:4000/users', newUser).then((res) => {
                setSuccessFlag(true)
                setSuccess(`Account created successfully!! your user id is ${res.data.id}`)
            })
            setErr({
                nameErr: "",
                passwordErr: "",
                ageErr: "",
                mobileErr: "",
                emailErr: "",
                pincodeErr: "",
                cityErr: "",
                stateErr: "",
                countryErr: ""
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
                    width: '30rem', backgroundColor: 'black', height: '25rem', 'margin-left': 'auto',
                    'margin-right': 'auto', marginTop: '30px'
                }}>


                    <Card.Body style={{ backgroundColor: 'black', textAlign: 'center', color: 'white' }} >
                        <Card.Title>User Profile</Card.Title>

                        <form onSubmit={handleJoin}>
                            <div class="row">
                                <div class="col">
                                    <label for="formGroupExampleInput">Name</label>
                                    <input type="text" class="form-control" value={name}
                                        onChange={(e) => { setName(e.target.value) }} />
                                    {(!(validators.validateName(name))) ? err.nameErr : null}
                                </div>
                                <div class="col">
                                    <label for="formGroupExampleInput">Password</label>
                                    <input type="password" class="form-control" value={password}
                                        onChange={(e) => { setPassword(e.target.value) }} />
                                    {(!(validators.validatePassword(password))) ? err.passwordErr : null}
                                </div>
                            </div>

                            <div class="row">
                                <div class="col">
                                    <label for="formGroupExampleInput">Date Of Birth</label>
                                    <input type="date" class="form-control" value={dateOfBirth}
                                        onChange={(e) => { setDateOfBirth(e.target.value) }} />
                                    {(!(validators.validateAge(dateOfBirth))) ? err.ageErr : null}
                                </div>
                                <div class="col">
                                    <label for="formGroupExampleInput">Gender</label><br />
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" value={gender}
                                            onChange={(e) => { setGender(e.target.value) }} />
                                        <label class="form-check-label" for="inlineRadio1">Male</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" value={gender}
                                            onChange={(e) => { setGender(e.target.value) }} />
                                        <label class="form-check-label" for="inlineRadio2">Female</label>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col">
                                    <label for="formGroupExampleInput">Mobile Number</label>
                                    <input type="text" class="form-control" value={mobile}
                                        onChange={(e) => { setMobile(e.target.value) }} />
                                    {(!(validators.validatePhoneNumber(mobile))) ? err.mobileErr : null}
                                </div>
                                <div class="col">
                                    <label for="formGroupExampleInput">Email</label>
                                    <input type="email" class="form-control" value={email}
                                        onChange={(e) => { setEmail(e.target.value) }} />
                                    {(!(validators.validateEmail(email))) ? err.emailErr : null}
                                </div>
                            </div>

                            <div class="row">
                                <div class="col">
                                    <label for="formGroupExampleInput">Pincode</label>
                                    <input type="number" class="form-control" value={pincode}
                                        onChange={(e) => { setPincode(e.target.value) }} />
                                    {(!(validators.valiatePinCode(pincode))) ? err.pincodeErr : null}
                                </div>
                                <div class="col">
                                    <label for="formGroupExampleInput">City</label>
                                    <input type="text" class="form-control" value={city}
                                        onChange={(e) => { setCity(e.target.value) }} />
                                    {(!(validators.validateAddress(city))) ? err.cityErr : null}
                                </div>
                            </div>

                            <div class="row">
                                <div class="col">
                                    <label for="formGroupExampleInput">State</label>
                                    <input type="text" class="form-control" value={state}
                                        onChange={(e) => { setState(e.target.value) }} />
                                    {(!(validators.validateAddress(state))) ? err.stateErr : null}
                                </div>
                                <div class="col">
                                    <label for="formGroupExampleInput">Country</label>
                                    <input type="text" class="form-control" value={country}
                                        onChange={(e) => { setCountry(e.target.value) }} />
                                    {(!(validators.validateAddress(country))) ? err.countryErr : null}
                                </div>
                            </div>


                            <br />
                            <button className='btn btn-success'>Register</button>
                            {successFlag ? (<div>
                                {success}<br />
                                <button className='btn btn-danger'><Link to="userlogin">Log in</Link></button>
                            </div>
                            ) : null}


                        </form>


                    </Card.Body >


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
export default UserSignup;