import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Expand } from "lucide-react"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function CircularConstruction() {
  const [isExpanded, setIsExpanded] = useState(false)

  // Reusable items
  const items = [
    {
      title: "Sustainable Material",
      desc: "The process begins with sourcing eco-friendly, renewable, or low-impact raw materials. These could be recycled aggregates, responsibly harvested timber, or bio-based materials.",
    },
    {
      title: "Automated / Robotic Fabrication",
      desc: "Materials are processed and shaped into components using advanced manufacturing technologies, such as robotics or automated systems. This increases precision, reduces waste, and improves efficiency.",
    },
    {
      title: "Construction / Assembly",
      desc: "Prefabricated or processed materials are assembled on-site (or off-site) into structures, reducing construction time and disruption.",
    },
    {
      title: "Use Phase",
      desc: "The completed structure serves its intended purpose (e.g., housing, infrastructure, hydrogen refueling station in this example) while ideally incorporating renewable energy systems to reduce operational impact.",
    },
    {
      title: "End of Life",
      desc: "When the structure reaches the end of its service life, components are dismantled rather than demolished, enabling recovery of materials.",
    },
    {
      title: "Recycle",
      desc: "Materials and components are sorted, processed, and recycled for reuse, avoiding landfill disposal.",
    },
  ]

  return (
    <section className="py-8 px-6 md:px-32 flex flex-col gap-11 items-stretch">
      <div className="gap-6 flex flex-col lg:flex-row justify-center">
        {/* Left Section */}
        <Card className="flex flex-col justify-between py-6 md:py-15 max-w-full lg:max-w-155 justify-center items-center gap-6 md:gap-8 w-full lg:flex-1 bg-[#F5F5F5] border border-[#E0E0E0] rounded-5 p-6 md:p-10 shadow-none">
          <CardContent className="flex-1 flex flex-col items-center gap-4 md:gap-6 p-0">
            <h2 className="text-lg md:text-[26px] font-medium text-center">
              Circular Construction
            </h2>
            <p className="text-sm md:text-base leading-relaxed font-normal text-center">
              This diagram illustrates Circular Construction, a sustainable building approach where materials and components are reused, recycled, and reintegrated into new projects, minimizing waste and resource consumption. This approach differs from traditional linear construction (take → make → dispose) by designing systems where products and materials are kept in use for as long as possible.
            </p>

            <Button
              onClick={() => setIsExpanded(true)}
              className={`bg-[#4A4A4A] text-white rounded-full cursor-pointer w-fit px-6 py-3 h-12.5 md:text-base transition-all duration-300 ease-in-out transform ${
                isExpanded 
                  ? 'opacity-0 scale-95 pointer-events-none' 
                  : 'opacity-100 scale-100 hover:scale-105'
              }`}
            >
              Read More
            </Button>
          </CardContent>
        </Card>

        {/* Right Section */}
        <Card className="w-full max-w-full lg:max-w-155 lg:flex-1">
          <div className="flex justify-center relative w-full h-[300px] md:h-[350px] lg:h-[400px] p-4">
            <img
              src="/assets/img/ic_circular_construction.png"
              alt="Circular Construction Diagram"
              className="object-contain rounded-md w-full h-full max-w-full max-h-full"
            />

            {/* Modal Trigger */}
            <Dialog>
              <DialogTrigger asChild>
                <button className="absolute top-6 cursor-pointer md:text-base flex justify-center items-center gap-2 text-[#4A4A4A] right-6 w-full max-w-28 border-[#D8D8D8] h-8 font-medium bg-white border border-gray-300 rounded-full shadow hover:bg-gray-50 transition-colors duration-200">
                  <Expand className="h-4 w-4" />
                  Expand
                </button>
              </DialogTrigger>
              <DialogContent className="p-0 max-w-[50vw] max-h-[90vh] flex justify-center items-center bg-transparent [&>button]:cursor-pointer border-none shadow-none">
                <img
                  src="/assets/img/ic_circular_construction.png"
                  alt="Expanded Circular Construction Diagram"
                  className="object-contain rounded-md w-full h-full"
                />
              </DialogContent>
            </Dialog>
          </div>
        </Card>
      </div>

      {/* Expanded Content with Smooth Animation */}
      <div 
        className={`w-full mx-auto bg-[#F5F5F5] rounded-[20px] overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded 
            ? 'max-h-[3000px] opacity-100 py-6 md:py-8 px-4 md:px-6' 
            : 'max-h-0 opacity-0 py-0 px-4 md:px-6'
        }`}
      >
        <div className={`transition-all duration-300 ease-in-out delay-100 ${
          isExpanded ? 'transform translate-y-0' : 'transform -translate-y-4'
        }`}>
          {/* Grid Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[44px]">
            {items.map((item, index) => (
              <div 
                key={index} 
                className={`max-w-[600px] transition-all duration-300 ease-in-out ${
                  isExpanded 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-4'
                }`}
                style={{ 
                  transitionDelay: isExpanded ? `${200 + index * 100}ms` : '0ms' 
                }}
              >
                <div>
                  <h3 className="text-xl md:text-[26px] font-medium text-[#4A4A4A] mb-4 md:mb-6">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base max-w-[600px] font-normal text-[#4A4A4A] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Next Product System */}
          <div 
            className={`w-full mt-8 md:mt-10 transition-all duration-300 ease-in-out ${
              isExpanded 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-4'
            }`}
            style={{ 
              transitionDelay: isExpanded ? '800ms' : '0ms' 
            }}
          >
            <div className="mb-6 md:mb-[22px] max-w-[600px]">
              <h3 className="text-xl md:text-[26px] font-medium text-[#4A4A4A] mb-4 md:mb-6">
                Next Product System
              </h3>
              <p className="text-sm md:text-base font-normal text-[#4A4A4A] leading-relaxed">
                Recycled materials are fed back into the manufacturing process, creating components for a new project, closing the loop and ensuring resources circulate continuously.
              </p>
            </div>
          </div>

          {/* Close Button */}
          <div 
            className={`flex w-full justify-center transition-all duration-300 ease-in-out ${
              isExpanded 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-4'
            }`}
            style={{ 
              transitionDelay: isExpanded ? '900ms' : '0ms' 
            }}
          >
            <Button
              onClick={() => setIsExpanded(false)}
              className="bg-[#4A4A4A] cursor-pointer h-10 md:h-12.5 text-white rounded-full px-4 md:px-6 py-2 md:py-3 text-sm md:text-base hover:bg-[#3A3A3A] transition-colors duration-200"
            >
              Read Less
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}