import { ArrowRight } from "lucide-react"

const galleryImages = [
  "/assets/img/ic_gallery_img_1.png",
  "/assets/img/ic_gallery_img_1.png",
  "/assets/img/ic_gallery_img_1.png",
  "/assets/img/ic_gallery_img_1.png", // last one will be covered with button
]

export default function Gallery() {
  return (
    <section className="bg-black text-white py-16 pl-10 lg:pl-20 xl:pl-[136px]">
      <div className="flex justify-end items-end flex-col
      ">
        {/* Heading */}
        <div className="flex gap-12 flex-col">
          <h2 className="text-[32px] lg:text-[36px] xl:text-[40px] font-semibold leading-tight text-start w-full">
            Our Gallery
          </h2>

          {/* Gallery row */}
          <div className="flex gap-5 lg:gap-6 xl:gap-[26px] overflow-x-auto scrollbar-hide">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="
                  relative 
                  w-[100px] h-[100px] 
                  lg:w-[100px] lg:h-[100px] 
                  xl:w-[308px] xl:h-[293px] 
                  rounded-[18px] xl:rounded-[20px] 
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
                    <button className="w-10 h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <ArrowRight className="w-5 h-5 lg:w-[22px] lg:h-[22px] xl:w-6 xl:h-6 text-black" />
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
