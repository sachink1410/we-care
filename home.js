import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import coachImage from '../images/coach.jpg';
import userImage from '../images/user.png';
import { Link, Outlet } from 'react-router-dom';


function Home() {
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
      <h1 style={{ textAlign: 'center' }}>We are at the heart of appropriate care</h1>
      <body style={{ display: 'flex' }}>

        <CardComp source={coachImage} loginLink={'coachlogin'} login={"Login as Coach"} join={"Join as Coach"} joinLink={'coachsignup'} />
        <CardComp source={userImage} loginLink={'userlogin'} login={"Login as User"} join={"Join as User"} joinLink={'usersignup'} />
      </body>

      <footer class="text-center text-white fixed-bottom" style={{ "background-color": "#21081a" }}>

        <div class="container p-2"></div>



        <div class="text-center p-2" style={{ "background-color": "rgba(0, 0, 0, 0.2)" }}>
          © 2020 Copyright:
          <span class="text-white" >WeCare All rights reserved</span>
        </div>

      </footer>
    </>
  )
}

function CardComp(props) {
  return (<>

    < Card style={{
      width: '15rem', backgroundColor: 'black', height: '18rem', 'margin-left': 'auto',
      'margin-right': 'auto', marginTop: '30px'
    }}>
      <Card.Img variant='top' src={props.source} />
      <Card.Body style={{ backgroundColor: 'black' }} >
        <div className="text-center">
          <Button variant="success" style={{ width: '90%' }}><Link to={props.loginLink}  ><span style={{ color: 'white' }}>{props.login}</span></Link></Button><br /><br />
          <Button variant="primary" style={{ width: '90%' }}><Link to={props.joinLink}  ><span style={{ color: 'white' }}>{props.join}</span></Link></Button>
          <Outlet />
        </div>
      </Card.Body>
    </Card>


  </>
  )
}
export default Home;