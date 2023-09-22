import React, {useContext} from 'react'
import styled from 'styled-components'
import { AuthContext } from '@/context/AuthProvider'
import Link from 'next/link'

const ProfileNav = () => {
    const {handleLogout} = useContext(AuthContext);
  return (
    <Navigation>
        <li><LiItem href="/profile">Edit Information</LiItem></li>
        <li><LiItem href="/shoppingPage">My shopping</LiItem></li>
        <li><LiItem href="/points">My points</LiItem></li>
        <li><LiItem href="#">Contact us</LiItem></li>
        <li><LiItem href="#" onClick={() => handleLogout()}>Logout</LiItem></li>
    </Navigation>
  )
}

export default ProfileNav

const Navigation = styled.ul`
  list-style-type: none;
  margin: 0;
  padding-top: 20px;
  background-color: #f1f1f1;
  // position: fixed;
  height: 100vh;
  overflow: auto;
`


const LiItem = styled(Link)`
display: block;
color: #6495ED;
font-size: 1.1rem;
font-weight: 530;
padding: 8px 16px;
text-decoration: none;
`;