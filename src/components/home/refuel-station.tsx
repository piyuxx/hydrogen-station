const RefuellingStation = () => {
  return (
    <section className="py-25 px-6 md:py-30 flex justify-center items-center text-center flex-col w-full">
      <h2 className="text-[32px] md:text-[54px] font-medium mb-11 leading-[1.1]">
        Refuelling Station Designed By Zaha Hadid
      </h2>

      {/* Subtitle */}
      <p className="text-[13px] md:text-base w-full font-normal md:max-w-294 mb-10 md:mb-16.25">
        The refueling station has been designed and engineered to meet the highest
        safety standards while also balancing technical requirements with the
        aesthetic and design requirements of the surrounding environment.
      </p>

      {/* Video Placeholder / Iframe */}
      <div className="relative w-full max-w-95 md:max-w-4xl bg-black mx-auto rounded-xl overflow-hidden shadow-lg">
      <iframe
  src="https://drive.google.com/file/d/1sJstTravEJd4yFDQ4VW5Q8Zwfkl98nU2/preview?start=1"
  className="w-full h-64 md:h-96 rounded-xl"
  allow="autoplay"
  allowFullScreen
></iframe>

      </div>
    </section>
  );
};

export default RefuellingStation;


