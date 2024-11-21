import React from "react";


function Menu(props){
    return(
        <div>
            <h1>{ props.name}</h1>
            <p>{ props.price}</p>
        </div>
    )
}

export default Menu;