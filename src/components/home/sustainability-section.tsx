import { Button } from "../ui/button";

export default function SustainabilitySection() {
  return (
    <section className="bg-white py-8 md:py-16">
      <div className="px-6 md:px-16 lg:px-32">
        {/* Heading */}
        <h2 className="text-lg md:text-xl lg:text-[26px] font-medium text-center mb-4 md:mb-5.5">
          Sustainability & Environmental Impact
        </h2>

        {/* Description */}
        <p className="text-center text-sm md:text-sm lg:text-base leading-5 md:leading-6 lg:leading-4 mb-6 md:mb-8 lg:mb-5.5 max-w-4xl font-normal mx-auto">
          The overall carbon footprint is the sum of the carbon footprint of the electricity used for electricity production and the carbon emissions due to the transport. 
          The aim of NatPower H is to supply hydrogen with Certificate of Origin in the framework of the requirement of the RED III directive, the production facility will be 
          as close as possible to the place of delivery in order to limit CO2 emission due to transport.
        </p>

        {/* Map Container */}
        <div className="relative w-full rounded-[12px] md:rounded-[16px] lg:rounded-[20px] overflow-hidden shadow-lg">
          <img
            src="/assets/img/ic_map_view.png"
            alt="Sustainability Map View"
            className="w-full h-[250px] md:h-[350px] lg:h-[400px] object-cover"
          />

          {/* External link with Button */}
          <a
            href="https://earth.google.com/web/@44.86789613,-0.54889338,1.68292251a,1779.03594807d,30y,-0h,0t,0r/data=CgRCAggBMikKJwolCiExbnNJa3NFb0lRT1AzV0xORFhLbkwzQ1JOeDFWaXFORm0gAToDCgEwQgIIAEoICMfgncIGEAE?authuser=0"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <Button
              className="cursor-pointer h-12.5 bg-white px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium shadow-lg hover:bg-gray-50 text-[#2E2E2E] transition-colors"
            >
              Open Map
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
