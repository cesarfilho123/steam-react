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
  const items = [
    {
      "image" : "/images/games/fifa.jpg",
      "title": "EA SPORTS™ FIFA 21 : Standard Edition",
      "value" : "299.00"
    },
    {
      "image" : "/images/games/gta.jpg",
      "title" : "Grand Theft Auto V",
      "value" : "99.00"
    },
    {
      "image" : "/images/games/cyber.jpg",
      "title" : "Cyberpunk 2077",
      "value" : "299.00"
    },
    {
      "image" : "/images/games/pes.jpg",
      "title" : "eFootball PES 2021 - Season Update 2020/2021",
      "value" : "199.00"
    },
    {
      "image" : "/images/games/witcher.jpg",
      "title":"The Witcher 3 : Wild Hunt - Game of the Year Edition",
      "value" : "87.99"
    },
  ]
  
  return (
    <>
      <Header/>
      <section className="section-hero">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <Slider {...settings}>
                  {
                    items.map(item => (
                      <ItemCarouselDestaque 
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
    </>
  );
}

export default App;
