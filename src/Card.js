import React from "react";

const Card = ({name, email , id, Username}) => {
    return(
        <div className="card bg-secondary m-2 col-4" style={{width:'16rem'}}>
                <img src={`https://robohash.org/test${id}`} alt="img." className="text-center"/>
            <div>
                <h2>{name}</h2>
                <h4>{Username}</h4>
                <p>{email}</p>

            </div>
        </div>
    )
}

export default Card