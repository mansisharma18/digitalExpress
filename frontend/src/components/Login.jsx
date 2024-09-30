import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import loginImage from '../assets/img/loginImage.svg'
import Container from 'react-bootstrap/esm/Container';

import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../App.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { backendHost } from './ApiConfig';


const Login = () => {

  const [validated, setValidated] = useState(false);
  const[email,setEmail]=useState('')
  const[name,setName]=useState('')
  const[password,setPassword]=useState('')


  const handleSubmit = (e) => {
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

    // setValidated(true);
    e.preventDefault();
    console.log("submitedd")
    axios.post(`${backendHost}/user/login`, {
        // "citycode": parseInt(cityCode),
        "username":email,
        "password":password,
       

    })
    .then(res => {
        console.log(res.data.userId)
     localStorage.setItem('userid',res.data.userId)
     const getid= localStorage.getItem('userid')

    console.log("getid",getid,"660e81b21eb13a8336fdd26f")
        })
  
    .catch(res => console.log(res))


  }


  return (
    <div className="signup">
  

<Row>
        <Col sm={7}>
         <img src={loginImage} alt="loginimg"/>
        </Col>

        <Col sm={5}>
<div className="p-5" >
  <h2>Log in to Digital Express</h2>
  <p>Enter your details below</p>


  <Form  onSubmit={handleSubmit}>


 



        <Row className="mb-3">
        <Form.Group as={Col} md="9" controlId="validationCustom02">
        
         <Form.Control
            required
            type="text"
            placeholder="Email or phone number"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            
          />
      
        </Form.Group>

        </Row>

        <Row className="mb-3">
        <Form.Group as={Col} md="9" controlId="validationCustom03">
        
         <Form.Control
            required
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            
          />
        
        </Form.Group>


         <div className="pt-4 d-flex">
            <div>
        <Button variant="danger" type="submit">
        Login
      </Button>
      </div>
      <div className="ms-auto">
        <p><Link to="#">Forgot Password</Link></p>
      </div>
      </div>


      

        </Row>
    </Form>
</div>

        </Col>
      </Row>
      
    
    </div>
  )
}

export default Login