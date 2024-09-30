import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { backendHost } from '../ApiConfig';



const CartCard = ({url,name,price,quantity,id, deleteItem}) => {
  return (
    <div>

<div className="container mt-4 mb-3">

<Card className="shadow-sm">
     
     <Card.Body>
       
       <Card.Text>
       <Row>
  <Col>
    <div className="d-flex">
      <div style={{ height: "40px", width: "60px" }}>
        <img src={url} className="img-fluid" alt="img" />
      </div>
      <div>   <p style={{ marginLeft: "2rem" }}>{name}</p></div>
    
    </div>
  </Col>
  <Col><p>{price}</p></Col>
  <Col><p>{quantity}</p>
  <button onClick={()=>deleteItem(id)}>Delete</button>
  
  </Col>
  <Col><p> Rs 200</p></Col>
</Row>

       </Card.Text>

    
      
     </Card.Body>
   </Card>
  

</div>
    </div>
  )
}

export default CartCard