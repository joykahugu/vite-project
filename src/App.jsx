import React from 'react'
import Greetings from './components/Greetings' 
import UserProfile from './components/UserProfile'
import Counter from './components/Counter';
import TodoList from './components/TodoList';

function App() { 
    //const name = "Bob";
    //const element = <h2>Hello, {name}!</h2>
    
    //Hooks: //const [state, setState] = useState(initialValue) ;setState defines the new state you'd like
    const items = ['Apple', 'Orange', 'Grape'];

  //React Fragments; instead of using div as parent element
  return (
    <>   
     {items.map((item, index) => (
      <React.Fragment key= {index} >
        <h3>{item}</h3>
        <p>Some Fruit</p>
      </React.Fragment>
     ))}
        <h1>App</h1>
        <Greetings name="John"/>
        <Greetings name="Jane"/> 
        <h1>User Info</h1>
        <UserProfile name='Jane Doe' age={25} isMember= {true}/>
       <Counter />
       <TodoList/>
    </>   //put elements inside fragments, can call functions more than once
       
        
  )
} 
//if you want to display nothing, return null 

export default App
