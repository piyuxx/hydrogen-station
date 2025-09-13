import { Card } from "../ui/card"

const stats = [
  {
    number: "04",
    label: "Boats/day",
    subLabel: "70 Passengers Each",
  },
  {
    number: "3 M€",
    subLabel:"Total Investment",
  },
  {
    number: "60",
    label: "Tonnes Of Green Hydrogen",
    subLabel: "Delivered/year",
  },
  {
    number: "2 RF",
    numberSize: "text-[40px]",
    subLabel: "Dispensers",
  },
]

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-white pt-79.25
      before:content-[''] before:absolute before:inset-0 
      before:bg-[url('/assets/img/ic_hero_background.png')] 
      before:bg-cover before:max-h-full before:max-w-full before:bg-center before:bg-no-repeat before:z-0">

      <div className="container z-10 relative flex justify-center gap-8.5">
        
        {/* Left content */}
        <div className="text-white">
          <h1 className="font-medium text-[54px] leading-[1.24] max-w-143">
            Hydrogen Refuelling Station Bordeaux
          </h1>
          <p className="text-base leading-6.5 max-w-153">
            The project will deliver the first hydrogen refuelling station designed to supply a passenger vessel. The station will be located on the banks of the Garonne River, within the Grand Port Maritime de Bordeaux, and designed to meet the supply requirements of the four 'Bato' passenger boats, 40 kg/day.
          </p>
        </div>

        {/* Vertical line */}
        <div className="w-px bg-white"></div>

        {/* Right content */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((item, index) => (
            <Card key={index} className="flex flex-col items-center justify-center 
              gap-2.25 w-[226px] h-[125px] 
              rounded-[20px] 
              bg-gradient-to-b from-[rgba(217,217,217,0.27)] to-[rgba(115,115,115,0.27)] 
              backdrop-blur-[6px] text-white px-6">
              
              <div className="flex items-center gap-2">
                <h2  className="text-[54px] font-medium leading-none">
                  {item.number}
                </h2>
                {item?.label && <p className="text-[11px]">{item.label}</p> }
              </div>

              {item?.subLabel && (
                   <span className="text-[11px] font-medium">
{item.subLabel}</span>
              )}
            </Card>


          ))}
        </div>

      </div>
    </section>
  )
}

export default HeroSection
