import React, { useState } from "react";
import styles from "./App.module.css";

const App = () => {
    


const[name,setName]=useState("");
const[image,setImage]=useState("");
const[count,setCount]=useState("");
const [discription,setDiscription]=useState("");
const [price,setPrice]=useState("");

const changeName=(e)=>{
    setName(e.target.value);
};
const changeImage=(e)=>{
    setImage(e.target.value);
}
const changeCount=(e)=>{
    setCount(e.target.value);
};
const changeDiscription=(e)=>{
    setDiscription(e.target.value)
};
const changePrice=(e)=>{
    setPrice(e.target.value);
}


  return (
    <div>
      <div className={styles.container}>
        <div className={styles.mini}>
          <h1 className={styles.heading}>Add Category Carefully</h1>
        </div>
        <div className={styles.box}>
          <label className={styles.name}>Name:</label>
          <input
            className={styles.input}
            placeholder="Enter Category Name"
            type="text"
            value={name}
            name="name"
            onChange={changeName}/>
        <label className={styles.name}>Image:</label>
            <input
            className={styles.input1}
            type="file"
            value={image}
            name="image"
            onChange={changeImage}/>

            <label className={styles.name}>Count:</label>
            <input
            className={styles.input}
            placeholder="Enter Category Count"
            type="text"
            value={count}
            name="count"
            onChange={changeCount}/>

           {/* <label className={styles.name}>SuperCategory:</label>
             <select
            className={styles.input}
            type="text"
            value={count}
            name="count"
            onChange={changeCount}/>
            <option></option>
  */}

            <label className={styles.name}>description:</label>
            <input
            className={styles.input}
            placeholder="Enter Category Discription"
            type="text"
            value={discription}
            name="discription"
            onChange={changeDiscription}/>

            <label className={styles.name}>Price:</label>
            <input
            className={styles.input}
            placeholder="Enter Category Price"
            type="text"
            value={price}
            name="price"
            onChange={changePrice}/>
            
            <button className={styles.btn}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default App;
