import './Animation.css'
function AnimationWord(prop)
{
    return(
        <div className="animteword">
       { prop.word.split('').map((x,index)=>{
            return<span key={index} className="char" style={{ animationDelay: `${index * 0.1}s` }}>{x}</span>
        }
        )}</div>
    )
}
export default AnimationWord