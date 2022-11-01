import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
   const users = useLoaderData()
   // const handleDelete = user => {
   //    // const agree = window.confirm(`Are You sure to delete : ${user.name}`)
   //    // console.log(agree);
   //    // if (agree) {
   //    //    console.log('delete user', user._id)

   //    // }
   // }
   return (
      <div>
         <h1>This is home {users.length}</h1>
         <button><Link to='/adduser'>Go User</Link></button>
         <div>
            {
               users.map(user => <p
                  key={user._id}
               >{user.name} {user.email} <button
               >X</button>
               </p>)
            }
         </div>
      </div>
   );
};

export default Home;