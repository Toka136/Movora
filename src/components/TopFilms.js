import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchfilms } from "../store-api/slices/Films-slice";
import Film from "./Film";
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css'; 
import 'swiper/css/navigation';
// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
function Topfilms()
{
     let state =useSelector(state=>state.Users.filmreducer);
    //  console.log(state);
    const dispatch=useDispatch();
    const [top_ten,set_top_ten]=useState([]);

    const sort=()=>
    {
      //  console.log("state in sort" , state);
       const filmlist=[...state];
        filmlist.sort((a,b)=>b.vote_average-a.vote_average);
          set_top_ten(state.slice(0,10))
    };
    useEffect(()=>
    {
     function fun()
     {
       const flag =localStorage.getItem("apiflag");
      if(!flag){
         dispatch(fetchfilms());
         localStorage.setItem("apiflag","true");
      }
     }
     fun();
        
    },[])
    useEffect(()=>
     {
          if(state)
          sort();
     },[state])
      useEffect(()=>
     {
          if(state)
          sort();
     },[state])
     const [screen,setscreen]=useState(false);
     const [Sscreen,setSscreen]=useState(false);
     useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      setscreen(width < 426);
      setSscreen(width < 376);
    };

    handleResize(); 

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
    
    return(
      <div className="filmlistP">
      <div className="filmlist">  
         <Swiper navigation={true} modules={[Navigation]} className="mySwiper"
      spaceBetween={50}
      slidesPerView= {screen?Sscreen<376?1:2:3}
      // onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
         {top_ten?top_ten.map((f,index)=>
        {
          return <SwiperSlide key={index}>
      <Film count={index} film={f} />
    </SwiperSlide>
        }):null} 
        
    </Swiper>
    </div> 
    </div> 
    )
}
export default Topfilms;