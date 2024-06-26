import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.png";
import img6 from "../../../assets/home/06.png";

import './Banner.css'

const Banner = () => {
  return (
    <div style={{ width: "100%", margin: "0 auto",}}>
      <Carousel
        showThumbs={true} // Optional: hide the thumbnail navigation
        showStatus={true} // Optional: hide the status bar
      >
        <div>
          <img src={img1} alt="carousel-image" style={{ maxWidth: "100%", height: "auto" }} />
        </div>
        <div>
          <img src={img2} alt="carousel-image" style={{ maxWidth: "100%", height: "auto" }} />
        </div>
        <div>
          <img src={img3} alt="carousel-image" style={{ maxWidth: "100%", height: "auto" }} />
        </div>
        <div>
          <img src={img4} alt="carousel-image" style={{ maxWidth: "100%", height: "auto" }} />
        </div>
        <div>
          <img src={img5} alt="carousel-image" style={{ maxWidth: "100%", height: "auto" }} />
        </div>
        <div>
          <img src={img6} alt="carousel-image" style={{ maxWidth: "100%", height: "auto" }} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
