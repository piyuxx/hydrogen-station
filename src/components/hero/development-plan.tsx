import { Card, CardContent } from "@/components/ui/card"
import { Expand } from "lucide-react"

export default function DevelopmentSection() {
  return (
    <section className="py-25 px-32.5  gap-6.5 flex justify-center">

    <Card className="flex flex-col md:flex-row justify-between p-6 max-w-146  max-h-104 items-center gap-8 w-full  bg-[#F5F5F5] border border-[#E0E0E0] rounded-5 shadow-none">
      {/* Left Section (Text) */}
      <CardContent className="p-0">
        <p className="text-base leading-6 font-normal">
The Hydrogen Refueling Station at the Port of Bordeaux will serve as a critical clean energy hub for maritime and port-side operations. The frontend includes the visible, customer-facing elements such as the dispenser units, payment and authentication systems, safety signage, and real-time display screens showing fueling status and hydrogen availability. The backend covers the core infrastructure high-pressure hydrogen storage tanks, compressors, cooling systems, pipelines, and the control software that ensures safe, efficient fueling. Its location at the Port of Bordeaux enables direct support for hydrogen-powered vessels, service vehicles, and nearby industrial operations, reducing carbon emissions in a high-traffic maritime zone. Together, the frontend and backend work seamlessly to deliver a reliable, safe, and user-friendly hydrogen fueling experience in one of France’s key logistics hubs.        </p>

      
      </CardContent>
    
    </Card>
    <Card className="w-full max-w-155 max-h-104">
    <div className="flex-1 flex justify-center mb-10 relative w-full h-[390px]">
        <img
          src="/assets/img/ic_site_development.png" 
          className="object-cover rounded-md mt-2"
        />
        <button className="absolute top-4 flex  justify-center items-center gap-2 right-4 w-full max-w-28  border-[#D8D8D8] h-8  text-base font-medium bg-white border border-gray-300 text-sm  rounded-full shadow">
          <Expand className="h-4 w-4" />
          Expand
        </button>
      </div>
    </Card>
        </section>
  )
}
