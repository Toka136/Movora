import { useState } from "react"

function Question(prop)
{
    const[qflag,setqflag]=useState(false);
    return(
  
        <div className="questioncont" >
            <div className="questionj" onClick={()=>setqflag(!qflag)}>
           <p>{prop.text}</p>
           <div className="icon" >
            {!qflag?<i class="fa-solid fa-plus"></i>:<i class="fa-solid fa-x"></i>}
           </div>
           </div>
           {qflag?<div className="qtext"> <p>{prop.answer}</p></div> :null}
        </div>
        
    )
}
export default Question;