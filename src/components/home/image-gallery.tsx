import { ArrowRight } from "lucide-react"

const galleryImages = [
  "/assets/img/ic_gallery_img_1.png",
  "/assets/img/ic_gallery_img_2.png",
  "/assets/img/ic_gallery_img_3.png",
  "/assets/img/ic_gallery_img_4.png", // last one will be covered with button
]

export default function Gallery() {
  return (
    <section className="bg-black text-white py-10 xl:py-16 pl-6 lg:pl-20 xl:pl-[136px] pr-6 lg:pr-0">
      <div className="flex justify-end items-start flex-col w-full">
        {/* Heading */}
        <div className="flex gap-6 xl:gap-12 flex-col w-full">
          <h2 className="text-xl lg:text-[32px] xl:text-[40px] font-semibold leading-tight text-start w-full">
            Our Gallery
          </h2>

          {/* Gallery row */}
          <div className="flex gap-3 lg:gap-6 xl:gap-[26px] overflow-x-auto scrollbar-hide pb-2">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="
                  relative 
                  w-[151px] h-[139px] 
                  lg:w-[240px] lg:h-[220px] 
                  xl:w-[308px] xl:h-[293px] 
                  rounded-[15px] lg:rounded-[18px] xl:rounded-[20px] 
                  overflow-hidden flex-shrink-0
                "
              >
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Last item overlay + button */}
                {i === galleryImages.length - 1 && (
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(270deg, #000000 0%, rgba(0, 0, 0, 0) 92.66%)",
                    }}
                  >
                    <button className="w-8 h-8 lg:w-11 lg:h-11 xl:w-12 xl:h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <ArrowRight className="w-4 h-4 lg:w-[22px] lg:h-[22px] xl:w-6 xl:h-6 text-black" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}