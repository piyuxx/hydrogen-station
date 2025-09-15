"use client"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

const galleryImages = [
  "/assets/img/ic_gallery_img_1.png",
  "/assets/img/ic_gallery_img_2.png", 
  "/assets/img/ic_gallery_img_3.png",
  "/assets/img/ic_gallery_img_4.png",
]

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(1)

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 26,
    },
    mode: "snap",
    breakpoints: {
      "(min-width: 768px)": { slides: { perView: 3, spacing: 26 } },
      "(min-width: 1280px)": { slides: { perView: 4, spacing: 26 } },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      // Get current slides per view based on screen size
      const updateSlidesPerView = () => {
        if (window.innerWidth >= 1280) {
          setSlidesPerView(4)
        } else if (window.innerWidth >= 768) {
          setSlidesPerView(2)
        } else {
          setSlidesPerView(1)
        }
      }
      
      updateSlidesPerView()
      window.addEventListener('resize', updateSlidesPerView)
      
      return () => window.removeEventListener('resize', updateSlidesPerView)
    }
  })

  // Function to check if this is the last visible slide
  const isLastVisibleSlide = (index: number) => {
    const lastVisibleIndex = currentSlide + slidesPerView - 1
    return index === lastVisibleIndex || (index === lastVisibleIndex % galleryImages.length)
  }

  return (
    <section className="bg-black text-white py-10 xl:py-16 pl-6 lg:pl-20 xl:pl-[136px] pr-6 lg:pr-0">
      <div className="flex flex-col w-full gap-6 xl:gap-12">
        <h2 className="text-xl md:text-[54px] md:font-medium leading-tight text-start w-full">
          Our Gallery
        </h2>

        <div className="relative overflow-hidden">
          <div ref={sliderRef} className="keen-slider">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="keen-slider__slide relative w-[151px] h-[139px] lg:w-[240px] lg:h-[220px] xl:w-[308px] xl:h-[293px] rounded-[15px] lg:rounded-[18px] xl:rounded-[20px] overflow-hidden flex-shrink-0"
              >
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient overlay on last visible image */}
                {isLastVisibleSlide(i) && (
                  <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "linear-gradient(270deg, #000000 0%, rgba(0, 0, 0, 0) 92.66%)"
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => slider.current?.next()}
            className="absolute top-1/2 right-30 -translate-y-1/2 w-8 h-8 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            <ArrowRight className="w-4 h-4 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-black" />
          </button>
        </div>
      </div>
    </section>
  )
}