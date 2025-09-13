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
    <section className="w-full px-6 md:px-8 lg:px-16 xl:px-[130px] py-8 md:py-12 lg:py-16 xl:py-[69px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-[21px] items-stretch max-w-[1440px] mx-auto">
        
        {/* Left Column */}
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-[34px]">
          {/* Main Diagram */}
          <div className="w-full">
            <img
              src="/assets/img/ic_natpower_image.png"
              alt="Hydrogen Flow"
              className="w-full h-[200px] md:h-[300px] lg:h-[350px] xl:h-[423px] object-contain"
            />
          </div>

          {/* Steps */}
          <div className="flex flex-wrap items-center justify-between w-full gap-1 md:gap-2">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="flex flex-col items-center text-center"
              >
                {/* Step Circle + Icon + Label */}
                <div className="flex flex-col items-center justify-center min-w-[40px] md:min-w-[50px] lg:min-w-[60px]">
                  {/* Small Circle */}
                  <div className="w-2 h-2 md:w-3 md:h-3 lg:w-[14px] lg:h-[14px] flex items-center justify-center rounded-full bg-[#4A4A4A] text-white text-[6px] md:text-[7px] lg:text-[8px] font-semibold mb-1 md:mb-2">
                    {step.id}
                  </div>

                  {/* Small Icon */}
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-4 h-4 md:w-6 md:h-6 lg:w-[30px] lg:h-[30px] flex items-center justify-center mb-1">
                      <img
                        src={step.icon}
                        alt={step.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-[4px] md:text-[6px] lg:text-[8px] font-medium leading-tight max-w-[40px] md:max-w-[50px] lg:max-w-none">
                      {step.title}
                    </p>
                  </div>
                </div>

                {/* Arrow (not last step) */}
                {index < steps.length - 1 && (
                  <div className="flex items-center justify-center mx-0.5 md:mx-1 lg:mx-2 flex-shrink-0">
                    {/* ↓ on mobile, → on larger screens */}
                    <MoveDown className="text-gray-400 w-2 h-2 md:w-3 md:h-3 block lg:hidden" />
                    <MoveRight className="text-gray-400 w-3 h-3 md:w-4 md:h-4 hidden lg:block" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (Yacht Image) */}
        <div className="w-full">
          <img
            src="/assets/img/ic_boats.png"
            alt="Yacht Dock"
            className="w-full h-[250px] md:h-[400px] lg:h-full lg:max-h-[555px] object-cover rounded-lg md:rounded-xl lg:rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}