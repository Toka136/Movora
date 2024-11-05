import { useSelector } from "react-redux";
import Filmbrief from "./FilmBrief";
import Topfilms from "./TopFilms";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import JoinReason from "./JoinReasons";
import Questions from "./Questions";
import './Question.css'
import Footer from "./Footer";
import Mainimg from "./Mainimg";
function Homepage()
{
    // Filmbrief film={film}
    const id=useParams();
     let state =useSelector(state=>state.Users.filmreducer);
     const [film,setfilm]=useState();
     useEffect(()=>
    {
       
        let idt=parseInt(id.id);
       
        const filmt=state.filter((x)=>parseInt(x.id)===parseInt(idt));
      
        setfilm(filmt[0]);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id])
    return(
        <>
        {/* {localStorage.clear()} */}
        <div className="mainapp">
     <Mainimg/>
      <div className="color"></div>
       <Topfilms/>
        {parseInt(id.id)>-1&&film?<Filmbrief film={film}/>:null}
        <JoinReason/>
        <Questions/>
        <Footer/>
       </div></>
    )
}
 export default Homepage;