import Header from './components/Header/Header';
import './index.css';
import Slider from "react-slick";
import SampleNextArrow from './components/NextArrow/NextArrow';
import SamplePrevArrow from './components/PrevArrow/PrevArrow';
import ItemCarouselDestaque from './components/ItemCarouselDestaque/ItemCarouselDestaque';

function App() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    
    <>
      <Header/>
      <section className="section-hero">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <Slider {...settings}>
                  <ItemCarouselDestaque />
                  <div>
                    a
                  </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
