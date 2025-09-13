import { Button } from "../ui/button"

const RefuellingStation = () => {
  return (
    <section className="py-30 flex justify-center items-center  text-center flex-col w-full">
      <h2 className="text-[54px] font-medium mb-11 leading-[1.1]">
        Refuelling Station Designed By Zaha Hadid
      </h2>

      {/* Subtitle */}
      <p className="text-base w-full max-w-294 mb-16.25">
        The refueling station has been designed and engineered to meet the highest
        safety standards while also balancing technical requirements with the
        aesthetic and design requirements of the surrounding environment.
      </p>

      {/* Video Placeholder */}
      <div className="relative  w-full max-w-4xl bg-black mx-auto rounded-xl overflow-hidden shadow-lg">
        {/* Replace with your video embed / iframe */}
        <div className="w-full h-64 md:h-96 flex items-end justify-end px-9.5 py-7.5">
          {/* Play Button */}
         <Button className="w-16 h-16 flex items-center justify-center pl-5 backdrop-blur-sm bg-[linear-gradient(180deg,rgba(217,217,217,0.5)_0%,rgba(115,115,115,0.5)_100%)] rounded-full shadow-lg transition">
      
      <img
  src="/assets/svg/ic_play_button.svg" // put your image in the public folder
  alt=""
  aria-hidden="true"
 className="h-6 w-6 text-white"
/>
    </Button>

        </div>
      </div>
    </section>
  )
}

export default RefuellingStation
