import { ChevronDown } from "lucide-react"

type ComponentButton = {
  id: number
  title: string
  icon: string
}

const componentButtons: ComponentButton[] = [
  { id: 1, title: "Tube Trailer", icon: "/assets/svg/ic_tube_trailer.svg" },
  { id: 2, title: "Compressor", icon: "/assets/svg/ic_compressor.svg" },
  { id: 3, title: "High Pressure Buffer", icon: "/assets/svg/ic_pressure_buffer.svg" },
  { id: 4, title: "Chiller", icon: "/assets/svg/ic_chiller.svg" },
  { id: 5, title: "Dispenser", icon: "/assets/svg/ic_dispenser.svg" },
  { id: 6, title: "Safety Block", icon: "/assets/svg/ic_safety_block.svg" },
]

export default function ComponentButtonsGrid() {
  return (
    <section className="flex justify-center px-32.5">
      <div className="w-full py-8 sm:py-12 max-w-[1440px] grid gap-4 sm:gap-6 lg:gap-8 
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {componentButtons.map((item) => (
          <button
            key={item.id}
            className="flex items-center justify-between h-[80px] sm:h-[96px] md:h-[104px] lg:h-[112px] 
              bg-[#F6F6F6] rounded-[15px] sm:rounded-[20px] px-4 sm:px-6 md:px-7 lg:px-9 
              hover:bg-gray-200 transition-colors duration-200"
          >
            <div className="flex items-center gap-3 sm:gap-5 md:gap-6 lg:gap-7">
              <img 
                src={item.icon} 
                alt={item.title} 
                className="w-[26px] h-[26px] sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain flex-shrink-0" 
              />
              <span className="text-sm sm:text-base md:text-lg font-medium text-gray-800 text-left">
                {item.title}
              </span>
            </div>
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0" />
          </button>
        ))}
      </div>
    </section>
  )
}
