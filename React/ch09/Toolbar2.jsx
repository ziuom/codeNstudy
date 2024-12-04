import React, { useState } from 'react'

function Toolbar2(props) {
    const { isLoggedIn, onClickLogin, onClickLogout } = props;
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");

    //correctId='admin’, correctPwd='1234' 예시
    const correctId = "admin";
    const correctPwd = "1234";
    
    const handleLogout = () => {
        setId('')
        setPwd('')
        onClickLogout()
    };

    const handleLogin = () => {
        if(id===correctId && pwd===correctPwd){ 
            onClickLogin() 
            }
        else { 
            //아이디와 비밀번호가 일치하지 않습니다.” 경고창 출력 
            alert('아이디와 비밀번호가 일치하지 않습니다.')
            //입력창 초기화
            setId('')
            setPwd('')
        }
    };

    return (
        <div style={styles.wrapper}>
            { isLoggedIn ? 
            (<div>
                <span>{id}님 환영합니다.</span>
                <button onClick={handleLogout}>로그아웃</button>
                </div>
            ):
            (<div>
                <input type='text' value={id} placeholder='아이디'
                onChange={(e)=>setId(e.target.value)}/>
            <input type='password' value={pwd} placeholder='비밀번호'
                onChange={(e)=>setPwd(e.target.value)}/>
                <button onClick={handleLogin}>로그인</button>
            </div>

            )

        }
        </div>
    );
}

const styles = {
    wrapper: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid grey",
        },
    greeting: {
        marginRight: 8,
    },
};


export default Toolbar2