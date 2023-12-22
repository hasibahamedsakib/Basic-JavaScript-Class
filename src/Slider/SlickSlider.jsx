import Slider from "react-slick";

const CardSliderCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          src="https://images.unsplash.com/photo-1682686580224-cd46ea1a6950?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Card 1"
        />
      </div>
      <div>
        <img
          src="https://plus.unsplash.com/premium_photo-1701060557037-698fd5525657?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Card 2"
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Card 3"
        />
      </div>
      {/* Add more card items */}
    </Slider>
  );
};

export default CardSliderCarousel;
