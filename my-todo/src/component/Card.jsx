import React from 'react';

const Card = ({ taskObj, index,cart, handdleEdit, handleDelete }) => {
    console.log(taskObj, index,handdleEdit, handleDelete);
    return (
        <>

            <div className="card" >
                <div className="card-body">
                    <p classNmae="card-text">{taskObj}</p>
                    <button className="card-link" onClick={()=>{handdleEdit(index)}}>Edit</button>
                    <button className="card-link" > as read</button>
                    <button className="card-link" id={index} onClick={() => { handleDelete(index) }}>delete</button>
                </div>
            </div>
        </>

    );
};

export default Card;