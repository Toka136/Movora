import {  useState } from "react"
import { NavLink, useNavigate } from "react-router-dom";
import './Sign.css'
import {  useSelector } from "react-redux";
import Alert from '@mui/material/Alert';

function Signin()
{
    const[username,setusername]=useState();
    const[password,setpassword]=useState();
    const[count,setcount]=useState(0);
    const[type,settype]=useState('user');
    const user_p=("Your user name ");
    const user_p_p=("Your paswword");
    const admin_p_p="Your paswword (admin)";
    const admin_p="Your user name (admin)";
    const[check_flag,setcheck_flag]=useState(true);
    const users=useSelector(state=>state.Users.Users);
    // const dispatch=useDispatch();
    const navigate=useNavigate();

     function checkuser()
    {
       
        console.log(users);
        if(type==='user'){
            // console.log("user");
            if(count>2)
            {
                setcheck_flag(false);
                navigate('/signup');
            }
        if(users.length===0)
        {
            //  console.log("not user")
            setcheck_flag(false);
            setcount(count+1);
            // console.log("count"+count);
            setTimeout(() => {
            setcheck_flag(true);
          }, 2000);
        }
        else
        {
            if(count<3){
                // console.log("pass"+password);
            const u=users.find((x)=>x.password===password&&x.username===username);
            if(u)
            {
                localStorage.setItem("id",u.id);
                setcount(0);
                // console.log("true ")
                navigate('/');
            }
            else {
                setcheck_flag(false);
                setTimeout(() => {
            setcheck_flag(true);
          }, 2000);
                setcount(count+1);}
        }
        
        }
        setusername("");
        setpassword("");
    }
    else
    {
        console.log("type"+type);
        if(username==="admin"&&password==="admin")
        {
            localStorage.setItem("admin","true");
            navigate('/');
        }
        else
        {
            setcheck_flag(false);
            setTimeout(() => {
            setcheck_flag(true);
          }, 2000);
        }
    }
    }
    return(
        <div className="signin">
            <div className="signincont">
                <h1>Welcome back !</h1>
            <form onSubmit={(e)=> {e.preventDefault(); checkuser()}}>
                <input type="text" placeholder={type==="user"?user_p:admin_p} onChange={(x)=>setusername(x.target.value)}/>
                <input type="text" placeholder={type==="user"?user_p_p:admin_p_p} onChange={(x)=>setpassword(x.target.value)}/>
                <select onChange={(x)=>settype(x.target.value)} value={type} >
                    <option value="user">user</option>
                    <option value="admin">admin</option>
                </select>
                <button className="linkapp">sign in</button>
                 {!check_flag?<Alert severity="error">Wrong user name or password</Alert>:null}
            </form>
            <p>dont have accoutnt , <NavLink to="/signup">sign up</NavLink></p>
            </div>
           
        </div>
    )
}
export default Signin;