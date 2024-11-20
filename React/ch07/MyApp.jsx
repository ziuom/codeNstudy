import React, { useState } from 'react'
import MyComponent from './MyComponent'

function MyApp() {
    //set 상태변수-MyComponet 호출 여부를 결정
    const [show, setShow] = useState(true)


    return (
    <div>
        <button onClick={()=>setShow(!show)}>{show? 'Hide' : 'Show'} Component</button>
        { show && <MyComponent/> }
    </div>
    )
}

export default MyApp