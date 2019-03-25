import React, { useState } from 'react';
import Tableau from './Component/tableau';

// import Cart from './Component/Cart/cart';
import Form from './Component/Form';
import './Component/form.css';
import './Component/tableau.css';

const App = () => {
    const usersData = []
   
    


    const initialFormState = { id: null, Prix: '', Descr:'' };
    const [ currentUser, setCurrentUser ] = useState(initialFormState);
    
   

    const updateUser = (id, updatedUser) => {
      setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    }
  
		const [ users, setUsers ] = useState(usersData)
    const [count, setCount] = useState(0);


    const ajouter = user => {
      user.id = count
      
    user.Produits= user.Produits.substr(0,1).toUpperCase()+	user.Produits.substr(1,user.Produits.length).toLowerCase()
      setUsers([ ...users, user ])
      
     
      
    }

    return (
      <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          <Form ajouter={ajouter} setCount={setCount} count={count}/>
        </div>
        <div className="flex-large">
          <Tableau users={users} updateUser={updateUser}/>
        </div>
        <div className="flex-large">
         
        </div>
      </div>
    </div>
    )
  };

export default App;