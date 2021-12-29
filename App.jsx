import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';

import ToDo from './ToDo';

function App(){
const [ItemVal,setItem]=useState([]);
    
const [Item,setVal]=useState(" ");
function setItemVal(e)
{
      setVal(e.target.value);
}
function AddList()
{  
       setItem((oldItem)=>{
           return [...oldItem,Item];
       })
       setVal("");

    }



function DelItem(t)
{  
    console.log(t);
         setItem((oldItem)=>{
              return oldItem.filter((Current,index)=>{
                         return index !==t;
              });
         });
         
        
}

     return (
         <>
             <div className="div1">
               <h1>TodoList App </h1>
                 <input type="text" placeholder="Add a Item"  onChange={setItemVal} value={Item}/>
                 <span><button className="btn1" onClick={AddList} ><AddIcon className="add"/></button></span>

                 {
                      ItemVal.map((val,index)=>{
                           return ( 
                            <ToDo  text={index}  content={val} key={index} onSelect={DelItem}/>
                        );
                      })
                 }
             </div>

         </>
     );
}
export default App;

