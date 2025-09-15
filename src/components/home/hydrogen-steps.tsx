"use client";

import { MoveRight } from "lucide-react";

const steps = [
  { id: 1, title: "Tube Trailer", icon: "/assets/svg/ic_tube_trailer.svg", size: "h-[32px] w-[52px]" },
  { id: 2, title: "Compressor", icon: "/assets/svg/ic_compressor.svg", size: "h-[30px] w-[30px]" },
  { id: 3, title: "High Pressure Buffer", icon: "/assets/svg/ic_pressure_buffer.svg", size: "h-[30px] w-[30px]" },
  { id: 4, title: "Chiller", icon: "/assets/svg/ic_chiller.svg", size: "h-[32px] w-[32px]" },
  { id: 5, title: "Dispenser", icon: "/assets/svg/ic_dispenser.svg", size: "h-[30px] w-[30px]" },
  { id: 6, title: "Safety Block", icon: "/assets/svg/ic_safety_block.svg", size: "h-[31px] w-[31px]" },
];

export default function HydrogenSection() {
  return (
    <section className="w-full px-6 md:px-8 lg:px-16 xl:px-[136px] py-8 md:py-12 lg:py-16 xl:py-[69px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-[21px] items-stretch max-w-[1440px] mx-auto">

        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {/* Main Diagram */}
          <div className="w-full">
            <img
              src="/assets/img/ic_natpower_image.png"
              alt="Hydrogen Flow"
              className="w-full h-[200px] md:h-[300px] lg:h-[350px] xl:h-[423px] object-contain"
            />
          </div>

          {/* Steps - Mobile: 2 rows, Desktop: 1 row */}
          <div className="w-full">
            {/* Mobile Layout: 2 rows */}
            <div className="block md:hidden">
              {/* First row: 3 steps */}
              <div className="flex items-center justify-between w-full mb-4">
                {steps.slice(0, 3).map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    {/* Step */}
                    <div className="flex flex-col items-center text-center max-w-[75px]">
                      {/* Step Number */}
                      <div className="w-4 h-4 flex items-center justify-center rounded-full bg-[#4A4A4A] text-white text-[6px] font-semibold mb-2">
                        {step.id}
                      </div>

                      {/* Icon with dynamic size */}
                      <div className={`mb-2 ${step.size}`}>
                        <img
                          src={step.icon}
                          alt={step.title}
                          className="w-full h-full object-contain text-[#4A4A4A]"
                        />
                      </div>

                      {/* Label */}
                      <p className="text-[8px] font-medium text-gray-700 leading-tight min-h-[24px] flex items-center justify-center">
                        {step.title}
                      </p>
                    </div>

                    {/* Arrow (not last in row) */}
                    {index < 2 && (
                      <div className="flex items-center flex-1 px-1">
                        <div className="relative w-full flex items-center">
                          <div className="flex-1 border-t border-gray-300" />
                          <MoveRight className="mx-1 text-[#4A4A4A] w-4 h-4" />
                          <div className="flex-1 border-t border-gray-300" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Vertical Arrow between rows */}
              <div className="flex justify-center mb-4">
                <div className="rotate-90">
                  <MoveRight className="text-[#4A4A4A] w-5 h-5" />
                </div>
              </div>

              {/* Second row: 3 steps */}
              <div className="flex items-center justify-between w-full">
                {steps.slice(3, 6).map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    {/* Step */}
                    <div className="flex flex-col items-center text-center max-w-[75px]">
                      {/* Step Number */}
                      <div className="w-4 h-4 flex items-center justify-center rounded-full bg-[#4A4A4A] text-white text-[6px] font-semibold mb-2">
                        {step.id}
                      </div>

                      {/* Icon with dynamic size */}
                      <div className={`mb-2 ${step.size}`}>
                        <img
                          src={step.icon}
                          alt={step.title}
                          className="w-full h-full object-contain text-[#4A4A4A]"
                        />
                      </div>

                      {/* Label */}
                      <p className="text-[8px] font-medium text-gray-700 leading-tight min-h-[24px] flex items-center justify-center">
                        {step.title}
                      </p>
                    </div>

                    {/* Arrow (not last in row) */}
                    {index < 2 && (
                      <div className="flex items-center flex-1 px-1">
                        <div className="relative w-full flex items-center">
                          <div className="flex-1 border-t border-gray-300" />
                          <MoveRight className="mx-1 text-[#4A4A4A] w-4 h-4" />
                          <div className="flex-1 border-t border-gray-300" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Layout: Original single row */}
            <div className="hidden md:flex items-center justify-between w-full">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  {/* Step */}
                  <div className="flex flex-col items-center text-center max-w-[75px]">
                    {/* Step Number */}
                    <div className="w-4 h-4 flex items-center justify-center rounded-full bg-[#4A4A4A] text-white text-[6px] font-semibold mb-2">
                      {step.id}
                    </div>

                    {/* Icon with dynamic size */}
                    <div className={`mb-2 ${step.size}`}>
                      <img
                        src={step.icon}
                        alt={step.title}
                        className="w-full h-full object-contain text-[#4A4A4A]"
                      />
                    </div>

                    {/* Label (fixed height for all) */}
                    <p className="text-[8px] font-medium  leading-tight min-h-[24px] flex items-center justify-center">
                      {step.title}
                    </p>
                  </div>

                  {/* Arrow (not last step) */}
                  {index < steps.length - 1 && (
                    <div className="flex items-center flex-1 px-1">
                      <div className="relative w-full flex items-center">
                        <div className="flex-1 border-t border-gray-300" />
                        <MoveRight className="mx-2 text-[#4A4A4A] w-5 h-5" />
                        <div className="flex-1 border-t border-gray-300" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
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