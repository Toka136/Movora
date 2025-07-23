import Question from "./Question";

function Questions()
{
    return(
        <div className="questions">
            <div className="questionscont">
                <h1>Frequently Asked Questions</h1>
            <Question text="what is movora ?" answer="movora  is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"/>
            <Question text="where can i watch ?" answer="watch anywhere, anytime. Sign in with your movora account to watch instantly on the web at movora.com from your personal computer or on any internet-connected device that offers the movora app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
            You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take movora with you anywhere."/>
            <Question text="what can i watch on movora ?" answer="movora has an extensive library of feature films, documentaries, TV shows, anime, award-winning movora originals, and more. Watch as much as you want, anytime you want."/>
            <Question text="is movora good for kids ?" answer="The movora Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."/>
            </div>
        </div>
    )
}
export  default Questions;