import trevPhoto from './Photos/trevorPhoto2.jpeg'
import journalism from './Photos/KeyBoard4.jpeg'
import datavizs from './Photos/datavizs.jpeg'
import webDev from './Photos/coding.jpeg'

const Home = () => {
  return (
    <>
      <div id="homeContainer">
        <h1 id="homeName">Hello, my name is Trevor</h1>
        <div id="homeIcons">
          <span class="material-symbols-outlined material-icons md-48">
            edit
          </span>
          <span class="material-symbols-outlined material-icons md-48">
            arrow_forward
          </span>
          <span class="material-symbols-outlined material-icons md-48">
            code
          </span>
        </div>
        <p id="homesubhead">
          From Investigative Journalism to FullStack Development
        </p>
        <div id="homePhotoContainer">
          <img src={trevPhoto} id="homeTrevorPhoto" alt="Trevor">
          </img>
        </div>
        <p id="homeIntro"> For the past 14 years, I have been a reporter, most recently as an investigative reporter with Oklahoma Watch. But now I'm trying something new. I have enrolled in OU Outreach's Coding Bootcamp, powered by FullStack Academy. Follow along with me as I embark on the next stage of my career and check out my journalism, data visualizations and web development work below!
        </p>
        <div class="bodyContainer">
                <a href="https://oklahomawatch.org/author/trevorbrown/">My Journalism</a>
                <img src={journalism}></img>
                <a href="projects.html">My Data Visualizations</a>
                <img src={datavizs}></img>
                <a href="https://github.com/tbrown034">My Web Development</a>
                <img src={webDev}></img>
        </div>
      </div>
    </>
  );
};
export default Home;
