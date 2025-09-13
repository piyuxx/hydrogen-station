"use client";

import { MoveRight, MoveDown } from "lucide-react";

const steps = [
  { id: 1, title: "Tube Trailer", icon: "/assets/svg/ic_tube_trailer.svg" },
  { id: 2, title: "Compressor", icon: "/assets/svg/ic_compressor.svg" },
  { id: 3, title: "High Pressure Buffer", icon: "/assets/svg/ic_pressure_buffer.svg" },
  { id: 4, title: "Chiller", icon: "/assets/svg/ic_chiller.svg" },
  { id: 5, title: "Dispenser", icon: "/assets/svg/ic_dispenser.svg" },
  { id: 6, title: "Safety Block", icon: "/assets/svg/ic_safety_block.svg" },
];

export default function HydrogenSection() {
  return (
    <section className="w-full px-[130px] py-[69px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[21px] items-stretch max-w-[1440px] max-h-158 mx-auto">
        
        {/* Left Column */}
        <div className="flex flex-col gap-[34px]">
          {/* Main Diagram */}
          <img
            src="/assets/img/ic_natpower_image.png"
            alt="Hydrogen Flow"
            width={670}
            height={425}
            className="w-full h-[423px] object-contain"
          />

          {/* Steps */}
          <div className="flex flex-wrap items-center justify-between w-full">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="flex flex-col md:flex-row items-center text-center"
              >
                {/* Step Circle + Icon + Label */}
                <div className="flex flex-col items-center justify-center min-w-[60px]">
                  {/* Small Circle */}
                  <div className="w-[14px] h-[14px] flex items-center justify-center rounded-full bg-[#4A4A4A] text-white text-[8px] font-semibold mb-2">
                    {step.id}
                  </div>

                  {/* Small Icon */}
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-[30px] h-[30px] flex items-center justify-center mb-1">
                      <img
                        src={step.icon}
                        alt={step.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-[8px] font-medium leading-tight">{step.title}</p>
                  </div>
                </div>

                {/* Arrow (not last step) */}
                {index < steps.length - 1 && (
                  <div className="flex items-center justify-center mx-1 md:mx-2 flex-shrink-0">
                    {/* ↓ on mobile, → on desktop */}
                    <MoveDown className="text-gray-400 w-3 h-3 block md:hidden" />
                    <MoveRight className="text-gray-400 w-4 h-4 hidden md:block" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (Yacht Image) */}
        <img
          src="/assets/img/ic_boats.png"
          alt="Yacht Dock"
          width={512}
          height={555}
          className="w-full h-full max-h-[555px] object-fill rounded-2xl"
        />
      </div>
    </section>
  );
}