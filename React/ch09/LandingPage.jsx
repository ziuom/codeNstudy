import React, { useState } from 'react'
//import Toolbar from './Toolbar'
import Toolbar2 from './Toolbar2'

function LandingPage(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const onClickLogin = ()=>{
        setIsLoggedIn(true)
    }

    const onClickLogout = ()=> {
        setIsLoggedIn(false)
    }

    return (
    <div>
        <Toolbar2 isLoggedIn={isLoggedIn} 
            onClickLogin={onClickLogin} 
            onClickLogout={onClickLogout}/>
        <div>소플과 함께하는 리액트 공부!</div>
    </div>
    )
}

export default LandingPage