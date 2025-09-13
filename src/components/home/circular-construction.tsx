import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Expand } from "lucide-react"

export default function CircularConstruction() {
  return (
    <section className="py-8 px-6 md:px-32 gap-6 flex flex-col lg:flex-row justify-center items-stretch">
      <Card className="flex flex-col justify-between py-6 md:py-15 max-w-full lg:max-w-155 justify-center items-center gap-6 md:gap-8 w-full lg:flex-1 bg-[#F5F5F5] border border-[#E0E0E0] rounded-5 p-6 md:p-10 shadow-none">
        {/* Left Section (Text) */}
        <CardContent className="flex-1 flex flex-col items-center gap-4 md:gap-6 p-0">
          <h2 className="text-lg md:text-[26px] font-medium text-center">Circular Construction</h2>
          <p className="text-sm md:text-base leading-relaxed text-center">
            This diagram illustrates Circular Construction, a sustainable building approach where materials and components are reused, recycled, and reintegrated into new projects, minimizing waste and resource consumption. This approach differs from traditional linear construction (take → make → dispose) by designing systems where products and materials are kept in use for as long as possible.
          </p>

          <Button className="bg-[#4A4A4A] text-white rounded-full w-fit px-6 py-3">
            Read More
          </Button>
        </CardContent>
      </Card>

      {/* Right Section (Image) */}
      <Card className="w-full max-w-full lg:max-w-155 lg:flex-1">
        <div className="flex justify-center relative w-full h-[300px] md:h-[350px] lg:h-[400px] p-4">
          <img
            src="/assets/img/ic_circular_construction.png" // replace with actual
            alt="Circular Construction Diagram"
            className="object-contain rounded-md w-full h-full max-w-full max-h-full"
          />
          <button className="absolute top-6 flex justify-center items-center gap-2 right-6 w-full max-w-28 border-[#D8D8D8] h-8 text-base font-medium bg-white border border-gray-300 text-sm rounded-full shadow">
            <Expand className="h-4 w-4" />
            Expand
          </button>
        </div>
      </Card>
    </section>
  )
}