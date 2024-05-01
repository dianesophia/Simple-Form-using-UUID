import React, {useState} from 'react'
import "./HookForm.css"
import {v4 as uuid4} from 'uuid';


const HookForm = () => {

    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [users, setUsers] = useState([]);

    const handleInputChange = (e) =>{
        console.log(e.target);
        const {name, value} = e.target;
        setUserData({ ...userData, [name]: value});
    }

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        const newUser = {...userData, id: uuid4()};
        setUsers([...users, newUser]);
        console.log('form submitted', users);
    }

  return (
  <>
    <div className="container">
        <form onSubmit={handleFormSubmit}>
            <input 
            type="text" 
            id='username' 
            name='username' 
            placeholder='username' 
            value={userData.username}
            onChange={handleInputChange}/>

            <input 
            type="text" 
            id='email' 
            name='email' 
            placeholder='Email' 
            value={userData.email}
            onChange={handleInputChange}/>

            <input 
            type="password" 
            id='password' 
            name='password' 
            placeholder='Password' 
            value={userData.password}
            onChange={handleInputChange}/>
            
            <button>Register</button>

        </form>

    </div>

    <div className="result">

        {users.map(({id, username, email}) =>(
             <div key={id}>
             <p>{id}</p>
             <p>{username}</p>
             <p>{email}</p>
         </div>
        ))}
    </div>
  </>
  )
}

export default HookForm