import React,{useState,useEffect} from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { useParams } from "react-router-dom";
import { backendHost } from '../ApiConfig';


const TodaysDetail = () => {


const[items,setItems]=useState({})

    const params = useParams();
    console.log("id",params.id)

    useEffect(()=>{
  
        fetch(`${backendHost}/products/getProduct/${params.id}`)
        .then(res=>res.json())
        .then(json=>{
            setItems(json)
            console.log("items",json)
        })

    },[])

  return (
    <div>
        <Container className="p-5">
            <Row>
                <Col md={3}>
                    <div> 
                        <div style={{width:"8rem",height:"6rem",backgroundColor:"pink",marginBottom:"2rem"}}></div>
                        <div style={{width:"8rem",height:"6rem",backgroundColor:"pink",marginBottom:"2rem"}}></div>
                        <div style={{width:"8rem",height:"6rem",backgroundColor:"pink",marginBottom:"2rem"}}></div>
                        <div style={{width:"8rem",height:"6rem",backgroundColor:"pink",marginBottom:"2rem"}}></div>
                    </div>
                   </Col>
                <Col md={5}>
                    <div style={{backgroundColor:"pink",height:"30rem"}}>image</div>
                    </Col>
                <Col md={4}>
                    <div>
                        <h4>{items.name}</h4>
                        <p>{items.starrating}</p>
                        <p>Rs {items.price}</p>
                        <p>{items.description}</p>
                        <hr/>
                        <span>Colours:</span>
                        <p>Size: {items.size}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default TodaysDetail