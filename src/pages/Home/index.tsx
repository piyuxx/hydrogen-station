import HeroSection from "@/components/home"
import CircularConstruction from "@/components/home/circular-construction"
import ComponentButtonsGrid from "@/components/home/component-buttons"
import ComponentsDiagram from "@/components/home/component-steps"
import DevelopmentSection from "@/components/home/development-plan"
import Footer from "@/components/home/footer"
import HydrogenStations from "@/components/home/hydrogen-stations"
import HydrogenSteps from "@/components/home/hydrogen-steps"
import StationVideo from "@/components/home/hydrogen-view"
import Gallery from "@/components/home/image-gallery"
import RefuellingStation from "@/components/home/refuel-station"
import SustainabilitySection from "@/components/home/sustainability-section"
import TechSearch from "@/components/home/tech-search"

const Home = () => {
  return (
    <>
      <HeroSection />
      <RefuellingStation />
      <HydrogenStations />
      <CircularConstruction />
      <SustainabilitySection />
      <DevelopmentSection />
      <ComponentsDiagram /> 
       <ComponentButtonsGrid />
       <TechSearch />
       <HydrogenSteps />
       <StationVideo />
      <Gallery />
      <Footer />
      </>

  )
}

export default Home