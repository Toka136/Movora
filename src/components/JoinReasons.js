import './Join.css'
function JoinReason()
{
    return(
        <div className="join">
            <div className="joincont">
            <h1>More Reasons to Join</h1>
            <div className="reasons">
                <div>
                    
                    <h1>Enjoy on your TV</h1>
                    <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    <div className="icon">
                        <i class="fa-solid fa-tv"></i>
                    </div>
                </div>
                <div>
                    <h1>Download your shows to watch offline</h1>
                    <p>Save your favorites easily and always have something to watch.</p>
                    <div className="icon">
                       <i class="fa-solid fa-arrow-down"></i>
                    </div>
                </div>
                <div>
                    <h1>Watch everywhere</h1>
                    <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    <div className="icon">
                      <i class="fa-solid fa-globe"></i>
                    </div>
                </div>
                <div>
                    <h1>Create profiles for kids</h1>
                    <p>Send kids on adventures with their favorite characters in a space made just for them — free with your membership.</p>
                    <div className="icon">
                        <i class="fa-solid fa-children"></i>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default JoinReason;