import { Card, CardContent } from "@/components/ui/card"
import { Expand } from "lucide-react"

export default function DevelopmentSection() {
  return (
    <section className="py-8 md:py-12 xl:py-25 px-6 md:px-8 xl:px-32 gap-4 md:gap-6 flex flex-col xl:flex-row justify-center items-stretch">

      <Card className="flex flex-col justify-center p-4 md:p-6 xl:p-8 max-w-full xl:max-w-146 items-center w-full xl:flex-1 bg-[#F5F5F5] border border-[#E0E0E0] rounded-5 shadow-none min-h-[300px] xl:max-h-104">
        {/* Left Section (Text) */}
        <CardContent className="p-0 flex items-center justify-center h-full">
          <p className="text-sm md:text-base xl:text-base leading-5 md:leading-6 xl:leading-6 font-normal text-center xl:text-left">
            The Hydrogen Refueling Station at the Port of Bordeaux will serve as a critical clean energy hub for maritime and port-side operations. The frontend includes the visible, customer-facing elements such as the dispenser units, payment and authentication systems, safety signage, and real-time display screens showing fueling status and hydrogen availability. The backend covers the core infrastructure high-pressure hydrogen storage tanks, compressors, cooling systems, pipelines, and the control software that ensures safe, efficient fueling. Its location at the Port of Bordeaux enables direct support for hydrogen-powered vessels, service vehicles, and nearby industrial operations, reducing carbon emissions in a high-traffic maritime zone. Together, the frontend and backend work seamlessly to deliver a reliable, safe, and user-friendly hydrogen fueling experience in one of France's key logistics hubs.
          </p>
        </CardContent>
      </Card>

      <Card className="w-full max-w-full xl:max-w-155 xl:flex-1">
        <div className="flex justify-center relative w-full h-[300px] md:h-[400px] xl:h-[390px] p-4 md:p-6">
          <img
            src="/assets/img/ic_site_development.png" 
            alt="Site Development"
            className="object-contain rounded-md w-full h-full"
          />
          <button className="absolute top-6 md:top-8 hidden md:flex justify-center items-center gap-2 right-6 md:right-8 w-full max-w-28 border-[#D8D8D8] h-8 text-base font-medium bg-white border border-gray-300 text-sm rounded-full shadow hover:bg-gray-50 transition-colors">
            <Expand className="h-4 w-4" />
            Expand
          </button>
        </div>
      </Card>

    </section>
  )
}