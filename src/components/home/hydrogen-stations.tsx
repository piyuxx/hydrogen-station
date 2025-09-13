import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type HydrogenCardProps = {
  title: string
  subtitle: string
  image?: string
  image1?: string
  image2?: string
}

const hydrogenStations: HydrogenCardProps[] = [
  {
    title: "Floating Hydrogen Station",
    subtitle: "(Investigated)",
    image: "/assets/img/ic_hydrogen_station_1.png",
  },
  {
    title: "Fixed Hydrogen Station",
    subtitle: "(Proposed)",
    image: "/assets/img/ic_hydrogen_station.png",
  },
]

export default function HydrogenStations() {
  return (
    <section className="w-full px-6 md:px-8 lg:px-16 xl:px-[130px] py-8 md:py-12 lg:py-16">
      <div className="flex flex-col lg:flex-row gap-4 md:gap-18 lg:gap-8 justify-center items-center">
        {hydrogenStations.map((station, index) => (
          <Card
            key={index}
            className="flex flex-col items-center py-4 md:py-6 lg:py-7.5 px-4 md:px-5 lg:px-6.25 w-full lg:w-[48%] max-w-[500px] md:max-w-[550px] lg:max-w-[580px] h-auto md:h-[500px] lg:h-[650px] bg-[#F5F5F5] border border-[#E0E0E0] shadow-none rounded-[18px] md:rounded-[19px] lg:rounded-[20px]"
          >
            <CardContent className="flex flex-col items-center justify-between h-full p-0 w-full">
              <div className="flex flex-col items-center gap-3 md:gap-5 lg:gap-6 w-full">
                <h2 className="text-center text-lg md:text-xl lg:text-[26px] font-medium leading-tight">
                  {station.title} <br />
                  {station.subtitle}
                </h2>

                <div className="w-full min-h-[200px] md:min-h-[300px] lg:min-h-[422px] relative flex flex-col gap-2 md:gap-3 lg:gap-4">
                  {/* If single image */}
                  {station.image && (
                    <img
                      src={station.image}
                      alt={station.title}
                      className="object-cover rounded-[12px] md:rounded-[15px] lg:rounded-5 w-full h-full"
                    />
                  )}

                  {/* If two images */}
                  {station.image1 && station.image2 && (
                    <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 w-full border rounded-[12px] md:rounded-[15px] lg:rounded-5 border-[#E0E0E0] h-auto md:h-[300px] lg:h-105 p-2 md:p-3 lg:p-4">
                      <img
                        src={station.image1}
                        alt={`${station.title} image 1`}
                        className="object-cover bg-[#F5F5F5] rounded-[10px] md:rounded-[12px] lg:rounded-5 w-full max-h-[90px] md:max-h-[140px] lg:max-h-50"
                      />
                      <img
                        src={station.image2}
                        alt={`${station.title} image 2`}
                        className="object-cover rounded-[10px] md:rounded-[12px] lg:rounded-5 w-full max-h-[90px] md:max-h-[140px] lg:max-h-50"
                      />
                    </div>
                  )}
                </div>
              </div>

              <Button className="bg-[#4A4A4A] py-2 md:py-3 lg:py-4 px-3 md:px-5 lg:px-6 w-[90px] md:w-[110px] lg:w-35.5 h-[28px] md:h-[36px] lg:h-12.5 text-xs md:text-sm lg:text-base font-medium text-white rounded-full mt-4 md:mt-6 lg:mt-0 flex-shrink-0">
                Read More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}