import Banner from '@/components/Banner';
import Header from '@/components/Header';
import ProductList from '@/components/ProductList';
import React, { useState, useEffect } from 'react'

export default function ProductsPage() {
    const API = 'http://localhost:3001/toys'
    const [isError, setIsError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    const getData = async() =>{
        try{
            const response = await fetch(API);
            const result = await response.json();
            setIsLoading(false);
            setIsError(null);
            setData(result);
        }catch(error: any){
            setIsLoading(false);
            setIsError(error.message);
        }
    }
    useEffect(()=>{
        getData();
    },[])
  return (
    <div id='products'>
        <Banner/>
        {isLoading
        ? <h1>Loading...</h1>
        : isError
        ? <h1>{isError}</h1>
        : <ProductList products={data}/>}
    </div>
  )
}
