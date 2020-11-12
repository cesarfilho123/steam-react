import Header from './components/Header/Header';
import './index.css';
import Slider from "react-slick";
import SampleNextArrow from './components/NextArrow/NextArrow';
import SamplePrevArrow from './components/PrevArrow/PrevArrow';


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
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Slider {...settings}>
                  <div >
                    a
                  </div>
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
