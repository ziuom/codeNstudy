import React, { useEffect } from 'react'

function CleanUP() {
    let count = 0;

    useEffect(() => {
    const timer = setInterval(() => {
        console.log("타이머 실행중...",count++)
    }, 1000)

    //클린업 함수 정의
    return () => {
        clearInterval(timer);
        console.log('타이머 정리');
    }
    }, [])

    return (
    <div>클린업 이용한 타이머 예제</div>
    )
}

export default CleanUP
