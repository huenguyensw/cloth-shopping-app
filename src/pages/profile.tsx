import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../context/AuthProvider'
import FaceIcon from '@mui/icons-material/Face';
import styled from 'styled-components';
import Link from 'next/link';
import ProfileLayout from '@/components/_layout/ProfileLayout';
import Profile from '@/components/Profile';


const profile = () => {

  return (
    <ProfileLayout>
      <Profile/>
    </ProfileLayout>

  )
}

export default profile











