import HeroSection from "@/components/hero"
import CircularConstruction from "@/components/hero/circular-construction"
import ComponentButtonsGrid from "@/components/hero/component-buttons"
import ComponentsDiagram from "@/components/hero/component-steps"
import DevelopmentSection from "@/components/hero/development-plan"
import Footer from "@/components/hero/footer"
import HydrogenStations from "@/components/hero/hydrogen-stations"
import HydrogenSteps from "@/components/hero/hydrogen-steps"
import StationVideo from "@/components/hero/hydrogen-view"
import Gallery from "@/components/hero/image-gallery"
import RefuellingStation from "@/components/hero/refuel-station"
import SustainabilitySection from "@/components/hero/sustainability-section"

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
       <HydrogenSteps />
       <StationVideo />
      <Gallery />
      <Footer />
      </>

  )
}

export default Home