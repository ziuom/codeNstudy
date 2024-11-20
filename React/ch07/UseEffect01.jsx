//useEffect 훅함수 사용-컴포넌트가 처음 호출되거나 렌더링될 때마다 부수적인 작업 실행을 기술하는 함수
import React, { useEffect, useState } from 'react'

const UseEffect01 = () =>{
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')

    //1. 렌더링될때마다 호출되는 useEffect(), 의존성배열을 표기하지 않는다.
    //2. 마운트될 때에만 호출되는  useEffect(), 빈의존성배열을 표기한다.
    //3. 특정 상태변수에 의존해서 호출되는 useEffect(), 의존성 배열에 관련 상태변수를 넣는다.
    useEffect(()=>{
        document.title = `count: ${count}로 바뀝니다.`
        console.log(`count: ${count}`)
    },[count,text])  //의존성배열 count 상태변수 표기

    const increase = ()=>{
        setCount(count+1)
        //onsole.log(`count: ${count}`)
    }
    return (
    <div>
        <p>총 {count}번 클릭했습니다</p>
        <button onClick={increase}>UP</button>
        <p>사용자 입력</p>
        <input type='text' value={text} onChange = {(e)=>setText(e.target.value)}/>
    </div>
    )
}

export default UseEffect01