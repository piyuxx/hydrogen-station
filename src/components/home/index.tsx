import { Card } from "../ui/card"

const stats = [
  {
    number: "04",
    label: "Boats/day",
    subLabel: "70 Passengers Each",
  },
  {
    number: "3 M€",
    subLabel: "Total Investment",
  },
  {
    number: "60",
    label: "Tonnes Of Green Hydrogen",
    subLabel: "Delivered/year",
  },
  {
    number: "2 RF",
    subLabel: "Dispensers",
  },
]

const HeroSection = () => {
  return (
<section
  className="relative lg:min-h-screen 
    pt-[116px] md:pt-65.25  
    px-[25px] 
    pb-23.25
    lg:pb-0
    before:content-[''] before:absolute before:inset-0 
    before:bg-[url('/assets/img/ic_hero_background.png')] 
    before:bg-cover before:max-h-full before:max-w-full before:bg-center 
    before:bg-no-repeat before:z-0
    after:content-[''] after:absolute after:inset-0 
    after:bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_17%,#000000_100%)] after:z-10"
>
      <div className="container z-20 relative flex flex-col lg:flex-row items-center lg:items-stretch lg:justify-center gap-10 lg:gap-8.5">
        
        {/* Left content */}
        <div className="text-white flex  text-center flex-col">
          <h1
            className="font-medium 
            text-[32px] md:text-[40px] lg:text-[54px] 
            leading-[1.24] max-w-full lg:max-w-143"
          >
            Hydrogen Refuelling Station Bordeaux
          </h1>
          <p
            className="mt-[25px] 
            text-[13px] md:text-[15px] lg:text-base 
            font-normal leading-6.5 max-w-full lg:max-w-153"
          >
            The project will deliver the first hydrogen refuelling station designed to supply a passenger vessel. The station will be located on the banks of the Garonne River, within the Grand Port Maritime de Bordeaux, and designed to meet the supply requirements of the four 'Bato' passenger boats, 40 kg/day.
          </p>
        </div>

        {/* Vertical line (only desktop) */}
        <div className="hidden lg:block w-px bg-[rgba(255,255,255,0.4)]"></div>

        <div
          className="lg:mt-0 
          grid grid-cols-2 gap-4 md:gap-6"
        >
          {stats.map((item, index) => (
            <Card
              key={index}
              className="flex flex-col items-center justify-center 
              gap-2.25 w-full  md:min-w-[226px] h-[110px] md:h-[125px] 
              rounded-[20px] 
              max-w-45.25
              border-none
              bg-gradient-to-b from-[rgba(217,217,217,0.27)] to-[rgba(115,115,115,0.27)] 
              backdrop-blur-[6px] text-white px-6"
            >
              <div className="flex items-center gap-2">
                <h2
                  className="font-medium leading-none 
                  text-[26px] md:text-[48px] lg:text-[54px]"
                >
                  {item.number}
                </h2>
                {item?.label && (
                  <p className="text-[8px] md:text-[11px]">{item.label}</p>
                )}
              </div>
              {item?.subLabel && (
                <span className="text-[11px] font-medium">{item.subLabel}</span>
              )}
            </Card>
          ))}
        </div>
      </div>


    </section>
  )
}

export default HeroSection
