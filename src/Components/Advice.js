 import React, { useState } from 'react'
 
 function Advice(props) {
     const said = props.saying;
     if(said === 'Clouds'){
        return(
            <div>No Need for Sunscreen!!</div>
        )
     }
     else if(said === 'Dust'){
        return(
            <div>Might Want to Wear Some Eyewear</div>
        )
     }
     else if(said === 'Clear'){
        return(
            <div>Have a day as wonderful as you are!!</div>
        )
     }
     else{
         return(
             <div>You are just Terrific!!</div>
         )
     }

   
 }
 
 export default Advice