import React, { useState } from 'react'
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import Greeting from './Greeting';

function LoginControl(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false) //false값은 로그아웃 상태를 의미

    const handleLogout = ()=>{
        setIsLoggedIn(false)
    }

    const handleLogin = ()=>{
        setIsLoggedIn(true)
    }

    let button;   //엘리먼트를 저장하는 변수->엘리먼트 변수

    if(isLoggedIn){
        button = <LogoutButton onClick={handleLogout} />
    }else {
        button = <LoginButton onClick={handleLogin} />
    }

    return (
    <div><Greeting isLoggedIn={isLoggedIn}/>{button}</div>
    )
}

export default LoginControl