import React, { useState } from 'react'
import { styled } from 'styled-components'

const ProductItem: React.FC<{ product: any }> = ({ product }) => {
    const API = 'http://localhost:3001/uploads/'
    const [items, setItems] = useState(0);

    const changeItem =  (e: any) =>{
        setItems(e.target.value);
    }
    const increaseItem =() => {
        setItems((item:any)=> item+1);
    }
    const decreaseItem = () =>{
        
    }
    return (
        <ProductContainer>
            <ProductImage src={API + product.image}></ProductImage> 
            <Title>{product.title}</Title>
            <p>{product.description}</p>
            <p>{product.price}</p>
            {product.quantity<=0
            ? <p style={{color: 'red'}}>Out-of-stock</p>
            : <p>In-stock</p>}
            <input type='text' value={items} onChange={changeItem}/>
            <button onClick={increaseItem}>+</button>
        </ProductContainer>
    )
}

export default ProductItem

const ProductContainer = styled.div`
display: flex;
flex-direction: column;
border: none;
border-radius: 5px;
width: 300px;
row-gap: 7px;
padding:  ${({ theme }) => theme.spacing.medium};
background-color: ${({ theme }) => theme.colors.secondary};
`

const ProductImage = styled.img`
width: 250px;
height: 250px;
`

const Title = styled.p`
font-size: ${({theme}) => theme.spacing.large}`