import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Expand } from "lucide-react"

export default function CircularConstruction() {
  return (
    <section className="py-8 px-32.5 gap-6.5 flex justify-center">


    <Card className="flex flex-col md:flex-row justify-between py-15 max-w-155 justify-center items-center gap-8 w-full  bg-[#F5F5F5] border border-[#E0E0E0] rounded-5 p-10 shadow-none">
      {/* Left Section (Text) */}
      <CardContent className="flex-1 flex flex-col items-center gap-6 p-0">
        <h2 className="text-[26px] font-medium">Circular Construction</h2>
        <p className="text-base leading-relaxed">
       This diagram illustrates Circular Construction, a sustainable building approach where materials and components are reused, recycled, and reintegrated into new projects, minimizing waste and resource consumption.  This approach differs from traditional linear construction (take → make → dispose) by designing systems where products and materials are kept in use for as long as possible.
        </p>

        <Button className="bg-[#4A4A4A] text-white rounded-full w-fit px-6 py-3">
          Read More
        </Button>
      </CardContent>

      {/* Right Section (Image) */}
    
    </Card>
    <Card className="w-full max-w-155">
    <div className="flex-1 flex justify-center relative w-full h-[400px]">
        <img
          src="/assets/img/ic_circular_construction.png" // replace with actual
          alt="Circular Construction Diagram"
          className="object-contain rounded-md mt-2"
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
