import { NavLink, useLocation, useNavigate } from "react-router-dom";
import './Headbar.css'
import AnimationWord from "./AnimationWord";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Alert from '@mui/material/Alert';

function Headbar()
{
    const [username,setusername]=useState();
    const [user_flag,setuser_flag]=useState(false);
    const [admin_flag,setu_admin_flag]=useState(false);
    const [notfound,setu_notfound]=useState(false);
     const users=useSelector(state=>state.Users.Users);
     const films=useSelector(state=>state.Users.filmreducer);
     const [list,setlist]=useState();
     const [filmname,set_filmname]=useState();
     const location = useLocation();
     const navigate =useNavigate();
    useEffect(()=>
    {
        const i=localStorage.getItem("id");
        // const ad=localStorage.getItem("admin");
       
        if(i>0)
        {
           
            setuser_flag(true);
           
            setu_admin_flag(false);
            const u=users.find((x)=>parseInt(x.id)===parseInt(parseInt(i)));
            
            if(u)
            setusername(u.username);
        }
        else
        {
            const t=localStorage.getItem("admin");
         
            if(t==="true")
            { 
                 setu_admin_flag(true);
                 setuser_flag(true);
                setusername("Admin");
            }
        }
       // eslint-disable-next-line react-hooks/exhaustive-deps 
    },[location])
     function logout()
     {
        setlist(!list);
        localStorage.setItem("id",-1);
        localStorage.setItem("admin","false");
        setuser_flag(false);
        navigate('/');

     }
     function search()
     {
        if(filmname.length>0){
       
        const f=films.find((x)=>x.title.toLowerCase()===filmname.toLowerCase())
        set_filmname("");
        if(f)
        {
            navigate(`/filmpage/${f.id}`)
        }
        else
        {
            setu_notfound(true);
             setTimeout(() => {
                setu_notfound(false);
                }, 3000);
        }
    }
     }
    return(
        <div className="head">
        <div className= {"headbar "}>
            <NavLink to="/" className="animationwotd"> <AnimationWord word="movora"/></NavLink>
            {/* <h1>movora</h1> */}
            <div className={user_flag&&"userlist"}>
            {user_flag?<button className="linkapp no_outline" onClick={(()=>setlist(!list))}>Hello {username} <i class="fa-solid fa-angle-down"></i> </button>:<NavLink to='/signin' className="linkapp">sign in </NavLink>}
            {list&&user_flag?<ul>
                <li>
                    {/* {admin_flag} */}
                   {admin_flag?<NavLink onClick={(()=>setlist(!list))} to='/addfilmpage'>add film</NavLink>:<NavLink to='/userprofile' onClick={(()=>setlist(!list))}>profile</NavLink>} 
                </li>
                <li onClick={(()=>{logout();})} className="cursor">log out</li>
            </ul>:null}</div>
        </div>
         {user_flag?<div className="searchdiv">
            <form  onSubmit={(e)=> {e.preventDefault(); search()}}>
                <input type="text" id ="searchbar"placeholder="search" value={filmname} onChange={((x)=>set_filmname(x.target.value))}/>
                <button ><i class="fa-brands fa-searchengin"></i></button>
            </form>
            {notfound&&<Alert severity="error">film not found</Alert>}
           </div>:null}
        </div>
      
       
    )
}
export default Headbar;