import Header from './components/Header/Header';
import './index.css';
import Slider from "react-slick";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
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
