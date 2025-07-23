import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import"./Filmpage.css"
import { deleteFilm, editFilm } from "../store-api/slices/Films-slice";
import { edituser } from "../store-api/slices/Users-slice";
import Alert from '@mui/material/Alert';

function Filmpage()
{
  const prop=useParams();
     let state =useSelector(state=>state.Users.filmreducer);
     let users =useSelector(state=>state.Users.Users);
     const [film,setfilm]=useState();
     const [admin,setadmin_flag]=useState(false);
     const [imgpath,set_imgpath]=useState();
     const [date,set_date]=useState();
     const [watch,set_watch]=useState(false);
     const [fave,set_fav]=useState(false);
     const [rated,set_rated]=useState(false);
     const [filmerat,set_filmerat]=useState(0);
     const [code,set_code]=useState("unknown");
     const navigate=useNavigate();
     const [delet_flage,set_delet_flage]=useState(false);
    //   const imgpath=prop.film.poster_path;
    const path="https://image.tmdb.org/t/p/w500";
    const allpath=`${path}${imgpath}`;
    const dispatch =useDispatch();
     useEffect(()=>
    {
       
        const f=state.find((x)=>parseInt(x.id)===parseInt(prop.id));
        if(f){
            setfilm(f);
            const x=languages.find((r)=>r.code===f.original_language);
            if(x)
                set_code(x.name);
            set_imgpath(f.poster_path);
            set_date(new Date(f.release_date).getFullYear())
        }
    },[])
    useEffect(()=>
    {
        const t=localStorage.getItem("admin");
           
            if(t==="true")
            {
                
                 setadmin_flag(true);
                // setusername("Admin");
            }
    },[])
    function ratefilm()
    {
        const i=localStorage.getItem("id");
        let u=users.find((x)=>(x)=>parseInt(x.id)===parseInt(i))
        let f2=u.ratingfilms.find((x)=>parseInt(x.id)===parseInt(prop.id));
        if(!f2||f2.rating!==filmerat){
        let f=state.find((x)=>parseInt(x.id)===parseInt(prop.id));
      let ratingl =u.ratingfilms.filter((x)=>parseInt(x.id)!==parseInt(prop.id));
    
        if(f)
        {
                let rr=parseFloat(filmerat);
                if(rr>5)
                    rr=5;
                else if(rr<0)
                    rr=0;

            let r=(parseFloat(f.vote_average)+parseFloat(rr))/2;
              let count=parseInt(f.vote_count);
            if(!f2){
             count=parseInt(f.vote_count)+1;}
         
            const ft={
                ...f,
                vote_average:r,
                vote_count:count
            }
             ratingl.push({"id":prop.id,"rating":filmerat})
            dispatch(editFilm(ft));
            const ut={
                ...u,
                ratingfilms:ratingl
            }
           
            dispatch(edituser(ut));
            set_rated(true);
            setTimeout(() => {
                set_rated(false);
                }, 3000);
        }}
        set_filmerat(0);
    }
    function delete_Film()
    {
         dispatch(deleteFilm(prop.id));
   navigate('/');
    }
    function editfav_list()
    {
        console.log("in");
          const i=localStorage.getItem("id");
         let u=users.find((x)=>(x)=>parseInt(x.id)===parseInt(i));
        let x= u.filmslist.find((x)=>parseInt(x.id)===parseInt(prop.id));
        if(!x){
        let ratingl =[...u.filmslist];
      
        ratingl.push({"id":prop.id});
        const ut={
                ...u,
                "filmslist":ratingl
            }
          
            dispatch(edituser(ut));
             set_fav(true);
            setTimeout(() => {
                set_fav(false);
                }, 3000);
        }
    }
    function editwatc_list()
    {
         const i=localStorage.getItem("id");
         let u=users.find((x)=>(x)=>parseInt(x.id)===parseInt(i));
        let x= u.watchedfilms.find((x)=>parseInt(x.id)===parseInt(prop.id));
        if(!x){
        let ratingl =[...u.watchedfilms];
       
        ratingl.push({"id":prop.id});
        const ut={
                ...u,
                "watchedfilms":ratingl
            }
          
            dispatch(edituser(ut));
             set_watch(true);
            setTimeout(() => {
                set_watch(false);
                }, 3000);
        }

    }
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

    return(
       
        <div className="filmpage">
            
          {film&& 
            <div className="filmcont">
                <div className="info-brief">
                     <p>{film.overview}</p>
                      <div className="info">
                <span>{date}</span>
                <span>{film.adult?"adult":"general"}</span>
                <span>{code}</span>
            </div>
             {admin?<div className="adminfilm">
               {delet_flage&& <div className="check_delete">
                    <p>Are you sure you want to delete the movie? </p>
                   <div className="buttons">
                    <button className="delete_film" onClick={(()=>delete_Film())}>
                        delete
                    </button>
                    <button className="cancel" onClick={(()=>set_delet_flage(false))}>
                        cancel
                    </button>
                   </div>
                </div>}
                <button className="linkapp" onClick={(()=>set_delet_flage(true))}> delete film</button>
            </div>:<div className="userfilm">
                <div className="filmbuttons">
                   
                 <button className="linkapp" onClick={(()=>editfav_list())}>add to favourite list</button>
                <button className="linkapp" onClick={(()=>editwatc_list())}>add to watched  list</button>
                </div>
                {fave?<Alert severity="success">film added to favourite list successfully.</Alert>:null}
                {watch?<Alert severity="success">film added to watched list successfully.</Alert>:null}

                <form onSubmit={(e)=> {e.preventDefault(); ratefilm()}}>
                    <input type="number" max={5} min={0} placeholder="rate film" value ={filmerat}onChange={((x)=>set_filmerat(x.target.value))}></input>
                    <button className="linkapp">rate</button>
                </form>
            {rated?<Alert severity="success">film rated successfully.</Alert>:null}
                
                
                </div>}
                </div>
               
            <div className="film_poster">
            <img src={Object.keys(film).length>11?allpath : imgpath} alt="film poster"/>
            </div>
            </div>
            }
            
           
           
        </div>
    )
}
export default Filmpage;