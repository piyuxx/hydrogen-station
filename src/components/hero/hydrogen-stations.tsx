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
    <section className="w-full px-[130px] py-16">
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {hydrogenStations.map((station, index) => (
          <Card
            key={index}
            className="flex flex-col items-center py-7.5 px-6.25 gap-[31px] w-[48%] max-w-[580px] h-[650px] bg-[#F5F5F5] border border-[#E0E0E0] shadow-none rounded-[20px]"
          >
            <CardContent className="flex flex-col items-center gap-6 p-0 w-full">
              <h2 className="text-center text-[26px] font-medium">
                {station.title} <br />
                {station.subtitle}
              </h2>

              <div className="w-full min-h-[422px] relative flex flex-col gap-4">
                {/* If single image */}
                {station.image && (
                  <img
                    src={station.image}
                    alt={station.title}
                    className="object-fill rounded-5 w-full"
                  />
                )}

                {/* If two images */}
                {station.image1 && station.image2 && (
                  <div className="flex flex-col gap-4 w-full border rounded-5 border-[#E0E0E0] h-105">
                    <img
                      src={station.image1}
                      alt={`${station.title} image 1`}
                      className="object-fill bg-[#F5F5F5] rounded-5 w-full max-h-50"
                    />
                    <img
                      src={station.image2}
                      alt={`${station.title} image 2`}
                      className="object-fill rounded-5 w-full max-h-50"
                    />
                  </div>
                )}
              </div>

              <Button className="bg-[#4A4A4A] py-4 px-6 w-35.5 h-12.5 text-base font-medium text-white rounded-full">
                Read More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
