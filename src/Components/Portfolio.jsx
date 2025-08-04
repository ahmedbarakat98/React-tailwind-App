import React, { useState } from "react";
import car1 from "../assets/car 1.jpg";
import car2 from "../assets/car2.jpg";
import car3 from "../assets/car3.jpg";

export default function Portfolio() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(car1);
  function handleModal(image){
    setShowModal(!showModal);
    setSelectedImage(image)
  };
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex justify-center items-center relative">
          <h1 className="py-3 text-center pt-5 font-bold text-3xl text-[#2C3E50] afterH1  ">
            PORTFOLIO COMPONENT
          </h1>
        </div>

        {/* Cards  */}
        <div className="w-full p-5 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="mb-4">
            <div className="relative overflow-hidden group bg-white shadow rounded-lg">
              <img
                src={car1}
                className="w-full h-auto object-cover"
                alt="Project 1"
              />
              <div className="p-4">
                <h5 className="text-xl font-semibold">Lucid Air</h5>
                <p className="text-gray-600 text-sm mt-2">
                  Chevrolet Bolt EV is here today and ready to revolutionize the
                  way you drive electric. It has a long list of impressive
                  characteristics, including some of the most technologically
                  advanced features, stand-out looks and plenty of space.
                </p>
              </div>
              <div className="absolute inset-0 hidden group-hover:flex hover:bg-black/50 justify-center items-center  transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="text-white size-6 cursor-pointer"
                  onClick={() => handleModal(car1)}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="mb-4">
            <div className="relative overflow-hidden group bg-white shadow rounded-lg">
              <img
                src={car2}
                className="w-full h-auto object-cover"
                alt="Project 2"
              />
              <div className="p-4">
                <h5 className="text-xl font-semibold">Lucid Air</h5>
                <p className="text-gray-600 text-sm mt-2">
                  Chevrolet Bolt EV is here today and ready to revolutionize the
                  way you drive electric. It has a long list of impressive
                  characteristics, including some of the most technologically
                  advanced features, stand-out looks and plenty of space.
                </p>
              </div>
              <div className="absolute inset-0 hidden group-hover:flex hover:bg-black/50 justify-center items-center  transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="text-white size-6 cursor-pointer"
                  onClick={() => handleModal(car2)}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="mb-4">
            <div className="relative overflow- group bg-white shadow rounded-lg">
              <img
                src={car3}
                className="w-full h-auto object-cover"
                alt="Project 3"
              />
              <div className="p-4">
                <h5 className="text-xl font-semibold">Lucid Air</h5>
                <p className="text-gray-600 text-sm mt-2">
                  Chevrolet Bolt EV is here today and ready to revolutionize the
                  way you drive electric. It has a long list of impressive
                  characteristics, including some of the most technologically
                  advanced features, stand-out looks and plenty of space.
                </p>
              </div>
              <div className="absolute inset-0 hidden group-hover:flex hover:bg-black/50 justify-center items-center  transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="text-white size-6 cursor-pointer"
                  onClick={() => handleModal(car3)}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div
        className={
          showModal
            ? "fixed inset-0 z-10 bg-black/50 flex justify-center items-center"
            : "hidden"
        }
        onClick={() => {
          handleModal();
        }}
      >
        <div className=" w-150 h-100">
          <img src={selectedImage} alt="Car" />
        </div>
      </div>
    </>
  );
}
