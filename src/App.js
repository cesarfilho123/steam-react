import Header from './components/Header/Header';
import './index.css';
import Slider from "react-slick";
import SampleNextArrow from './components/NextArrow/NextArrow';
import SamplePrevArrow from './components/PrevArrow/PrevArrow';
import ItemCarouselDestaque from './components/ItemCarouselDestaque/ItemCarouselDestaque';
import ItemGameDestaque from './components/ItemGameDestaque/ItemGameDestaque';
import { listGamesHeader } from './Models/Games';

function App() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  const settingsGames = {
    dots: false,
    infinite: false,
    slidesToShow: 3.3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <>
      <Header/>
      <section className="section-hero">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <Slider {...settings}>
                  {
                    listGamesHeader().map((item, key) => (
                      <ItemCarouselDestaque
                      key={key} 
                      image={item.image} 
                      title={item.title}
                      value={item.value}
                      />
                    ))
                  }
                  
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section className="section-multigames">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <h6 className="text-white">
                Special Offers
              </h6>
              <Slider {...settingsGames}>
                  <ItemGameDestaque />
                  <ItemGameDestaque />
                  <ItemGameDestaque />
                  <ItemGameDestaque />
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
