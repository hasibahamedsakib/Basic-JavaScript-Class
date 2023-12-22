import Slider from "react-slick";

const CenterMode = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    arrows: true,
  };

  return (
    <div>
      <h2>Center Mode</h2>
      <Slider {...settings}>
        <div>
          <h3 className="w-40 h-40 bg-red-600">1</h3>
        </div>
        <div>
          <h3 className="w-40 h-40 bg-red-600">2</h3>
        </div>
        <div>
          <h3 className="w-40 h-40 bg-red-600">3</h3>
        </div>
        <div>
          <h3 className="w-40 h-40 bg-red-600">3</h3>
        </div>
        <div>
          <h3 className="w-40 h-40 bg-red-600">3</h3>
        </div>
      </Slider>
    </div>
  );
};

export default CenterMode;
