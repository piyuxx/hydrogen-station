import { MoveRight, MoveDown, MoveLeft } from "lucide-react"

type ComponentStep = {
  id: number
  title: string
  icon: string
}

const components: ComponentStep[] = [
  { id: 1, title: "Tube Trailer", icon: "/assets/svg/ic_tube_trailer.svg" },
  { id: 2, title: "Compressor", icon: "/assets/svg/ic_compressor.svg" },
  { id: 3, title: "High Pressure Buffer", icon: "/assets/svg/ic_pressure_buffer.svg" },
  { id: 4, title: "Chiller", icon: "/assets/svg/ic_chiller.svg" },
  { id: 5, title: "Dispenser", icon: "/assets/svg/ic_dispenser.svg" },
  { id: 6, title: "Safety Block", icon: "/assets/svg/ic_safety_block.svg" },
]

function Step({ step }: { step: ComponentStep }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-7 h-7 flex bg-[#4A4A4A] items-center justify-center rounded-full text-white text-sm font-semibold mb-4">
        {step.id}
      </div>
      <div className="flex flex-col items-center justify-center p-2.5">
        <div className="w-14 h-14 flex items-center justify-center mb-2">
          <img
            src={step.icon}
            alt={step.title}
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-base font-medium text-center leading-tight">
          {step.title}
        </p>
      </div>
    </div>
  )
}

export default function ComponentsDiagram() {
  return (
    <div className="flex flex-col items-center py-8 px-32.5 max-w-full">
      <h2 className="text-[22px] font-medium mb-12 text-center">
        Components Diagram
      </h2>

      {/* Desktop Layout */}
      <div className="hidden lg:grid grid-cols-11 items-center w-full max-w-[1440px]">
        {components.map((step, index) => (
          <>
            <Step key={step.id} step={step} />
            {index < components.length - 1 && (
              <div className="flex items-center justify-center">
                <MoveRight className="text-gray-400 w-12 h-12" />
              </div>
            )}
          </>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col items-center block md:hidden">
        {/* Top row: 1 -> 2 -> 3 */}
        <div className="flex items-center gap-2 md:gap-6 mb-4 md:mb-6">
          <Step step={components[0]} />
          <MoveRight className="text-gray-400 w-4 h-4 md:w-6 md:h-6 flex-shrink-0" />
          <Step step={components[1]} />
          <MoveRight className="text-gray-400 w-4 h-4 md:w-6 md:h-6 flex-shrink-0" />
          <Step step={components[2]} />
        </div>

        {/* Arrow down */}
        <div className="flex justify-end w-full mb-4 md:mb-6">
          <div className="flex justify-center" style={{ width: "calc(33.33% - 12px)" }}>
            <MoveDown className="text-gray-400 w-4 h-4 md:w-6 md:h-6" />
          </div>
        </div>

        {/* Bottom row: 6 <- 5 <- 4 */}
        <div className="flex items-center gap-2 md:gap-6">
          <Step step={components[5]} />
          <MoveLeft className="text-gray-400 w-4 h-4 md:w-6 md:h-6 flex-shrink-0" />
          <Step step={components[4]} />
          <MoveLeft className="text-gray-400 w-4 h-4 md:w-6 md:h-6 flex-shrink-0" />
          <Step step={components[3]} />
        </div>
      </div>
    </div>
  )
}
