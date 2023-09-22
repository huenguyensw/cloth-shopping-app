import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../context/AuthProvider'
import FaceIcon from '@mui/icons-material/Face';
import styled from 'styled-components';
import Link from 'next/link';
import ProfileLayout from '@/components/_layout/ProfileLayout';
import Profile from '@/components/Profile';

interface userInfo {
  firstname: string | '',
  lastname: string | '',
}

interface User {
  _id: string;
  username: string;
  password: string;
  email: string;
  firstname?: string;
  lastname?: string;
  image?: string;
}

const profile = () => {
  const { loggedUser, handleLogout, token, saveLoggedUser } = useContext(AuthContext);
  console.log('loggedUser', loggedUser)
  const [userName, setUserName] = useState<userInfo>({ firstname: loggedUser?.firstname || '', lastname: loggedUser?.lastname || '' });
  const URL = "http://localhost:3001/users/";

  useEffect(() => {
    setUserName({ firstname: loggedUser?.firstname || '', lastname: loggedUser?.lastname || '' });
  }, [loggedUser])

  const handleChangeUserInfo = (e: any) => {

    const updatedUser = {
      ...userName,
      [e.target.name]: e.target.value,
    };
    setUserName(updatedUser);
  }

  const saveUserInformation = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch(`${URL}${loggedUser?._id}`, {
        method: 'PATCH',
        headers: {
          "x-auth-token": token || '',
          "Content-Type": 'application/json',
          'username': loggedUser?.username || '',
        },
        body: JSON.stringify({
          firstname: userName.firstname,
          lastname: userName.lastname,
        })
      })
      const result = await response.json();
      console.log('result', result)
      const updatedLoggedUser = {
        ...loggedUser,
        firstname: userName.firstname,
        lastname: userName.lastname,
      };



      // Call saveLoggedUser to persist the changes
      saveLoggedUser(updatedLoggedUser);

    } catch (error) {
      console.log(error);
    }

  }


  return (
    <ProfileLayout>
      <Profile/>
    </ProfileLayout>

  )
}

export default profile











