import React from 'react';
import './css/style.css'
const Tempapp=()=>{
    return(
        <>
             <div className="box">
                 <div className="inputdata">
                     <div className="content">
                     <input type="search" className="input-field"
                     onChange={event=>{

                     }}
                     />
                
                           
                 <div className="info">
                     <h2 className="location">
                     <i class="fa fa-street-view" aria-hidden="true"></i>
                        pune
                     </h2>
                     <h1 className="temp">
                     25°C
                     </h1>
                     <h3 className="tempmin_max">
                      min 
                     </h3>

                 </div>
                 </div>   
                 </div>
      
           
            </div>
            

        </>
    )
}



export default Tempapp
