import { Button } from "../ui/button"

const StationVideo = () => {
  return (
    <section className="pt-12 pb-20 flex flex-col items-center text-center w-full px-4 md:px-6 lg:px-0">
      {/* Video Placeholder */}
      <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg bg-[url('/assets/img/ic_project_video.gif')] bg-cover bg-center">
        <div className="w-full h-56 sm:h-64 md:h-80 lg:h-96 flex items-end justify-end px-4 sm:px-6 md:px-9 lg:px-12 py-4 sm:py-6 md:py-7">
          {/* Play Button */}
          <Button className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center pl-3 sm:pl-4 md:pl-5 backdrop-blur-sm bg-[linear-gradient(180deg,rgba(217,217,217,0.5)_0%,rgba(115,115,115,0.5)_100%)] rounded-full shadow-lg transition">
            <img
              src="/assets/svg/ic_play_button.svg"
              alt="Play"
              aria-hidden="true"
              className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7"
            />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default StationVideo
