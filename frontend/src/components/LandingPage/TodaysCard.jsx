import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { backendHost } from '../ApiConfig';


const TodaysCard = ({description,price,rating,url,id}) => {

  const addToCart=(id)=>{
    console.log("button clicked",id)
    const getid= localStorage.getItem('userid')


    axios.post(`${backendHost}/products/addCart`,{

      "userId":getid,
      "productId":id,
      "quantity":2,
    })

  }
  return (
    <div>
       <Card style={{ maxWidth: '15rem',minHeight:'18rem',marginBottom:"2rem" }} className="shadow-lg">
      
      <Card.Body>
        
      <Link to={`/todaysdetail/${id}`} className="text-decoration-none">
        <Card.Text>
        <div style={{backgroundColor:"pink"}}>
          <img  style={{maxHeight:"10rem"}}src={url} alt="img"/>
        </div>
        <div style={{fontSize:"10px"}} >
          <p>{description}</p>
        </div>
        <div  style={{fontSize:"10px"}}>
          <p>Rs {price}</p>
        </div>
        <div  style={{fontSize:"10px"}}>
          <p>{rating}</p>
        </div>
        </Card.Text>
        </Link>

        <Button variant="dark" onClick={ ()=>addToCart(id)}>Add To Cart</Button>
       
      </Card.Body>
    </Card>
    </div>
  )
}

export default TodaysCard