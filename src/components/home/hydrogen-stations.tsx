import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type HydrogenCardProps = {
  title: string
  subtitle: string
  image?: string
  points: string[]
}

const hydrogenStations: HydrogenCardProps[] = [
  {
    title: "Floating Hydrogen Station",
    subtitle: "(Investigated)",
    image: "/assets/img/ic_hydrogen_station_1.png",
    points: [
      "Provides hydrogen refueling directly on the water, allowing yachts, ferries, and workboats to refuel without docking at shore-based facilities, which saves time and avoids congested ports.",
      "Receives hydrogen via tube trailers or nearby floating/land-based production units, then compresses it on-site to the high pressures required for marine fuel tanks.",
      "Matches vessel fueling requirements with fast refueling cycles, ensuring each boat can be refueled in under 30 minutes to maintain operational schedules.",
      "Can be anchored or relocated depending on seasonal marine traffic, special maritime events, or shifting operational demands, providing flexibility in service location.",
      "Plays a vital role in reducing maritime emissions by replacing diesel fueling infrastructure, especially in environmentally sensitive areas.",
    ],
  },
  {
    title: "Fixed Hydrogen Station",
    subtitle: "(Proposed)",
    image: "/assets/img/ic_hydrogen_station.png",
    points: [
      "Permanently installed at a port to ensure a constant and reliable hydrogen supply for boats and potentially for road vehicles like buses, trucks, and cars.",
      "Features larger storage tanks and high-capacity compressors that allow for continuous, high-volume operations without frequent resupply interruptions.",
      "Often connected directly to hydrogen production facilities via pipelines or through regular deliveries from tube trailers, ensuring steady inventory.",
      "Designed to serve multiple sectors, both maritime and land transport, maximizing return on infrastructure investment and operational efficiency.",
      "Provides predictable, stable service in high-demand ports and harbors, making it ideal for busy commercial hubs, though it lacks the mobility of floating stations.",
    ],
  },
]

export default function HydrogenStations() {
  // Independent expand state per card
  const [expanded, setExpanded] = useState<boolean[]>(
    Array(hydrogenStations.length).fill(false)
  )

  const toggleExpand = (index: number) => {
    setExpanded(prev => {
      const newState = [...prev]
      newState[index] = !newState[index]
      return newState
    })
  }

  return (
    <section className="w-full px-6 md:px-8 lg:px-16 xl:px-[130px] py-8 md:py-12 lg:py-16">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center items-start">
        {hydrogenStations.map((station, index) => {
          const isExpanded = expanded[index]
          return (
            <Card
              key={index}
              className="flex flex-col items-center py-6 px-5 w-full lg:w-[48%] max-w-[580px] bg-[#F5F5F5] border border-[#E0E0E0] shadow-none rounded-[20px]"
            >
              <CardContent className="flex flex-col items-center w-full p-0">
                {/* Title */}
                <h2 className="text-center text-lg md:text-xl lg:text-[26px] font-medium leading-tight">
                  {station.title} <br />
                  {station.subtitle}
                </h2>

                {/* Image */}
                <div className="w-full mt-5">
                  {station.image && (
                    <img
                      src={station.image}
                      alt={station.title}
                      className="object-cover rounded-[12px] md:rounded-[15px] lg:rounded-5 w-full h-auto"
                    />
                  )}
                </div>

                {/* Expandable Section */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isExpanded ? "max-h-[1000px] mt-[31px]" : "max-h-0"
                  }`}
                >
                  <div className="flex flex-col gap-[11px]">
                    {station.points.map((point, idx) => (
                      <p
                        key={idx}
                        className="text-[16px] font-normal text-black leading-relaxed"
                      >
                        • {point}
                      </p>
                    ))}
                  </div>

                  <button
                    onClick={() => toggleExpand(index)}
                    className="mt-4 text-[16px] font-semibold text-black underline cursor-pointer"
                  >
                    Show Less
                  </button>
                </div>

                {/* Read More Button */}
                {!isExpanded && (
                  <Button
                    onClick={() => toggleExpand(index)}
                    className="bg-[#4A4A4A] py-2 px-5 h-12.5 cursor-pointer text-sm lg:text-base font-medium text-white rounded-full mt-6"
                  >
                    Read More
                  </Button>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
