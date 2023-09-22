import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../context/AuthProvider'
import FaceIcon from '@mui/icons-material/Face';
import styled from 'styled-components';
import Link from 'next/link';

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

const Profile = () => {
  const { loggedUser, token, saveLoggedUser } = useContext(AuthContext);
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
    <ProfileContainer>
      {loggedUser &&
        <UserInfoContainer>
          <div>
            {
              loggedUser.image
                ? <img src={`http://localhost:3001/ProfileImages/${loggedUser.image}`}></img>
                : <FaceIcon sx={{ fontSize: 200 }} />
            }
          </div>
          <div>
            <InfoField>Username: {loggedUser.username}</InfoField>
            <InfoField>Email: {loggedUser.email}</InfoField>
            <InfoField>
              <label>Firstname: </label>
              <InputField type='text' name='firstname' value={userName.firstname} onChange={handleChangeUserInfo}></InputField>
            </InfoField>
            <InfoField>
              <label>Lastname: </label>
              <InputField type='text' name='lastname' value={userName.lastname} onChange={handleChangeUserInfo}></InputField>
            </InfoField>
            <Button onClick={saveUserInformation}>Save</Button>
          </div>
        </UserInfoContainer>}
    </ProfileContainer>
  )
}
export default Profile


const ProfileContainer = styled.div`
margin-top: 20px;`

const UserInfoContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
column-gap: 40px;
margin: 20px;
`

const InfoField = styled.div`
margin-bottom: 10px;
`
const Button = styled.button`
margin-right: 20px;
font-size: 1rem;
font-weight: 500;
padding: 5px 10px;
`

const InputField = styled.input`
padding: 7px;
border: 1px solid gray;
border-radius: 5px;`







