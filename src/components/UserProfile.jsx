 import React, { useState } from 'react'

 function UserProfile() {
    const [name, setName] = useState('John Doe');
    const [age, setAge] = useState('25');
    return (
        <div>
     
       <p>Name: {name}</p>
       <p>Age: {age}</p>
       <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
       <input type="number" value={age} onChange={(e) => setAge(e.target.value)}/>
        </div>
    // setName updates the person's name above as input is typed
    )
 }
 //dealing w booleans in jsx: if true, will display p tag {isMember ? <p>Status: Premium Member</p> : <p>Status: Free User</p>}
 export default UserProfile