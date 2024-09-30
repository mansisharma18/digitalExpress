import React,{useEffect,useState} from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { backendHost } from '../ApiConfig';
import CartCard from './CartCard';



const Cart = () => {

  const[items,setItems]=useState([])

    useEffect(()=>{
        fetch(`${backendHost}/products/cartItems/660e81b21eb13a8336fdd26f`)
        .then(res=>res.json())
        .then(res=>{
            // console.log("response",res)
            setItems(res[0].item)
            // console.log("items",items)
        })
        
    },[items]) 

const response= [
    {
        "_id": "660fdc297acaa7fb3e041c57",
        "userId": "660e81b21eb13a8336fdd26f",
        "item": [
            {
                "productId": "660a6156fcfcf1d0135fe31f",
                "name": "OnePlus 11 5G",
                "price": 799,
                "imageUrl": "https://picsum.photos/800/800",
                "quantity": 4,
                "_id": "660fdc297acaa7fb3e041c58"
            },
            {
                "productId": "660a616afcfcf1d0135fe323",
                "name": "Apple Watch Series 8",
                "price": 399,
                "imageUrl": "https://picsum.photos/800/800",
                "quantity": 2,
                "_id": "660fdc517acaa7fb3e041c74"
            }
        ],
        "__v": 1
    }
]

const json=response[0].item
// console.log("json",json)

const deleteItem = (id) => {
  // console.log('delete', id);
  const updatedCart = items.filter(item => item.productId !== id);
  setItems(updatedCart);
  // console.log('items new', updatedCart); // Log updatedCart instead of items
};

  return (
    <div>
  
  <div className="container mt-4" >
  <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item active>Cart</Breadcrumb.Item>
    </Breadcrumb>
  </div>


 <div className="container mt-4 mb-3">

 <Card className="shadow-lg">
      
      <Card.Body>
        
        <Card.Text>
      <Row>
        <Col><p>Product</p></Col>
        <Col><p>Price</p></Col>
        <Col><p>Quantity</p>
       
        
        </Col>
        <Col><p>Subtotal</p></Col>
      </Row>
        </Card.Text>

     
       
      </Card.Body>
    </Card>
   

 </div>
 {items.map((i)=>

(
<CartCard
 url={i.imageUrl}
 name={i.name}
 price={i.price}
 quantity={i.quantity}
 id={i.productId}
 deleteItem={() => deleteItem(i.productId)} // Pass deleteItem function as prop
 
 />

 ))}

 

    </div>
  )
}

export default Cart