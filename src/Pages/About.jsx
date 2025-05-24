import React from 'react';
import Slider from 'react-slick';
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';
import Room from "../assets/newroomseven.jpeg";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { RiCustomerService2Fill } from "react-icons/ri";
import { GiThunderSkull, GiTyre } from "react-icons/gi";
import { FaWifi } from "react-icons/fa";
import { MdCleaningServices } from "react-icons/md";
import { BiFoodTag } from "react-icons/bi";
import { BsLightningCharge } from "react-icons/bs";

const About = () => {
  const stats = [
    { value: "712", label: "Happy Guests" },
    { value: "254", label: "Return Guests" },
    { value: "689", label: "Five Stars Rating" },
    { value: "782", label: "Served Breakfast" },
  ];

  const services = [
    { title: "Customer Satisfaction", icon: <RiCustomerService2Fill className='text-gray-600' /> },
    { title: "Free Wifi", icon: <FaWifi className='text-green-600' /> },
    { title: "Power Backup", icon: <GiThunderSkull /> },
    { title: "Delicious Breakfast", icon: <BiFoodTag className='text-green-400' /> },
    { title: "EV Charger", icon: <BsLightningCharge className='text-slate-900' /> },
    { title: "Good Parking & Security", icon: <GiTyre className='text-black' /> },
    { title: "Clean Room Service", icon: <MdCleaningServices className='text-[#895129]' /> },
  ];

 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { arrows: true } },
      { breakpoint: 768, settings: { arrows: false } },
      { breakpoint: 480, settings: { arrows: false } },
    ],
  };

  return (
    <>
      <Navbar />

      {/* Introduction */}
      <section className="min-h-[70vh] w-full flex flex-col md:flex-row justify-between px-4 sm:px-6 md:px-10 py-6 gap-6">
        <div className="w-full md:w-[54%] bg-gray-900 text-white rounded-xl p-6 order-2 md:order-1">
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold font-serif">
            INTRODUCTION OF <span>SAMAR<span className="text-yellow-400 font-bold">NIWAS</span> DEHRADUN</span>
          </p>
          <p className="text-sm sm:text-base py-6">
            Nestled amidst tall pine and oak trees, this hill station hotel offers a serene escape into nature. Perfect for a peaceful vacation, the hotel provides stunning mountain views, fresh air, and a relaxing environment ideal for couples, families, and solo travelers looking to unwind in the hills.
          </p>
        </div>

        <div className="w-full md:w-[40%] order-1 md:order-2">
          <img src={Room} alt="rooms" className="w-full h-full object-cover rounded-xl" />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-14 px-4 sm:px-6 md:px-20 bg-gradient-to-r from-red-50 via-white to-red-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center text-red-600 mb-6 tracking-tight">
            Our Mission & Vision
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-start cursor-pointer">
            <div className="bg-white shadow-xl rounded-xl p-8 transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-red-100 p-4 rounded-full text-red-500 text-2xl">🎯</div>
                <h3 className="text-xl font-bold text-red-600">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed font-semibold">
                To provide exceptional hospitality and unforgettable experiences in the lap of nature...
              </p>
            </div>

            <div className="bg-white shadow-xl rounded-xl p-8 transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-yellow-100 p-4 rounded-full text-yellow-500 text-2xl">🌄</div>
                <h3 className="text-xl font-bold text-yellow-600">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed font-semibold">
                To become the most loved hill resort in Uttarakhand by promoting local culture...
              </p>
            </div>
          </div>
        </div>
      </section>
{/* About Samar Niwas - Extended Section */}
<section className="bg-white py-14 px-4 sm:px-6 md:px-20">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Why Choose Samar Niwas?</h2>
    <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
      Samar Niwas is more than just a place to stay—it's a warm and welcoming haven in the serene lap of Dehradun's lush landscapes. Whether you're here for a weekend getaway or an extended stay, our hotel is crafted to make you feel at home, while embracing the charm of the hills.
    </p>

    <div className="grid md:grid-cols-2 gap-10 items-start">
      <div>
        <h3 className="text-2xl font-semibold text-red-600 mb-3">Prime Location</h3>
        <p className="text-gray-600">
          Located in the heart of Dehradun, Samar Niwas is easily accessible yet tucked away from the hustle of city life. Surrounded by oak and pine trees, it offers a tranquil setting with close proximity to popular tourist spots like Robber’s Cave, Sahastradhara, and Mussoorie.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-red-600 mb-3">Comfort & Amenities</h3>
        <p className="text-gray-600">
          Our rooms are thoughtfully designed with modern interiors, comfortable bedding, and scenic balconies. Guests can enjoy complimentary breakfast, 24/7 room service, high-speed internet, power backup, and EV charging facilities.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-red-600 mb-3">Tradition Meets Hospitality</h3>
        <p className="text-gray-600">
          We are deeply rooted in the local Garhwali and Kumaoni culture. At Samar Niwas, our staff welcomes you with the warmth and hospitality that Uttarakhand is known for—making your stay not just pleasant, but culturally immersive.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-red-600 mb-3">Our Story</h3>
        <p className="text-gray-600">
          Established in 2015 as a family-run guesthouse, Samar Niwas has grown into a well-loved boutique hotel. Built with passion and commitment to service, we continue to uphold the values of simplicity, sincerity, and customer satisfaction.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Services */}
      <section className="w-full bg-gray-100 py-10 flex justify-center items-center px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl w-full font-bold">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-xl"
            >
              <div className="text-6xl">{service.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-center">{service.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Virtual Tour */}
      <section
        className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center bg-gray-900"
        style={{ backgroundImage: "url('/hotel-tour-fallback.jpg')" }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <div className="bg-white p-4 rounded-full mb-4">
            <span className="text-4xl text-red-900">▶</span>
          </div>
          <h2 className="text-lg md:text-xl font-semibold text-yellow-400">VIRTUAL TOUR</h2>
          <h1 className="text-2xl md:text-3xl font-bold">OF HOTEL SAMAR NIWAS</h1>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white shadow-lg rounded-lg mx-4 md:mx-auto md:w-4/5 py-6 px-4 md:px-8 flex flex-wrap justify-around text-center -mt-16 relative z-10">
        {stats.map((stat, index) => (
          <div key={index} className="w-1/2 sm:w-1/4 py-4">
            <span className="text-3xl font-bold text-red-600">{stat.value}</span>
            <p className="text-gray-600 text-xl font-bold uppercase">{stat.label}</p>
          </div>
        ))}
      </section>

     

      <Footer />
    </>
  );
};

export default About;
