import React from 'react'
import { styled } from 'styled-components'

const Banner = () => {
    return (
        <BannerSection>
            <BannerImage src='../world_of_toys-removebg2.png' />
            <BannerImage src='../banner2-removebg.png' />
        </BannerSection>
    )
}

export default Banner

const BannerSection = styled.div`
display: flex;
flex-direction: column;`

const BannerImage = styled.img`
width: 80%;
height: 80%;
object-fit: cover;`
