/* eslint-disable react/prop-types */
import { MdOutlineChair } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const ServiceMain = ({ serviceImg, serviceTitle, desc, url }) => {
  return (
    <div className="overflow-hidden border group">
      <div className="service-card-img ">
        <img src={serviceImg} alt="img" />
      </div>

      <div className=" relative z-[1] w-full -top-[30px] left-[30px] [box-shadow:0_0_16px_rgb(0_0_0_/_10%)] pt-[25px] px-[30px] pb-[40px] bg-[#fff]">
        <div className="absolute -top-[40px] right-[60px] bg-[#fff] px-[24px] py-[25px] rounded-[50%] transition:all [box-shadow:0_0_60px_rgb(0_0_0_/_10%)]  ">
          <span className="service-chair-outline">
            <MdOutlineChair className="text-[35px] text-SecondaryColor-0 group-hover:text-white transition:all duration-500 " />
          </span>
        </div>

        <h1 className="text-[#0a1027] text-lg sm:text-xl md:text-2xl lg:text-[27px] font-Yantramanav font-bold  my-1">
          {serviceTitle}
        </h1>
        <p className=" text-[#565969] font-Archivo text-sm sm:text-base">
          {desc}
        </p>
        <Link to={url}>
          {/* <button className="primary-btn2">Read More</button> */}
          <Button btnText="Read More" btnClass="primary-btn2" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceMain;
