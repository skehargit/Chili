import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { FiTwitter } from "react-icons/fi";
const Footer = () => {
  return (
    <div className="py-5 bg-red-500 ">
      <div>
        <div className="p-3 flex flex-col gap-2">
          <div className="flex gap-2">
            <div className="font-semibold capitalize">address :</div>
            <p>
              Street 252, Laxmi Rd, Narayan Peth, Pune, Maharashtra, 411030,
              India
            </p>
          </div>
          <div className="flex gap-2">
            <div className="font-semibold capitalize">details :</div>
            <div className="flex gap-2">
              <div>menu</div>
              <div>about</div>
              <div>time</div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="font-semibold capitalize">contact us :</div>
            <div className="flex gap-2">
              <p>+01010101010</p>
              <p>chilirestaurant@email.com</p>
            </div>
          </div>
          <div className="flex gap-2">
            <FaInstagram />
            <IoLogoFacebook />
            <FiTwitter />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
