import React from 'react'
import { useParams } from 'react-router-dom';
import { HeaderPages } from '../components/header/HeaderPages';

const Test = () => {
  const {testNumber} = useParams()
  return (
    <>
      <div className="container">
        <HeaderPages />
      </div>
      <div className="container">
        <h1>cette page est pour tester la recup des params url Profile</h1> 
        <h1>url {testNumber} </h1>
      </div>
    </>
  );
}

export default Test