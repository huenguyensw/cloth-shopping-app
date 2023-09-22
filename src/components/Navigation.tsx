import React, { useContext } from 'react'
import styled from 'styled-components'
import { ProductContext } from '@/context/ProductProvider'

const Navigation = () => {
  const {isHomePage} = useContext(ProductContext);
  console.log('o',isHomePage)
  return (
    <NavSection style={{visibility: isHomePage==true?'visible':'hidden'}}>
        <LinkNode href='/#products' >Products</LinkNode>
        <LinkNode href='/#sales' >Sales</LinkNode>
        <InputField type='text' placeholder='Search...' />
    </NavSection>
  )
}

export default Navigation


const InputField = styled.input`
border: none;
border-radius: 5px 5px;
padding: 5px;
width: 300px;
background-color: #f1f1f1; 
font-size: ${({ theme }) => theme.spacing.medium};
&:: placeholder {
  color: #6495ED;
}

`

const NavSection = styled.div`
position: sticky;
top: 70px;
display: flex;
flex-direction: row;
justify-content: flex-end;
margin-top: 10px;
gap: 20px;
align-items: center;
font-size: ${({ theme }) => theme.spacing.large};
font-weight: 600;
margin-bottom: 5px;
margin-right: 5px;
`
const LinkNode = styled.a`
text-decoration: none;
color: #6495ED;

`