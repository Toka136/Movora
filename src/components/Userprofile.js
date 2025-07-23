import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { edituser } from "../store-api/slices/Users-slice";
import Alert from '@mui/material/Alert';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css'; 
import 'swiper/css/navigation';
import Film from "./Film";
import { Navigation } from 'swiper/modules';
import'./Profiles.css'
import Filmbrief from "./FilmBrief";
import { useParams } from "react-router-dom";
function Userprofile()
{
    const [user,set_user]=useState();
    const [C_pass,set_C_pass]=useState(null);
    const [N_pass,set_N_pass]=useState(null);
    const [F_pass,set_F_pass]=useState();
    const [passflag,set_passflag]=useState(false);
    const id=useParams();
     const [film,setfilm]=useState();
     useEffect(()=>
    {
        console.log("id" + id.id)
        let idt=parseInt(id.id);
       
        const filmt=state.filter((x)=>parseInt(x.id)===parseInt(idt));
        console.log("filmt",filmt);
        setfilm(filmt[0]);
    },[id])
     const users=useSelector(state=>state.Users.Users);
     let state =useSelector(state=>state.Users.filmreducer);
     const dispatch=useDispatch();
    useEffect(()=>
    {
        console.log("effect");
        const id =localStorage.getItem("id");
        if(id)
        {
            const u=users.find((x)=>(x)=>parseInt(x.id)===parseInt(id));
            set_user(u);
         
        }
    },[])
    useEffect(()=>
    {
       const id =localStorage.getItem("id");
        if(id)
        {
            const u=users.find((x)=>parseInt(x.id)===parseInt(id));
            set_user(u);
            
        }
    },[])
    function cahngepass()
    {
        console.log(user);
        console.log("C_pass = ",C_pass);
        console.log("user password = ",user.password);
        if(parseInt(C_pass)===parseInt(user.password))
        {
            const ut={
                ...user,
                "password":N_pass
            }
            dispatch(edituser(ut));
            set_user(ut);
            set_passflag(true);
             setTimeout(() => {
                set_passflag(false);
                }, 3000);
                set_C_pass("");
                set_N_pass("");
        }
        else
        {
            set_F_pass(true);
            setTimeout(() => {
                set_F_pass(false);
                }, 2000);
        }
    }
  
     const [screen,setscreen]=useState(false);
     const [Sscreen,setSscreen]=useState(false);
     useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      setscreen(width < 426);
      setSscreen(width < 376);
    };

    handleResize(); // Run once on mount

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
    return(
        <>
        {user&&<div className="userprofile">
            <div className="user_i_p">
            <div className="userinfo">
                <p><span>name :</span>{user.name}</p>
                <p><span>username :</span>{user.username}</p>
                <p><span>watched films :</span>{user.watchedfilms.length}</p>
                <p><span>rating films  :</span>{user.ratingfilms.length}</p>
            </div>
            <div className="change_p">
                <form onSubmit={(e)=> {e.preventDefault(); cahngepass()}}>
                    <input type="password" placeholder="cureent password" value={C_pass} onChange={((x)=>set_C_pass(x.target.value))}/>
                    <input value={N_pass} type="password" placeholder="new password" onChange={((x)=>set_N_pass(x.target.value))}/>
                    <button className="linkapp">change password</button>
                      {F_pass?<Alert severity="error">Wrong current password</Alert>:null}
                      {passflag?<Alert severity="success">password has been changed successfully.</Alert>:null}
                </form>
            </div>
            </div>
            {parseInt(id.id)>-1&&film?<Filmbrief film={film}/>:null}
            <div className="fav_films">
                   <Swiper navigation={true} modules={[Navigation]} className="mySwiper"
      spaceBetween={50}
      slidesPerView= {screen?Sscreen<376?1:2:3}
      // onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
        
       { user.filmslist.length>0?user.filmslist.map((x,index)=>
        {
          
            // console.log("x = ",x);
            const t=state.find((f)=>parseInt(f.id)===parseInt(x.id));
            if(t)
            {
              
                 return <SwiperSlide key={index}>
                <Film count={0} film={t} />
                </SwiperSlide>
            }
            else return null;
        }):<h1>No Films</h1>}
    </Swiper>
            </div>
        </div>}
        </>
    )
}
export default Userprofile;