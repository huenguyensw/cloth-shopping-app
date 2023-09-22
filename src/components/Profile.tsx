import React, { useContext, useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider'
import FaceIcon from '@mui/icons-material/Face';
import styled from 'styled-components';
import axios from 'axios';

interface userInfo {
  firstname: string | '',
  lastname: string | '',
}


const Profile = () => {
  // const Params = useParams();
  const {
    loggedUser,
    token,
    saveLoggedUser } = useContext(AuthContext);

  const [
    userName,
    setUserName
  ] = useState<userInfo>({
    firstname: loggedUser?.firstname || '',
    lastname: loggedUser?.lastname || ''
  });
  const URL = "http://localhost:3001/users/";

  const [profileImage, setProfileImage] = useState<any>({});
  const [image, setImage] = useState<any>('');

  const handleFiles = (e: any) => {
    setProfileImage(e.target.files[0].name);

    //render image
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage(reader.result);
    }
    reader.onerror = error => {
      console.log("Error:", error)
    }
  }

  useEffect(() => {
    setUserName({
      firstname: loggedUser?.firstname || '',
      lastname: loggedUser?.lastname || ''
    });
    if(loggedUser.image){
      setImage(encodeURI(loggedUser.image))
    }
  }, [loggedUser])

  const handleChangeUserInfo = (e: any) => {

    const updatedUser = {
      ...userName,
      [e.target.name]: e.target.value,
    };
    setUserName(updatedUser);
  }

  const saveUserInformation = async (e: any) => {
    var formData = new FormData();
    formData.append('image', profileImage);
    formData.append('firstname', userName.firstname);
    formData.append('lastname', userName.lastname);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-auth-token" : token,
        'username': loggedUser.username,
      }
    }

    try{
      const res = await axios.patch(`${URL}${loggedUser._id}`, formData, config);
      if(res.status !== 200){
        throw new Error('Error updating product. Please try again later.')
      }
    } catch(error){
      console.log(error)
    }

  }




  return (
    <ProfileContainer>
      {loggedUser &&
        <UserInfoContainer>
          <div>
            {(image === '' || image === null)
              ? <FaceIcon sx={{ fontSize: 200 }} />
              : <img src={`${URL}uploads/${image}`} width={450} height={400} alt='product-image'></img>}
          </div>
          <div>
            Upload image file:
            <br />
            <input type="file" name='profileImage' onChange={handleFiles} />
          </div>
          {/* <div>
            {
              loggedUser.image
                ? <img src={`http://localhost:3001/ProfileImages/${loggedUser.image}`}></img>
                : <FaceIcon sx={{ fontSize: 200 }} />
            }
          </div> */}
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







