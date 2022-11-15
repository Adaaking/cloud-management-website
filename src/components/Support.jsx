import React from "react";
import {  BsArrowRight } from "react-icons/bs";
import {HiSupport,HiChip} from 'react-icons/hi'
import {SlPhone} from 'react-icons/sl'
import supportImg from "../Assets/support.jpg";

const Support = () => {
  return (
    <div className="w-full h-screen mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img className="w-full h-full object-cover mix-blend-overlay" src={supportImg} alt="/" />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-3">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">Support</h2>
          <h3 className="text-5xl font-bold py-6 text-center">Finding the right team</h3>
          <p className="py-4 text-xl text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            error, facilis incidunt magnam voluptatum cum quasi mollitia quaerat
            nemo debitis dolorum consequuntur corporis similique fuga quidem.
            Vero commodi numquam dignissimos?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4  pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <div className="text-white w-14 p-3 bg-indigo-600  rounded-lg mt-[-4rem]">
                 <SlPhone className="text-2xl"/>
              </div>
              <h3 className="font-bold text-2xl my-6">sales</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatum rem aliquam at ut esse mollitia molestias labore
                velit nulla odio!
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
                <p className="flex text-indigo-600 items-center">Contact Us <BsArrowRight className="w-5 ml-2"/> </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <div className="text-white w-14 p-3 bg-indigo-600  rounded-lg mt-[-4rem]">
                 <HiSupport className="text-2xl"/>
              </div>
              <h3 className="font-bold text-2xl my-6">Technical support</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatum rem aliquam at ut esse mollitia molestias labore
                velit nulla odio!
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
                <p className="flex text-indigo-600 items-center">Contact Us <BsArrowRight className="w-5 ml-2"/> </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <div className="text-white w-14 p-3 bg-indigo-600  rounded-lg mt-[-4rem]">
                 <HiChip className="text-2xl"/>
              </div>
              <h3 className="font-bold text-2xl my-6">Media enqiuries</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatum rem aliquam at ut esse mollitia molestias labore
                velit nulla odio!
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
                <p className="flex text-indigo-600 items-center">Contact Us <BsArrowRight className="w-5 ml-2"/> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
