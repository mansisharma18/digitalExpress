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
    { description: "HAVIT HV G-92 Gamepad", price: "120", rating: "5",id:1 },
    { description: "AK-900 Wired Keyboard", price: "320", rating: "4",id:2 },
    { description: "IPS LCD Gaming Monitor", price: "270", rating: "5",id:3 },
    { description: "S Series Comfort Chair Dual", price: "298", rating: "3",id:4 },
    { description: "QS-1200 Wireless Airpods", price: "320", rating: "4",id:5 },
  ];

  const response= {
    "products": [
      {
        "_id": "660a6156fcfcf1d0135fe31f",
        "name": "OnePlus 11 5G",
        "price": 799,
        "brandName": "OnePlus",
        "description": "Experience blazing-fast performance with the OnePlus 11 5G. Powered by a top-tier Snapdragon processor, this phone delivers smooth multitasking, immersive gaming, and stunning visuals on its AMOLED display.  Capture amazing photos and videos with its advanced camera system.",
        "starrating": 4.6,
        "stock": 10,
        "categories": [
          "Phone"
        ],
        "imageUrl": "https://picsum.photos/300/400",
        "__v": 0
      },
      {
        "_id": "660a6161fcfcf1d0135fe321",
        "name": "Dell XPS 15 Laptop",
        "price": 1599,
        "brandName": "Dell",
        "description": "Unleash your creativity with the Dell XPS 15. This powerful laptop features a stunning display, a dedicated graphics card, and a comfortable keyboard. Ideal for photo and video editing, design work, and demanding software.",
        "starrating": 4.4,
        "stock": 5,
        "categories": [
          "Computers"
        ],
        "imageUrl": "https://picsum.photos/300/400",
        "__v": 0
      },
      {
        "_id": "660a616afcfcf1d0135fe323",
        "name": "Apple Watch Series 8",
        "price": 399,
        "brandName": "Apple",
        "description": "Stay connected, monitor your health, and reach your fitness goals with the Apple Watch Series 8. Track your activity levels, sleep patterns, and heart rate. Answer calls, send messages, and enjoy the seamless integration with your iPhone.",
        "starrating": 4.7,
        "stock": 20,
        "categories": [
          "Smart Watch"
        ],
        "imageUrl": "https://picsum.photos/300/400",
        "__v": 0
      },
      {
        "_id": "660a6172fcfcf1d0135fe325",
        "name": "Bose QuietComfort Earbuds II",
        "price": 279,
        "brandName": "Bose",
        "description": "Experience world-class noise cancellation and immersive audio with the Bose QuietComfort Earbuds II.  Block out distractions and focus on your music or calls. Enjoy a comfortable fit and long battery life for all-day listening.",
        "starrating": 4.5,
        "stock": 12,
        "categories": [
          "Headphone"
        ],
        "imageUrl": "https://picsum.photos/300/400",
        "__v": 0
      },
      {
        "_id": "660a617efcfcf1d0135fe327",
        "name": "Logitech G502 X Gaming Mouse",
        "price": 79.99,
        "brandName": "Logitech",
        "description": "Gain a competitive edge with the Logitech G502 X Gaming Mouse.  Its ultra-precise sensor, customizable buttons, and ergonomic design give you the accuracy and control you need.  The RGB lighting adds a touch of personalization.",
        "starrating": 4.8,
        "stock": 18,
        "categories": [
          "Gaming"
        ],
        "imageUrl": "https://picsum.photos/300/400",
        "__v": 0
      },
      {
        "_id": "660a61bdfcfcf1d0135fe329",
        "name": "Samsung Galaxy S23 Ultra",
        "price": 1199,
        "brandName": "Samsung",
        "description": "Capture incredible photos and videos with the Samsung Galaxy S23 Ultra.  Its advanced camera system, featuring a 200MP main sensor, delivers stunning detail and clarity.  Experience smooth performance with its powerful processor and enjoy a beautiful, immersive display.",
        "starrating": 4.7,
        "stock": 8,
        "categories": [
          "Phone"
        ],
        "imageUrl": "https://picsum.photos/300/400",
        "__v": 0
      },
      {
        "_id": "660a61c4fcfcf1d0135fe32b",
        "name": "Razer Blade 15 Gaming Laptop",
        "price": 2499,
        "brandName": "Razer",
        "description": "Dominate the virtual battlefield with the Razer Blade 15. This gaming powerhouse boasts a high-refresh-rate display, top-of-the-line graphics card, and a powerful processor. Its sleek design and customizable RGB lighting add to the immersive experience.",
        "starrating": 4.6,
        "stock": 3,
        "categories": [
          "Computers",
          "Gaming"
        ],
        "imageUrl": "https://picsum.photos/300/400",
        "__v": 0
      },
      {
        "_id": "660a61ccfcfcf1d0135fe32d",
        "name": "Fitbit Sense 2",
        "price": 249,
        "brandName": "Fitbit",
        "description": "Optimize your health and wellness with the Fitbit Sense 2. Track your heart rate, stress levels, sleep patterns, and more. Utilize built-in GPS for tracking workouts and enjoy a long battery life for all-day monitoring.",
        "starrating": 4.3,
        "stock": 15,
        "categories": [
          "Smart Watch"
        ],
        "imageUrl": "https://picsum.photos/300/400",
        "__v": 0
      },
      {
        "_id": "660a61d2fcfcf1d0135fe32f",
        "name": "Sony WH-1000XM5 Headphones",
        "price": 399,
        "brandName": "Sony",
        "description": "Shut out the world and immerse yourself in music with the Sony WH-1000XM5 Headphones.  Industry-leading noise cancellation, premium audio quality, and a comfortable, over-ear design provide an exceptional listening experience.",
        "starrating": 4.8,
        "stock": 9,
        "categories": [
          "Headphone"
        ],
        "imageUrl": "https://picsum.photos/300/400",
        "__v": 0
      },
      {
        "_id": "660a61eefcfcf1d0135fe332",
        "name": "HyperX Cloud Alpha Wireless Headset",
        "price": 199,
        "brandName": "HyperX",
        "description": "Enjoy wireless freedom and exceptional comfort with the HyperX Cloud Alpha Wireless Headset.  Its long-lasting battery  and signature HyperX sound deliver an incredible gaming experience. The detachable microphone ensures clear communication.",
        "starrating": 4.5,
        "stock": 11,
        "categories": [
          "Gaming",
          "Headphone"
        ],
        "imageUrl": "https://picsum.photos/300/400",
        "__v": 0
      },
      {
        "_id": "660a61f7fcfcf1d0135fe334",
        "name": "Nikon Z50 Mirrorless Camera",
        "price": 859,
        "brandName": "Nikon",
        "description": "Capture stunning photos and videos with the compact and capable Nikon Z50. This mirrorless camera boasts a large image sensor, fast autofocus,  and 4K video capabilities. Perfect for travel, vlogging, and everyday photography.",
        "starrating": 4.4,
        "stock": 7,
        "categories": [
          "Computers"
        ],
        "imageUrl": "https://picsum.photos/300/400",
        "__v": 0
      },
      {
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
        "imageUrl": "https://picsum.photos/300/400",
        "__v": 0
      }
    ]
  }

  const json=response.products

  useEffect(() => {
    fetch(`${backendHost}/products/productLists`)
      .then(res => res.json())
      .then(json => {
        console.log("products",json);
        setProducts(json.products)
      });
  }, []);

  return (
    <div>
      <h2>Today's Featured</h2>
      <OwlCarousel className='owl-theme' loop margin={10} items={4} nav>

        {!products && (
          <>
          Loading</>
        )}
        {/* {products && products.map((i, index) => (
          <div key={index}>
            <Link to={`/todaysdetail/${i._id}`} className="text-decoration-none"> <TodaysCard
              description={i.name}
              price={i.price}
              rating={i.starrating}
            /></Link>
           
          </div>
        ))} */}

{json && json.map((i, index) => (
          <div key={index}>
           
               <TodaysCard
              description={i.name}
              price={i.price}
              rating={i.starrating}
              url={i.imageUrl}
              id={i._id}
            />        
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};


export default Todays;
