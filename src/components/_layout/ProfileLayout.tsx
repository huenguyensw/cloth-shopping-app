import React from 'react'
import ProfileNav from '../ProfileNav'
import styled from 'styled-components'

const ProfileLayout: React.FC<{children: any}> = ({children}) => {
  return (
    <ProfileContainer>
      <ProfileNav/>
      <main>{children}</main>
    </ProfileContainer>
  )
}

export default ProfileLayout


const ProfileContainer = styled.div`
display: grid;
grid-template-columns: 1fr 4fr;`