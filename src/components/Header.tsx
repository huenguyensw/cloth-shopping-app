'use client'
import React, {useEffect, useContext} from 'react'
import styled from 'styled-components'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AuthContext } from '@/context/AuthProvider';
import { ProductContext } from '@/context/ProductProvider';
import Navigation from './Navigation';
import Link from 'next/link';


export default function Header() {
    const {token} = useContext(AuthContext);
    const {setIsHomePage, isHomePage} = useContext(ProductContext);
    console.log('isHomePage',isHomePage)

    return (
        <HeaderContainer>
            <HeaderSection>
                <Logo href="/" onClick={()=>setIsHomePage(true)}>T.O.Y</Logo>
                <Navigation/>
                <NavPage id="ontop">
                    <NavItem>
                        <AccountBoxIcon/> 
                        {token
                        ? <LinkNode href='/profile' onClick={() => setIsHomePage(false)}>My page</LinkNode>
                        : <LinkNode href="/login" onClick={()=>setIsHomePage(false)}>Login</LinkNode>
                        }
                    </NavItem>
                    <NavItem>
                        <FavoriteBorderIcon/>
                        <LinkNode href="/favorite" onClick={()=>setIsHomePage(false)}>Favorite</LinkNode>
                    </NavItem>
                    <NavItem>
                        <ShoppingCartIcon/>
                        <LinkNode href="#" onClick={()=>setIsHomePage(false)}>Cart</LinkNode>

                    </NavItem>
                </NavPage>
            </HeaderSection>
            
        </HeaderContainer>

    )
}

const LinkNode = styled(Link)`
text-decoration: none;
color: black;
`
const HeaderContainer = styled.div`
position: sticky;
top: 0;
left: 0;
padding: 5px 5px 10px 5px;
color: #6495ED;
background-color: ${({ theme }) => theme.colors.primary};
`
const HeaderSection = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
color: #6495ED;
`
const NavPage = styled.div`
display: flex;
flex-direction: row;
gap: 20px;
align-items: center;
font-size: ${({ theme }) => theme.spacing.medium};
`
const Logo = styled.a`
text-decoration: none;
color: #6495ED;
font-size: 3rem;
text-shadow: 1px 3px 3px;
`

const NavItem = styled.div`
display: flex;
flex-direction: row;
align-items: center;`