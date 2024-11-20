import React, { useEffect } from 'react'

function MyComponent() {

    useEffect(()=>{
        console.log("화면에 나타남")
    }, [])

    return (
    <div>컴포넌트 클린업 예제</div>
    )
}

export default MyComponent