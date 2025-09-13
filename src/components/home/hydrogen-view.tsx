import { Button } from "../ui/button"

const StationVideo = () => {
  return (
    <section className="pb-30 pt-12 flex justify-center items-center  text-center flex-col w-full">
 

      {/* Video Placeholder */}
      <div className="relative  w-full max-w-4xl bg-[url('/assets/img/ic_project_video.gif')] mx-auto rounded-xl overflow-hidden shadow-lg">
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

export default StationVideo
