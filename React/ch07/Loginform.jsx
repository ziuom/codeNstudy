import React, {useState} from 'react'

function Loginform() {
    const [username, setUsername] = useState("");
    const [phonenumber, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");  // gender 상태 추가
    const [hobbies, setHobbies] = useState([]); // hobbies 상태 추가
    const [submitted, setSubmitted] = useState(false);

    const handleLogin = () => {
        setSubmitted(true);
    };

    const handleHobbyChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setHobbies([...hobbies, value]); // 선택한 취미 추가
        } else {
            setHobbies(hobbies.filter((hobby) => hobby !== value)); // 선택 해제된 취미 제거
        }
    };

    return (
        <div style={styles.container}>
            <h2>사용자 정보 입력</h2>
            <div style={styles.form}>
                <label style={styles.label}>아이디 </label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={styles.input}
                />
            </div>

            <div style={styles.form}>
                <label style={styles.label}>연락처 </label>
                <input
                    type="text"
                    value={phonenumber}
                    onChange={(e) => setNumber(e.target.value)}
                    style={styles.input}
                />
            </div>

            <div style={styles.form}>
                <label style={styles.label}>이메일</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                />
            </div>

            <div style={styles.form}>
                <label style={styles.label}>성별</label>
                <div style={styles.radioGroup}>
                    <input
                        type="radio"
                        value="남성"
                        checked={gender === "남성"}
                        onChange={() => setGender("남성")}
                    /> 남성
                    <label style={styles.radioLabel}>
                        <input
                            type="radio"
                            value="여성"
                            checked={gender === "여성"}
                            onChange={() => setGender("여성")}
                        /> 여성
                    </label>
                </div>
            </div>

            <div style={styles.form}>
                <label style={styles.label}>취미</label>
                <div style={styles.hobbyGroup}>
                    <label style={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            value="운동"
                            onChange={handleHobbyChange}
                            style={styles.checkboxInput}
                        /> 운동
                    </label>
                    <label style={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            value="독서"
                            onChange={handleHobbyChange}
                            style={styles.checkboxInput}
                        /> 독서
                    </label>
                    <label style={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            value="영화 감상"
                            onChange={handleHobbyChange}
                            style={styles.checkboxInput}
                        /> 영화 감상
                    </label>
                </div>
            </div>


            <button style={styles.button} onClick={handleLogin}>
                제출
            </button>

            {submitted && (
                <div style={styles.output}>
                    <p>
                        <strong>아이디: </strong> {username}
                    </p>
                    <p>
                        <strong>연락처: </strong> {phonenumber}
                    </p>
                    <p>
                        <strong>이메일: </strong> {email}
                    </p>
                    <p>
                        <strong>성별: </strong> {gender}
                    </p>
                    <p>
                        <strong>취미: </strong> {hobbies.join(", ")}
                    </p>
                </div>
            )}
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
    },
    form: {
        marginBottom: "10px",
        display: "flex",
        alignItems: "center",
    },
    label: {
        marginRight: "20px",  // '취미'와 체크박스 간의 간격을 넓힘
    },
    radioGroup: {
        display: "flex",
        alignItems: "center",
    },
    hobbyGroup: {
        display: "flex",
        alignItems: "center",
    },
    radioLabel: {
        marginLeft: "10px",  // 라디오 버튼 간의 간격
    },
    checkboxLabel: {
        display: "flex",
        alignItems: "center",
        marginRight: "15px",  // 체크박스 그룹 간의 간격을 조정
    },
    checkboxInput: {
        marginRight: "5px",  // 체크박스와 취미 이름 간의 간격을 좁힘
    },
    input: {
        padding: "8px",
        marginRight: "5px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        width: "200px",
    },
    button: {
        padding: "5px 20px",
        color: "#000000",
        border: "solid 1px",
        borderRadius: "5px",
        cursor: "pointer",
        marginTop: "10px",
    },
    output: {
        marginTop: "20px",
        textAlign: "center",
    },
};




export default Loginform;