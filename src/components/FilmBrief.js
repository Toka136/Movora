import { useEffect, useState } from 'react';
import './Filmbrief.css'
import { NavLink, useLocation } from 'react-router-dom';
function Filmbrief(prop)
{
      const imgpath=prop.film.backdrop_path;

        const location=useLocation();
        const [user_flag,setuser_flag]=useState(false);
    // const [admin_flag,setu_admin_flag]=useState(false);
    const [code,set_code]=useState("unknown");
    const path="https://image.tmdb.org/t/p/w500";
    const allpath=`${path}${imgpath}`;
    const date= new Date(prop.film.release_date).getFullYear();
        const languages = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'French' },
  { code: 'es', name: 'Spanish' },
  { code: 'de', name: 'German' },
  { code: 'it', name: 'Italian' },
  { code: 'ja', name: 'Japanese' },
  { code: 'zh', name: 'Chinese' },
  { code: 'ar', name: 'Arabic' },
  { code: 'ru', name: 'Russian' },
  { code: 'hi', name: 'Hindi' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'ko', name: 'Korean' },
  { code: 'tur', name: 'Turkish' },
  
];
useEffect(()=>
{
    const x=languages.find((f)=>f.code===prop.film.original_language);
    if(x)
        set_code(x.name);
},)
     useEffect(()=>
    {
        const i=localStorage.getItem("id");
        // const ad=localStorage.getItem("admin");
       
        if(i>0)
        {
           
            setuser_flag(true);
            
           
            
           
        }
        else
        {
            const t=localStorage.getItem("admin");
      
            if(t==="true")
            { 
               
                 setuser_flag(true);
             
            }
        }
    },[location])
    return(
    //  <div className='filmcont'>
        <div className="filminfo">
            <div className='xicon'>
                <NavLink to={location.pathname.includes('/userprofile')?'/userprofile':'/'}>
                <i class="fa-solid fa-xmark"></i></NavLink>
                </div>
            <img src={allpath} alt='film poster'></img>
            <div className="info">
                <span>{date}</span>
                <span>{prop.film.adult?"adult":"general"}</span>
                <span>{code}</span>
            </div>
            <p>{prop.film.overview}</p>
              {user_flag&&
            <button className='linkapp'>
             <NavLink to={`/filmpage/${prop.film.id}`}>get start</NavLink>
                <i class="fa-solid fa-angle-right"></i>
                </button>}
        </div>
        
        
    )
}
export default Filmbrief;