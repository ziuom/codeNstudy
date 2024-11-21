import React from "react";
import Menu from "./Menu";

function App(props){
    return(
        <div>
            <Menu price = "3000원" name = "아메리카노" />
            <Menu price = "3500원" name = "카페라떼" />
        </div>
    )
}

export default App;