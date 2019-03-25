


 import React, { Component } from 'react'


 class Cart extends Component {


   constructor(props) {

     super(props);

     this.state ={

       file:null

     }

     this.onFormSubmit = this.onFormSubmit.bind(this)

     this.onChange = this.onChange.bind(this)

     this.fileUpload = this.fileUpload.bind(this)

   }

   onFormSubmit(e){

     e.preventDefault() // Stop form submit

     this.fileUpload(this.state.file).then((response)=>{

     

     })

   }

   onChange(e) {

     this.setState({file:e.target.files[0]})

   }

   fileUpload(file){

     const url = 'http://example.com/file-upload';

     const formData = new FormData();

     formData.append('file',file)

const config = {

         headers: {

             'content-type': 'multipart/form-data'

         }

     }

   }


   render() {

     return (
         <div className="flex-row">

      <form onSubmit={this.onFormSubmit}>

 
 
        {/* <input type="file" onChange={this.onChange} /> */} 

        <button id="file" type="File"  onChange={this.onChange}>File</button> 

      </form>
      </div>
    )

   }

 }
 export default Cart
