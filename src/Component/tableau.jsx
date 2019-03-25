
import React, {Component} from 'react';
import 'react-confirm-alert/src/react-confirm-alert.css';


class Tableau extends Component {
  render() {
    return(
      
      <div className="row">
              {this.props.users.length > 0 ? (
                this.props.users.map(user => (

                  <div key ={user.id} className="col-md-4">
                      <div class="card">
                       <div className="header">
                   
                       </div>
                              <div class="card-body">
                              <h5 class="card-title">{user.Produits}</h5>
                              <div class="card-text" id="tronque">{user.Descr}</div>
                              <span><div>{user.Prix}Ar</div></span>
                    
                          <div class="card-footer"><label htmlFor="">comment <span class="float-right">
              
              <span class="float-right">
                  <a data-toggle="tooltip" data-placement="top" title="Add to Cart">
                    <i class="fas fa-shopping-cart grey-text ml-3"></i>
                  </a>
                  <a data-toggle="tooltip" data-placement="top" title="J'adore">
                 
                  </a>
                  <a class="active" data-toggle="tooltip" data-placement="top" title="commentaire">
                    <i class="fas fa-heart ml-3" id="commentaire" onClick={() => {
                          /*   confirmAlert({
                              customUI: ({ onClose }) => {
                                return (
                                  <div>
                                    <div className="popups">
                                      <button id="btnpopups" className="btn btn-danger" onClick={onClose}>X</button>
                                      <Commentaire commentajout={props.commentajout}/>
                                    </div>
                                  
                                  </div>
                                );
                              }
                            });
                           */
                        }}>Comment</i>
                  </a>
                </span>
                
                </span>
    </label>  </div>
                      
                    
                        </div>

                      </div>
                  </div>
              ))
              ) : (
                <td >
                
                </td>
              )}
        
      </div>
  
      )
      }
  }



export default Tableau;