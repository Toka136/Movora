import { Alert } from "@mui/material";
import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { adduser } from "../store-api/slices/Users-slice";

function Signup()
{
       const[username,setusername]=useState();
        const[password,setpassword]=useState();
        const[name,setname]=useState();
        const users=useSelector(state=>state.Users.Users);
         const[check_flag,setcheck_flag]=useState(true);
          const navigate=useNavigate();
        const dispatch=useDispatch();
        // useEffect(()=>
        // {
        //     localStorage.setItem("users",JSON.stringify(users));
        // },users)
        function Adduser()
        {
            console.log("in functio");
            if(users.length>0){
                 console.log("in")
            const u=users.find((x)=>x.username===username);
            console.log(u+"u");
            if(u)
            {
                console.log("in2")
                setcheck_flag(false);
                setTimeout(() => {
                setcheck_flag(true);
                }, 2000);
            }
            else 
            {
                console.log("new");
                let id=0;
                if(users.length===0)
                {
                     console.log("new 1");
                    id=1;
                }
                else
                {
                    id=users[(users.length-1)].id;
                    id=id+1;
                }
                dispatch(adduser({"id":id,"name":name,"username":username,"password":password,"type":"user","filmslist":[],"ratingfilms":[],"watchedfilms":[]}));                
                navigate('/signin');

            }}
            else
            {
                  console.log("new");
                let id=0;
                if(users.length===0)
                {
                     console.log("new 1");
                    id=1;
                }
                else
                {
                    id=users[(users.length-1)].id;
                    id=id+1;
                }
                dispatch(adduser({"id":id,"name":name,"username":username,"password":password,"type":"user","filmslist":[],"ratingfilms":[],"watchedfilms":[]}));
                
                navigate('/signin');
            }

        }
    return (
        <>
         {/* {localStorage.clear()} */}
          <div className="signin">
            <div className="signincont">
                <h1>WelcomeTo movora</h1>
            <form onSubmit={(e)=> {e.preventDefault(); Adduser()}}>
                <input type="text" placeholder="Your name" onChange={(x)=>setname(x.target.value)}/>
                <input type="text" placeholder="Your user name" onChange={(x)=>setusername(x.target.value)}/>
                <input type="text" placeholder="Your paswword" onChange={(x)=>setpassword(x.target.value)}/>
                <button className="linkapp">sign up</button>
                 {!check_flag?<Alert severity="error">invalid user name </Alert>:null}
            </form>
            <p>have accoutnt ? , <NavLink to="/signin">sign in</NavLink></p>
            </div>
        </div></>
    )
}
export default Signup;