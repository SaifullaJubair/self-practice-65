import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const AddUser = () => {
   const [user, setUser] = useState({})

   const handleAddUser = (event) => {
      event.preventDefault();
      console.log(user)

      fetch('http://localhost:5000/users', {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(user)

      })
         .then(res => res.json())
         .then(data => {
            if (data.acknowledged) {
               alert('User adder successfully')
               event.target.reset()
            }

         })
   }

   const handleInputBlur = (event) => {
      // console.log(event.target);
      const field = event.target.name
      const value = event.target.value
      const newUser = { ...user }
      newUser[field] = value;
      setUser(newUser)
   }

   return (
      <div>
         <h1>Add Users:</h1>
         <form onSubmit={handleAddUser}>
            <input type="text" name="name" id="" style={{ margin: '20px' }} onBlur={handleInputBlur} required /><br />
            <input type="text" name="address" id="" style={{ margin: '10px' }} onBlur={handleInputBlur} required /><br />
            <input type="email" name="email" id="" onBlur={handleInputBlur} required /><br /><br />
            <button type="submit">Add User</button>
         </form><br />
         <button><Link to='/'>GO Home</Link></button>
      </div>
   );
};

export default AddUser;