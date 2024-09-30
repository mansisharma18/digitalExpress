import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';
import { backendHost } from '../ApiConfig';

const TodaysDetail = () => {
  const [item, setItem] = useState({});
  const params = useParams();

  console.log("id",params.id)

  const response={
      "_id": "660a6200fcfcf1d0135fe336",
      "name": "Meta Quest 2 VR Headset",
      "price": 299,
      "brandName": "Meta",
      "description": "Enter a new world of immersive experiences with the Meta Quest 2. Play incredible VR games, explore virtual worlds, and attend live events, all without the need for a PC or console.",
      "starrating": 4.2,
      "stock": 16,
      "categories": [
        "Gaming"
      ],
      "imageUrl": "https://picsum.photos/800/800",
      "__v": 0
    }

  useEffect(() => {
    fetch(`${backendHost}/products/getProduct/${params.id}`)
      .then((res) => res.json())
      .then((json) => {
        setItem(json);
      });
  }, []);

  // Define image URL
  const imageUrl =  'https://picsum.photos/800/800';

  return (
    <Container className="p-3">
      <Row>
        <Col xs={12} md={2}>
          <div>
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="mb-3">
                <img src={imageUrl} alt="img" className="img-fluid" />
              </div>
            ))}
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div>
            <img src={imageUrl} alt="img" className="img-fluid mb-3" />
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div>
            <h4>{item.name}</h4>
            <p>{item.starrating}</p>
            <p>Rs {item.price}</p>
            <p>{response.description}</p>
            <hr />
            <span>Colours:</span>
            <p>Size: {item.size}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TodaysDetail;
