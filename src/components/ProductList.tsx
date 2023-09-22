import React from 'react'
import ProductItem from './ProductItem'
import styled from 'styled-components'

const ProductList: React.FC<{ products: any }> = ({ products }) => {
  return (      
      <ProductsContainer>

        {products.map((product: any) => <ProductItem key={product._id} product={product} />)}
      </ProductsContainer>
  )
}

export default ProductList

const ProductsContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
row-gap: 20px;
column-gap: 10px;
`
