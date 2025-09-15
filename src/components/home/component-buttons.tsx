import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

type ComponentButton = {
  id: number
  title: string
  icon: string
  description?: string
  image?: string,
  class?: string
}

const componentButtons: ComponentButton[] = [
  { 
    id: 1, 
    title: "Tube Trailer", 
    icon: "/assets/svg/ic_tube_trailer.svg",
    description: "The hydrogen tube trailer is in a technical area confined with a reinforced concrete structure. The reinforced concrete walls are specifically designed to withstand fire scenarios and the projection of materials in the event of an explosion.",
    image: "/assets/img/ic_accordion_img_1.png"
  },
  { 
    id: 2, 
    title: "Compressor", 
    icon: "/assets/svg/ic_compressor.svg",
    description: "The Ionic Compressor is the heart of the fueling station. With a strong track record in fleets of heavy-duty vehicles such as buses and transport trucks, the selected solution has proven to be efficient, reliable, and safe.",
    image: "/assets/img/ic_accordion_img_2.png"
  },
  { 
    id: 3, 
    title: "High Pressure Buffer", 
    icon: "/assets/svg/ic_pressure_buffer.svg",
    class: "lg:mb-11",
    description: "The fixed tanks have an internal volume of 932 liters which at 500bar corresponds to an overall capacity of 30kg. The material typically used for tanks used for stationary usage is typically steel as per ISO 683-2.",
    image: "/assets/img/ic_accordion_img_3.png"
  },
  { 
    id: 4, 
    title: "Chiller", 
    icon: "/assets/svg/ic_chiller.svg",
    description: "To prevent excessive temperature of the recipient tank pre-cooling is essential. Standard pre- cooling temperature levels include -20°C (T20), -30°C (T30), and -40°C (T40), ensuring optimal refueling conditions (as per standard SJ 2601). The technology used is a compression refrigeration system.",
    image: "/assets/img/ic_accordion_img_4.png"
  },
  { 
    id: 5, 
    title: "Dispenser", 
    icon: "/assets/svg/ic_dispenser.svg",
    class: "lg:mb-13",
    description: "Hydrogen will be delivered to the boats through a single dispenser equipped with one nozzle and a data interface, mounted on a 5- or 10-meter hose. The fueling process will utilize a nozzle with a communications protocol, operating at a rate of 60 g/s or 120 g/s and the standard SJ 2601 will be considered as a reference for the definition of the fueling procedure (pressure ramp rate). A breakaway system will be in place to immediately stop the flow in case of nozzle",
    image: "/assets/img/ic_accordion_img_5.png",
  },
  { 
    id: 6, 
    title: "Safety Block", 
    icon: "/assets/svg/ic_safety_block.svg",
    description: "The Safety Block in a hydrogen refueling station serves as a critical safeguard that ensures safe and controlled operations throughout the fueling process. Positioned at the end of the hydrogen delivery chain, it acts as a barrier and monitoring system that prevents leaks, regulates emergency shutdowns, and isolates equipment in case of malfunction or overpressure. In the context of the above flow, after compression, storage, cooling, and dispensing, the Safety Block provides the final layer of protection for users, infrastructure, and the environment.",
    image: "/assets/img/ic_accordion_img_6.png"
  }
]

export default function ComponentButtonsGrid() {
  return (
    <section className="flex justify-center px-6 md:px-8 lg:px-16 xl:px-32">
      <div className="w-full py-6 md:py-8 lg:py-12 max-w-360 grid gap-3 md:gap-4 lg:gap-6 xl:gap-8 
        grid-cols-1 lg:grid-cols-2">
        
        {componentButtons.map((item) => (
          <Accordion key={item.id} type="single" collapsible>
            <AccordionItem value={`item-${item.id}`} className="border-none">
              <div className="bg-[#F6F6F6] rounded-3 md:rounded-[15px] lg:rounded-5 overflow-hidden">
                <AccordionTrigger className="flex items-center justify-between h-[70px] md:h-[80px] lg:h-[96px] xl:h-[112px] 
                  px-4 md:px-6 lg:px-7 xl:px-9 hover:bg-gray-200 transition-colors duration-200 [&>svg]:w-4 [&>svg]:h-4 md:[&>svg]:w-5 md:[&>svg]:h-5">
                  <div className="flex items-center gap-3 md:gap-4 lg:gap-5 xl:gap-7">
                    <img 
                      src={item.icon} 
                      alt={item.title} 
                      className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 object-contain flex-shrink-0" 
                    />
                    <span className="text-sm md:text-[26px] font-medium text-left">
                      {item.title}
                    </span>
                  </div>
                </AccordionTrigger>
                
                <AccordionContent className="bg-[#F6F6F6] h-[550px] md:h-[650px] lg:h-[700px]">
                  <div className="px-4 md:px-6 lg:px-7 xl:px-9 pt-4 md:pt-5 lg:pt-[22px] pb-4 md:pb-5 lg:pb-6 h-full flex flex-col">
                    <p className={`text-sm md:text-[16px]  leading-relaxed mb-4 md:mb-5  ${item.class}`}>
                      {item.description}
                    </p>
                    
                    <div className="flex justify-center items-center flex-1">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full max-w-[400px] md:max-w-[497px] max-h-full object-contain rounded-lg"
                      />
                    </div>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
          </Accordion>
        ))}
        
      </div>
    </section>
  )
}