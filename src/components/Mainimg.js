import { useEffect, useRef } from "react";
import gsap from "gsap";
function Mainimg()
{
    const reff=useRef(null);
    useEffect(()=>
    {
        function fun()
        {
            gsap.fromTo(
            reff.current,
            {y:200,opacity:0},
            {y:0,opacity:1,duration: 2.5,
        }
        );
        }
        fun();
    },[])
    return(
        <div className="main">
          <div className="mainimg" ref={reff}>
            <p >Unlimited movies, TV shows, and more</p>
            
        </div></div>
    )
}
export default Mainimg;