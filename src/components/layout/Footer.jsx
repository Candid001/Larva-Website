import React from "react";
import FootLogo from "@assets/Vector (1).svg";
import Whatsapp from '@assets/whatsapp-line.svg'
import Mail from '@assets/mail-line.svg'
import Instagram from "@assets/Vector (4).svg";
import X from "@assets/twitter-x-fill (1).svg";
import Facebook from "@assets/facebook-circle-fill (1).svg";
import Linkdin from "@assets/Vector (5).svg";

const Footer = () => {
  return (
    <>
      <div className="relative bg-[#6D6D6D] h-[700px] max-w-full px-5 py-5 md:flex md:gap-4 md:h-[500px]">
        <div className="flex flex-col md:w-1/3">
          <img src={FootLogo} alt="Logo" className="h-40 w-40"/>
          <div className="text-white flex flex-col gap-4">
            <h2 className="font-bold text-lg">Join us at:</h2>
            <p>
              Ibadan Address: NO 5, Akinsehinwa Street, Beside Adis Hotel, Off
              Favos bus stop, New Bodija, Ibadan.
            </p>
            <p className="flex gap-1">
                <img src={Whatsapp} alt="Whatsapp Logo" />
                <span><b>Call/WhatsApp:</b> 09158476665</span>
            </p>
            <p className="flex gap-1">
                <img src={Mail} alt="Mail Logo" />
                <span><b>Email:</b> Larvanigeria@gmail.com</span>
            </p>
          </div>
        </div>

        <div className="pt-10 text-white flex justify-between md:w-2/3">
            <div className="flex flex-col gap-4">
                <h1 className="font-bold text-xl">Company</h1>
                <p className="text-sm">About Larva</p>
                <p className="text-sm">News</p>
                <p className="text-sm">Certification</p>
                <p className="text-sm">Our Partners</p>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="font-bold text-xl">Courses</h1>
                <p className="text-sm">Full Stack Developmen</p>
                <p className="text-sm">Front End Development</p>
                <p className="text-sm">Back End Development</p>
                <p className="text-sm">UI/UX Design</p>
                <p className="text-sm">Cyber Security</p>
                <p className="text-sm">See more...</p>

            </div>
            <div className="flex flex-col gap-4">
                <h1 className="font-bold text-xl">Support</h1>
                <p className="text-sm">Privacy Policy</p>
                <p className="text-sm">Terms of Use</p>
                <p className="text-sm">FAQ</p>
                <p className="text-sm">Contact Us</p>
            </div>
        </div>

        <div className="absolute flex gap-2 right-4 md:bottom-5 md:gap-4">
            <img src={Instagram} alt="" className="md:w-8"/>
            <img src={X} alt="" className="md:w-8"/>
            <img src={Facebook} alt="" className="md:w-8"/>
            <img src={Linkdin} alt="" className="md:w-8"/>
        </div>
      </div>
    </>
  );
};

export default Footer;
