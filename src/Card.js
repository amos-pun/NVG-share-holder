import React from "react";

const Card = ({name, email , id, Username, img}) => {
    return(
        <div className="card bg-secondary m-2 col-4" style={{width:'16rem'}}>
                <img src={img} alt="img." height="200px" className="text-center m-1"/>
            <div>
                <h5>{name}</h5>
                <h4>{Username}</h4>
                <p>{email}</p>

            </div>
        </div>
    )
}

export default Card