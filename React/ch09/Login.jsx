import React, { useEffect, useRef, useState } from 'react'

const Login = ()=> {
    const [id, setId] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const inputRef = useRef()

    const correctId = 'admin'
    const correctEmail = 'admin@naver.com'

    useEffect(()=>{
        inputRef.current.focus();
    },[])  //컴포넌트가 호출될 때(마운트될 때) 한번만 실행됨

    //사용자가 입력한 아이디와 이메일이 같을 경우에는 인사말 출력, 다를 경우에는 경고창 출력
    const submitLogin = ()=>{
        if(correctId === id && correctEmail === userEmail){
            setSubmitted(true)
        }else{
            alert('아이디와 이메일을 확인하세요')
            setId('')
            setUserEmail('')
            inputRef.current.focus()
        }
        
    }

    return (
    <div>
        <h1>로그인</h1>
        <div>
            <label>아이디</label>
            <input ref={inputRef} type='text' value={id} onChange = {(e)=>setId(e.target.value)}
                placeholder="아이디입력"/><br/>
            <label>이메일</label>
            <input type='email' value={userEmail} onChange = {(e)=>setUserEmail(e.target.value)}
            placeholder="이메일입력"/><br/>
        </div>
            <button onClick={submitLogin}>로그인</button>
        <div>
            {/* 사용자가 클릭했을 때에만, 입력값을 출력하기*/}
            {submitted && ( 
                <div>
                    <h1>{id}님 환영합니다.</h1>
            </div>)
            }
        </div>
    </div>
    )
}

export default Login