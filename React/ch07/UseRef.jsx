import React, { useEffect, useRef, useState } from 'react'

function UseRef() {
    const [name, setName] = useState('')
    const inputRef = useRef();

    useEffect(()=>{
        console.log(inputRef.current);
        inputRef.current.focus();
        
    },[])

    const welcomeLogin = ()=>{
        alert(`Welcome, ${name}!`)
        setName('')
        inputRef.current.focus() 
    }


    return (
    <div>
        <p>useRef 함수는  DOM 요소에 직접 접근 가능</p>
        <p>포커싱 구현</p>
        <input ref = {inputRef} type='text' value = {name} placeholder='이름 입력'
        onChange = {(e)=>{setName(e.target.value)}}/>
        <button onClick={welcomeLogin}>로그인</button>
    </div>
    )
}

export default UseRef