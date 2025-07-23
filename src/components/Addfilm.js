import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilm } from "../store-api/slices/Films-slice";
import { useNavigate } from "react-router-dom";
import './Addfilm.css'
function Addfilm()
{
     let state =useSelector(state=>state.Users.filmreducer);
     const dispatch=useDispatch();
     const navigate =useNavigate();
    const [title,set_title]=useState();
    const [type,set_type]=useState();
    const [lang,set_lang]=useState("en");
    const [overview,set_overview]=useState();
    const [poster_path,set_poster_path]=useState();
    const [film_date,set_film_date]=useState();
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
function addfilm()
{
    let last_id=1;
    if(state){
     last_id=state[state.length-1].id;
     last_id=last_id+1;
    }
    const film={
        "adult":type==="adult"?true:false,
        "id":last_id,
        "original_language":lang,
        "original_title":title,
        "overview":overview,
        "poster_path":poster_path,
        "release_date":film_date,
        "title":title,
        "vote_average":0.0,
        "vote_count":0
    }
    dispatch(addFilm(film));
    navigate('/')

}
    return(
        <div className="signin">
            <div className="signincont">
            <h1>Add new film</h1>
            <form  onSubmit={(e)=> {e.preventDefault(); addfilm()}}>
                <input type="text" placeholder="title of film" onChange={((x)=>set_title(x.target.value))}/>
                {/* <label for="type">audience type </label> */}
                <select onChange={(x)=>set_type(x.target.value)} value={type} id="type" >
                    <option value="adult">adult</option>
                    <option value="general">general</option>
                </select >
                <select  onChange={((x)=>set_lang(x.target.value))}>
                {languages.map((x)=>
                {
                    return(
                        <option value={x.code}>{x.name}</option>
                    )
                })}
                </select>
                <input type="text" placeholder="over view about film"  onChange={((x)=>set_overview(x.target.value))}/>
                <input type="text" placeholder="film poster path "  onChange={((x)=>set_poster_path(x.target.value))}/>
                <input type="date" placeholder="release date " onChange={((x)=>set_film_date(x.target.value))} />
                <button className="linkapp">add film</button>
            </form>
             </div>
        </div>
       
    )
}
export default Addfilm;