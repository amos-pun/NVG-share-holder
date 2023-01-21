import React from "react";

const Second = () => {
    return(
        setInterval(() => {
                    let today = new Date ()
                    let ss = today.getSeconds()
                    document.getElementById('ss').innerHTML = ss
                },1000)   
    )
}

export default Second