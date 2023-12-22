import ServiceMain from "./ServiceMain";
import ServiceImg1 from "/images/service-1.jpg";
import ServiceImg2 from "/images/service-2.jpg";
import ServiceImg3 from "/images/service-1.jpg";

const Service = () => {
  // sm:
  // md:
  // lg:
  // xl:
  // 2xl:

  return (
    <div className="bg-white py-[130px]">
      <div className="Container">
        <div className="text-center overflow-hidden mb-5 md:mb-6 xl:mb-7">
          <h4 className="text-[#ff5e14] text-sm sm:text-base md:text-[17px] lg:text-lg 2xl:text-xl font-medium font-Yantramanav">
            OUR SERVICES
          </h4>
          <h1 className="text-[22px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] 2xl:text-[50px] 3xl:text-[70px] font-bold leading-8 md:leading-[40px] lg:leading-[48px] xl:leading-[58px] pt-2 text-[#0a1027] font-Yantramanav">
            Service We are Offering to Our Customers
          </h1>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {/* Service card one. */}

          <ServiceMain
            serviceImg={ServiceImg1}
            serviceTitle="Architecture"
            desc="A factory is a business that produces goods or products goods can range from consumer products such as clothing"
          />

          {/* service card -2  */}
          <ServiceMain
            serviceImg={ServiceImg2}
            serviceTitle="Architecture Title 2"
            desc="A factory is a business that produces goods or products goods can range from consumer products such as clothing..."
          />
              
          {/* service card -3 */}
          <ServiceMain
            serviceImg={ServiceImg3}
            serviceTitle="Architecture title - 03"
            desc="A factory is a business that produces goods or products goods can range from consumer products such as clothing..03"
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
