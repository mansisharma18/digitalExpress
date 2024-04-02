import React, { useEffect,useState } from 'react';
import { backendHost } from '../ApiConfig';
import TodaysCard from './TodaysCard';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';


const Todays = () => {
  const [products,setProducts]=useState([])
  const items = [
    { description: "HAVIT HV G-92 Gamepad", price: "120", rating: "5" },
    { description: "AK-900 Wired Keyboard", price: "320", rating: "4" },
    { description: "IPS LCD Gaming Monitor", price: "270", rating: "5" },
    { description: "S Series Comfort Chair Dual", price: "298", rating: "3" },
    { description: "QS-1200 Wireless Airpods", price: "320", rating: "4" },
  ];

  useEffect(() => {
    fetch(`${backendHost}/products/productLists`)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setProducts(json.products)
      });
  }, []);

  return (
    <div>
      <h2>Today's Featured</h2>
      <OwlCarousel className='owl-theme' loop margin={10} items={4} nav>
        {products && products.map((i, index) => (
          <div key={index}>
            <Link to={`/todaysdetail/${i._id}`} className="text-decoration-none"> <TodaysCard
              description={i.name}
              price={i.price}
              rating={i.starrating}
            /></Link>
           
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Todays;
