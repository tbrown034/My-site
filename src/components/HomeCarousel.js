import Carousel from "react-bootstrap/Carousel";
import dataViz from "./Photos/DataViz.png";
import journalism from "./Photos/KeyBoard4.png";
import coding from "./Photos/codingbox.jpg";

const HomeCarousel = () => {
  return (
    <div style={{ display: 'block', width: 700, padding: 30 }}>
      <h4>Multi-tool Journalism/Developer</h4>
    <Carousel>
      <Carousel.Item interval={4500}>
        <img className="d-block w-100" src={journalism} alt="Image One" />
        <Carousel.Caption>
          <h3>Journalism</h3>
          <p>15 years of experience</p>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4500}>
        <img className="d-block w-100" src={coding} alt="Image Two" />
        <Carousel.Caption>
          <h3>Coding</h3>
          <p>FullStack Developer</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4500}>
        <img className="d-block w-100" src={dataViz} alt="Image One" />
        <Carousel.Caption>
          <h3>Data Viz</h3>
          <p>Data Viz</p>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default HomeCarousel;
