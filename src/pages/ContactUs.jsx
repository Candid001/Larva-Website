import React from "react";
import Mail from "@assets/mail-line.svg";
import Time from "@assets/time-line.svg";
import Map from "@assets/map-pin-line.svg";
import Map2 from '@assets/Desktop - 23.svg'
import Animie from '@assets/Frame 1000008442.svg'



const Contact = () => {
  return (
    <>
      <div className="w-full py-10 px-5 flex flex-col gap-8 md:px-10 lg:px-20">
        <h1 className="text-2xl font-bold text-center">
          Contact <span className="text-[#F39821]">Us</span>
        </h1>

        <div className="flex flex-col md:flex md:flex-row justify-between lg:w-[1240px] lg:justify-between"
        >
          <div className="flex gap-4 lg:w-[413px]">
            <img
              src={Mail}
              alt="Logo"
              className="p-4 bg-gradient-to-b from-[#7A5DA8] to-[#F39821] rounded-full w-16 h-16"
            />
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-xl text-[#4F4F4F]">
                Contact Us
              </h3>
              <p className="text-sm text-[#6D6D6D]">
                Call/WhatsApp: 09158476665
              </p>
              <p className="text-sm text-[#6D6D6D]">
                Email: Larvanigeria@gmail.com
              </p>
            </div>
          </div>

          <div className="flex gap-4 lg:w-[413px]">
            <img
              src={Time}
              alt="Logo"
              className="p-4 bg-gradient-to-b from-[#7A5DA8] to-[#F39821] rounded-full w-16 h-16"
            />
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-xl text-[#4F4F4F]">
                Opening Hours
              </h3>
              <p className="text-sm text-[#6D6D6D]">Mon - Sat: 8am - 4pm</p>
              <p className="text-sm text-[#6D6D6D]">Sunday: 2pm - 4pm</p>
            </div>
          </div>

          <div className="flex gap-4 lg:w-[413px]">
            <img
              src={Map}
              alt="Logo"
              className="p-4 bg-gradient-to-b from-[#7A5DA8] to-[#F39821] rounded-full w-16 h-16"
            />
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-xl text-[#4F4F4F]">
                Our Office
              </h3>
              <p className="text-sm text-[#6D6D6D]">
                Ibadan Address: NO 5, Akinsehinwa Street, Beside Adis Hotel, Off
                Favos bus stop, New Bodija, Ibadan.
              </p>
              <p className="text-sm text-[#6D6D6D]">
                Abuja Address - Inside Rosa Mystica School, Plot 216 Ave Maria
                Cottage, Waterboard Road, Off Liberty Junction, Byazhin, Kubwa,
                Abuja
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
            <img src={Map2} alt="Image" className=""/>
        </div>

    <div className="px-5 py-10 md:flex md:justify-between md:px-10 lg:px-20">
        <img src={Animie} alt="Image" className="hidden md:flex w-[50%]"/>
        <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold">Get In <span className="text-[#F39821]">Touch</span></h2>
            <p className="text-sm text-[#4F4F4F]">Contact our friendly reception staff with any enquiry</p>
            <input type="text" placeholder="Name" className="px-4 py-[10px] w-full border-1 text-sm border-[#F3F3F3] rounded-[8px] focus:outline-none"/>
            <input type="text" placeholder="Email Address" className="px-4 py-[10px] w-full border-1 text-sm border-[#F3F3F3] rounded-[8px] focus:outline-none"/>
            <textarea
                  id="message"
                  name="message"
                  required
                  className="px-4 py-[15px] w-full h-[282px] border-1 text-sm border-[#F3F3F3] rounded-[8px] focus:outline-none"
                  placeholder="Message"
                ></textarea> 
            <button className="rounded-[8px] bg-gradient-to-b from-[#7A5DA8] to-[#F39821] py-[14px] px-[29px]">Send Message</button>
        </div>

    </div>
    
    </>
  );
};

export default Contact;
