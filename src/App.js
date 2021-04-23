import Header from "./components/Header/Header";
import "./index.css";
import Slider from "react-slick";
import SampleNextArrow from "./components/NextArrow/NextArrow";
import SamplePrevArrow from "./components/PrevArrow/PrevArrow";
import ItemCarouselDestaque from "./components/ItemCarouselDestaque/ItemCarouselDestaque";
import ItemGameDestaque from "./components/ItemGameDestaque/ItemGameDestaque";
import { listGamesHeader } from "./Models/Games";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };
  const settingsGames = {
    dots: false,
    infinite: false,
    slidesToShow: 3.3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Header />
      <Slider {...settings}>
        {listGamesHeader().map((item, key) => (
          <ItemCarouselDestaque
            key={key}
            image={item.image}
            title={item.title}
            value={item.value}
          />
        ))}
      </Slider>
    </>
  );
}

export default App;
