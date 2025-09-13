export default function SustainabilitySection() {
  return (
    <section className="bg-white py-16">
      <div className=" px-32.5">
        {/* Heading */}
        <h2 className="text-[26px] font-medium text-center text-gray-900 mb-5.5">
          Sustainability & Environmental Impact
        </h2>

        {/* Description */}
        <p className="text-center text-base leading-4 mb-5.5">
          The overall carbon footprint is the sum of the carbon footprint of the electricity used for electricity production and the carbon emissions due to the transport. 
          The aim of NatPower H is to supply hydrogen with Certificate of Origin in the framework of the requirement of the RED III directive, the production facility will be 
          as close as possible to the place of delivery in order to limit CO2 emission due to transport.
        </p>

        {/* Map Container */}
        <div className="relative w-full  rounded-[20px] overflow-hidden shadow-lg">
          {/* Map Image - Replace with actual map image */}
            <img
          src="/assets/img/ic_map_view.png" // replace with actual
          alt="Circular Construction Diagram"
          className="object-contain rounded-md mt-2"
        />
         <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            bg-white text-gray-800 px-6 py-3 rounded-full font-medium shadow-lg hover:bg-gray-50 transition-colors">
            Open Map
          </button>
        </div>
      </div>
    </section>
  )
}