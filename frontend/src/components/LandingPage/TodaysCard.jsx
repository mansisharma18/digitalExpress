import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


const TodaysCard = ({description,price,rating}) => {

  const addToCart=(e)=>{
    console.log("button clicked")

  }
  return (
    <div>
       <Card style={{ width: '15rem',minHeight:'18rem',marginBottom:"2rem" }} className="shadow-sm">
      
      <Card.Body>
        
        <Card.Text>
        <div style={{minHeight:"10rem",backgroundColor:"pink"}}></div>
        <div >
          <h5>{description}</h5>
        </div>
        <div>
          <p>Rs {price}</p>
        </div>
        <div>
          <p>{rating}</p>
        </div>
        </Card.Text>

        <Button variant="dark" onClick={addToCart}>Add To Cart</Button>
       
      </Card.Body>
    </Card>
    </div>
  )
}

export default TodaysCard