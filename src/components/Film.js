import { useLocation, useNavigate } from 'react-router-dom';
import './Film.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { edituser } from '../store-api/slices/Users-slice';
function Film(prop)
{
     const navigate = useNavigate();
     const [user,set_user]=useState();
     const location=useLocation();
      const users=useSelector(state=>state.Users.Users);
      const dispatch=useDispatch();
    const filminfoshow=()=>
    {
     
        if(location.pathname==='/userprofile')
       navigate(`/userprofile/${prop.film.id}`)
    else 
       navigate(`/${prop.film.id}`)
    }
     useEffect(()=>
        {
           function fun()
           {
             const id =localStorage.getItem("id");
            if(id)
            {
                const u=users.find((x)=>(x)=>parseInt(x.id)===parseInt(id));
                set_user(u);
            }
           
           }
        fun();
         // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])
    const imgpath=prop.film.poster_path;
    const path="https://image.tmdb.org/t/p/w500";
    const allpath=`${path}${imgpath}`
    function delete_Film_favlist()
    {
       
        let l=[...user.filmslist];
        let id=prop.film.id;
        let listt=l.filter((x)=>parseInt(x.id)!==parseInt(id));
        let ut={
            ...user,
            "filmslist":listt
        }
        dispatch(edituser(ut));
      window.location.reload(true);
    }
    return(
        <div className='film_x'>
           {location.pathname.includes("userprofile")&& <div className='xicon'>
               <button onClick={(()=>delete_Film_favlist())}>
                <i class="fa-solid fa-xmark"></i></button>
                </div>}
        <div className="film" onClick={()=>
            filminfoshow() 
        }>
             
            <img src={allpath} alt='film poster'></img>
            {!location.pathname.includes("userprofile")?<span>{prop.count+1}</span>:null}
        </div>
        </div>
    )
}
export default Film;