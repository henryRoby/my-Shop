import React, { useState } from 'react'

const Form = props => {
   const initial = { id: null, Produits: '', Prix: '', Descr: '' }
   const [ user, setUser ] = useState(initial)
   const changed = event => {
   const { name, value } = event.target
   setUser({ ...user, [name]: value })
 }
	return (
      <div className="container-fluid">
               <form className="flex"
               onSubmit={event => {
                  event.preventDefault()
                  
                  if (!user.Produits || !user.Prix) return

                  if(isNaN(user.Prix)){
                     var erreur = document.getElementById('erreur')
                     erreur.innerHTML = 'Entrer un nombre'

               }else{
                     var erreur = document.getElementById('erreur')
                     erreur.innerHTML = ''
                     //props.updateUser(user.id, user)
                     props.ajouter(user)
                     props.setCount(props.count + 1)
                     setUser(initial)
               }
            
                  
               }}>

              
               <div  className="test">
            
                      <label id ="te">Produit</label>
                        <input type="text" name="Produits" className="id1" value={user.Produits} onChange={changed}/> <br/><br/>
                           <label>Prix</label>
                           <input type="text" name="Prix" className="id2"  value={user.Prix} onChange={changed}/>
                           <p id="erreur"></p><br/>
                            
                        <label  name="Descr">Description</label>
                     
                        <textarea id="form" name="Descr" value={user.Description} onChange={changed}></textarea><br/>
                        <button id ="fil" type="file" name="file" onClick={File}>File</button><br/><br/>
                        <div className="tes">
                        <button id="ajout" className="btn btn-primary">Ajouter</button>
                        </div>
                       
                  </div>
            </form>
      </div>
   )
}
export default Form