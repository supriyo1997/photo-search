import React, { useState,useEffect } from "react";
import Modal from 'react-modal';





export default function SearchPhotos() {

    const [srch,setSrch] = useState("");
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    const [open,setOpen] = useState(false);
    const [list, setList]=useState([]);
    const [img, setImg] = useState("");
       
    useEffect( () => {
      if(query!==""){
      fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+process.env.REACT_APP_API_KEY+'&text='+query+'&per_page=500&format=json&nojsoncallback=1')
      .then(function(response){
        return response.json();
      })
      .then(function(j){
        //alert(JSON.stringify(j));
        console.log("no blank");
        let picArray = j.photos.photo.map((pic) => {
          
          var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
          return( srcPath)
            
          
        })
        setData(picArray);
       
      })}
      else{
        fetch('https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key='+process.env.REACT_APP_API_KEY+'&text='+query+'&format=json&nojsoncallback=1')
        .then(function(response){
          return response.json();
        })
        .then(function(j){
          //alert(JSON.stringify(j));
          console.log("blankgfgthghghg");
          let picArray = j.photos.photo.map((pic) => {
            
            var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
            return( srcPath)
              
            
          })
          setData(picArray);
         
        })
      }
    },[query])
 
    const listChange=()=>
    {
      setList([...list,query]);
      setOpen(false);
    }
    
    const openEvent=(img)=>{

       setImg(img);
       console.log("gfththhhhhh434556656567",img);
       var modal = document.getElementById("myModal");
      modal.style.display = "block";

    }

    const closeEvent=()=>{
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
    }
   

    return (
        <>
        <div className="container">
        <h1 className="title">React Photo Search</h1>
        <div className="form" >
          
          <label className="label" htmlFor="query">
            {" "}
            📷
          </label>
          <input
            type="text"
            name="query1"
            className="input"
            style={{height:"30px",borderRadius:"20px"}}
            placeholder={`Try "dog" or "apple"`}
            
            
            onChange={(e) => {setQuery(e.target.value);
                 setOpen(true);
                 
            }}
            value={query}
          />

          <button type="submit" className="button" onClick={listChange}>
            Search
          </button>
         </div>
         </div>
        
    
        {open&&  <div className="modal1">
          {
            list.map(e=>
              <h1>{e}</h1>
              )
          }
          
        </div>}

       <div id="myModal" className="modal">

          <div className="modal-content">
             <span className="close" onClick={closeEvent}>&times;</span>
             <div className="card" >
              <img
                className="card--image"
                alt="jkjk"
                src={img}
                width="50%"
                height="50%"
               
              ></img>
            </div>
          </div>

        </div>
       
        <div className="card-list">
        {
          data.map((pic) =>
            <div className="card" >
              <img
                className="card--image"
                alt="jkjk"
                src={pic}
                width="50%"
                height="50%"
                onClick={()=>openEvent(pic)}
              ></img>
            </div>)
        }
      </div>
      </>
    );
    }