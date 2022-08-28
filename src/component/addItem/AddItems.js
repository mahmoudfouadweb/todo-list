// import { Component, useRef } from 'react';
// import React from 'react';

// import classes from './AddItems.module.css';

// class AddItem extends Component {
//   render() {
//     return <div>add item</div>;
//   }
// }
// function AddItem() {
//   const nameRef = useRef();
//   const ageRef = useRef();
//   const idRef = useRef();

//   function submitBtnHandler(e) {
//     e.preventDefault();
//     const name = nameRef.current.value;
//     const age = ageRef.current.value;
//     const id = idRef.current.value;
//     console.log(id, name, age);
//     const todo = {
//       id,
//       name,
//       age,
//     };
//     console.log(todo);
//   }

//   return (
//     <form className={classes.additem}>
//       <div>
//         <label htmlFor="id">ID:</label>
//         <input type="number" placeholder="1" id="id" ref={idRef} />
//       </div>
//       <div>
//         <label htmlFor="name">Name: </label>
//         <input
//           type="text"
//           placeholder="example mohammed salah"
//           id="name"
//           ref={nameRef}
//         />
//       </div>
//       <div>
//         <label htmlFor="age" className={classes.space}>
//           Age:
//         </label>
//         <input type="number" placeholder="22" id="age" ref={ageRef} />
//       </div>
//       <div className={classes.space}>
//         <button onClick={submitBtnHandler}>Submit</button>
//       </div>
//     </form>
//   );
// }

// export default AddItem;
