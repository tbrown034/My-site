import trevPhoto from "./Photos/Trevor12.JPG";
import cutOut from "./Photos/crop4.png";

const Home = () => {
  return (
    <>
      <div id="homeContainer">
        <h1>Hello, I'm Trevor.</h1>
        <div class="iconContainer">
                <span class="material-symbols-outlined material-icons md-48"> 
                edit
                </span>
                <span class="material-symbols-outlined material-icons md-48">
                add
                </span>
                <span class="material-symbols-outlined material-icons md-48">
                code
                </span>
        </div>
        <div id="homePhotoContainer">
            <img src={trevPhoto} id="homeTrevorPhoto" alt="Trevor"></img>
          </div>
        <h3>I'm an <b>award-winning investigative journalist</b> with nearly two decades of experience. I'm also a freshly minted <b>full-stack web developer</b> who is interested in building new tools at the intersection of technology and journalism. <u></u>Let's <b>create something cool.</b></h3>
        <div>
          <button></button>


        </div>
        
        


      </div>

        {/* <h1 id="homeName">Hello, I'm Trevor.</h1>
        <div id="homeBody">
          <div id="homeJournalist">
            <h2>Journalist</h2>
            <span class="material-symbols-outlined material-icons md-48"> 
                edit
                </span>
            <p>Award-winning journalist with more than 15 years of professional experience.</p>
          </div>
          <div id="homePhotoContainer">
            <img src={cutOut} id="homeTrevorPhoto" alt="Trevor"></img>
          </div>
          <div id="homeJournalist">
            <h2>Coder</h2>
            <span class="material-symbols-outlined material-icons md-48">
                code
                </span>
            <p>Full-stack programmer interested in the intersection of journalism and technology.</p>
          </div>
        </div>
        <button id="button1">Download My Resume</button>
        <button id="button1">Let's Talk</button>

      </div> */}
    </>
  );
};

export default Home;
