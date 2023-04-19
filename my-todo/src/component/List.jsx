import React, { useState } from "react";
import Card from './Card'



const List = () => {
  const [title, setTitle] = useState('');
  const [cart, setCart] = useState([]);
  const [toggleSubmit, settogglesubmit] = useState(true);
  const [edititem, setedititem] = useState(null);
 
  const handdleSave = (e) => {
    setTitle(e.target.value)
  }
  const Addlist = () => {
    if(title === ''){
      alert("please enter a value");
    };
    if (title !== '' && toggleSubmit) {
      const item = [...cart, title]
      setCart(item)
      setTitle('')
      localStorage.setItem("tasklist", JSON.stringify(item))
    }
    else if (title !== '' && !toggleSubmit) {
      setCart(
        cart.map((element, i)=>{
            if ( i === edititem){
              return element = title;

            }
            return element
        })
      )
      settogglesubmit(true);
      setTitle('');
      setedititem(null);
    }
  }
  const handdleEdit = (id) =>{
    const oldeditable = cart
    const Edittable = oldeditable.find((element, index)=>{
      return index === id
    });
    settogglesubmit(false);
    setTitle(Edittable);
    setedititem(id);
  }

  const handleDelete = (id) => {
    const olditem = cart;
    console.log(olditem);
    const newitem = olditem.filter((element, i) => {
      return i !== id;
    });
    setCart(newitem)
    console.log(newitem);
  }
  
  return (
    <>
      <div>
        <div className="header text-center"><h1>My Todo</h1>
          <div>
            <input type="text" className="inputElement mt-3" value={title} onChange={handdleSave} />
            { 
            
            toggleSubmit ? <button className="btn btn-primary" onClick={Addlist}>Add</button> :<button className="btn btn-primary" onClick={Addlist}>Edit</button>
       }
          </div>
        </div>
        <div className="card-list">
          <div className="card-container">
            {cart.map((obj, index) => {
              return <Card taskObj={obj} index={index} handleDelete={handleDelete} handdleEdit={handdleEdit} cart={cart} />
            })}
          </div>
        </div>

      </div>

    </>
  )

}

export default List;