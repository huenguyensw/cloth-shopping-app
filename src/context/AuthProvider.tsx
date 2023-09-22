import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { createContext, useState, useEffect } from 'react'

interface User {
    _id: string;
    username: string;
    password: string;
    email: string;
    firstname?: string;
    lastname?: string;
    image?:string;
}

interface AuthContextType {
    token: string | null;
    loginError: string;
    loggedUser: Partial<User>;
    setLoggedUser: (user: Partial<User>) => void;
    handleLogin: (userName: string, password: string) => Promise<void>;
    handleLogout: () => Promise<void>;
    saveLoggedUser: (user: Partial<User>) => Promise<void>;
}




// Initialize the context with an initial object
export const AuthContext = createContext<AuthContextType>({
    token: null,
    loginError: '',
    loggedUser: {},
    setLoggedUser: ()=>{},
    handleLogin: async () => {},
    handleLogout: async () => {},
    saveLoggedUser: async() => {},
  });


const AuthProvider: React.FC<{ children: any }> = ({ children }) => {
    const [token, setToken] = useState<string | null>('');
    const [loggedUser, setLoggedUser] =  useState<Partial<User>>({});
    const [loginError, setLoginError] = useState<string>(''); // store error message in case of unsuccessful login
    const API = 'http://localhost:3001/auth/token'
    const router = useRouter();


    const handleLogin = async (userName: string, password: string) => {
        try {
            const response = await fetch(API, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    'username': userName,
                    'password': password,
                })
            })

            const result = await response.json();
            if(result.status == '200'){
                await localStorage.setItem('token', result.accessToken);
                await localStorage.setItem('loggedUserInfo',JSON.stringify(result.data));
                setToken(result.accessToken);
                setLoggedUser(result.data);
                router.push('/')
            } else {
                setLoginError(result.error);
            }
            
        } catch (error) {
            console.log(error);
        }

    }

    const handleLogout = async () => {
        try{
            // await localStorage.removeItem('token');
            await localStorage.removeItem('loggedUserInfo')
            setToken('');
            setLoggedUser({});
            router.push('/')
        }catch(error){
            console.log(error);
        }        
    }

    const isLoggedIn = async() =>{
        console.log('s',loggedUser)
        try{
            const token  = await localStorage.getItem('token');
            const userInfoJson= await localStorage.getItem('loggedUserInfo');
            setToken(token);
            if(userInfoJson){
                const userInfo = JSON.parse(userInfoJson);
                setLoggedUser(userInfo);
            }
            

        }catch(error){
            console.log(error);
        }
    }

    const saveLoggedUser = async(user: Partial<User>) =>{
        // Update the loggedUser state
        setLoggedUser(user);
        try{
            await localStorage.setItem('loggedUserInfo',JSON.stringify(user));
            
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        isLoggedIn();
    },[])
    return (
        <AuthContext.Provider value={{
             token,
             handleLogin, 
             loginError , 
             loggedUser, 
             setLoggedUser, 
             handleLogout,
             saveLoggedUser}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider
