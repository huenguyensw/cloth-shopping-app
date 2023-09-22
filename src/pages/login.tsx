import React, { useState, useContext } from 'react'
import { styled } from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import { AuthContext } from '../context/AuthProvider';

const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const { handleLogin, loginError } = useContext<any>(AuthContext);

  const changeUserName = (e: any) => {
    setUserName(e.target.value);
  }

  const changePassword = (e: any) => {
    setPassword(e.target.value);
  }
  return (
    <LoginContainer>
      <Header>
        <CloseIcon />
      </Header>
      <Title>Login</Title>
      <div>
        <div>
          <label>Username:</label>
          <TextField type='text' value={userName} onChange={changeUserName} />
        </div>
        <div>
          <label>Password: </label>
          <TextField type='text' value={password} onChange={changePassword} />
        </div>
      </div>

      {loginError != '' && <p style={{color: 'red'}}>{loginError}</p>}
      <BtnContainer>
        <Button style={{backgroundColor: '#6495ED'}} onClick={() => handleLogin(userName, password)}>Login</Button>
        <Button>Register</Button>
      </BtnContainer>

    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.div`
position: sticky;
border: 1px solid powderblue;
border-radius: 8px;
padding: 10px 20px;
margin: 30px 35%; 
display: flex;
background-color: powderblue;
flex-direction: column;
row-gap: 5px;
`

const TextField = styled.input`
padding: 7px;
margin-bottom: 15px;
border: 1px solid powderblue;
border-radius: 5px;
width: 95%;`

const Button = styled.button`
padding: 7px;
border: 1px solid powderblue;
border-radius: 5px;
margin-bottom: 15px;
font-size: 17px;
`

const Title = styled.p`
font-size: 35px;
text-align: center;
margin-bottom: 20px;
`

const Header = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
margin-bottom: 0px;
margin-top: 0;`

const BtnContainer = styled.div`
display: flex;
flex-direction: column;
margin-top: 20px;`

