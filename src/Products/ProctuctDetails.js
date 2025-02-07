import React from 'react'
import {useParams} from 'react-router-dom'
import { useLocation } from 'react-router-dom';


const productsArr = [
    {
      id: 1,
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
   reviews:"The best I've purchased this year, five stars!"
    },
    {
      id: 2,
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
   reviews:"High-quality and comes at a great price, brilliant!"
    },
    {
      id: 3,
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      reviews:["Exceeded my expectations in every way!","Fantastic product with top-notch performance!"]
    },
    {
      id: 4,
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
      reviews:"Affordable and works like a charm, highly impressed!",
    },
    {
      id: 5,
      title: 'T-Shirt',
      price: 500,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Shirt.png',
      reviews:"Affordable and works like a charm, highly impressed!",
  },
  {
      id: 6,
      title: 'Coffee Cup',
      price: 250,
      imageUrl:'https://prasadyash2411.github.io/ecom-website/img/Cofee.png',
      reviews:"Affordable and works like a charm, highly impressed!",
  }
  ];


const ProctuctDetails = () => {
const {id} = useParams();
const product = productsArr.find((p) => p.id== parseInt(id));


if(!product){
    return <h1>Product not found!</h1>;
}
  return (
    <div className="container my-5">
    <h1 className="text-center">{product.title}</h1>
    <div className="text-center">
      <img src={product.imageUrl} alt={product.title} className="img-fluid mb-4" />
    </div>
    <p className="text-center">Price: ${product.price}</p>
    <p className="text-center">Reviews: ${product.reviews}</p>
  </div>
  )
}

export default ProctuctDetails
