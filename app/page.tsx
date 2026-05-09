import ScrollArrow from "./components/ScrollArrow";
import HeroHeader from "./components/HeroHeader";
import Navbar from "./components/Navbar";
import EverythingText from "./components/EverythingText";
import ControlPanelDrawSVG from "./components/ControlPanelDrawSVG";
import BellDrawSVG from "./components/BellDrawSVG";
import SectionText from "./components/SectionText";
import PricingCard from "./components/PricingCard";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import FaultDetectionHeading from "./components/FaultDetectionHeading";

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Header Section */}
      <header className="min-h-screen flex flex-col justify-center items-center px-8 pt-20 relative">
        <HeroHeader />

        {/* Scroll for More - Canto inferior esquerdo */}
        <ScrollArrow />
      </header>

      {/* Seção com Pin - Remote Access + Smart Scheduling */}
      <div className="flex justify-center gap-90">
        {/* Lado Direito - Everything You Need (sticky) */}
        <div className="w-150 flex items-center justify-end sticky top-0 self-start h-screen">
          <EverythingText />
        </div>

        {/* Lado Esquerdo - Remote Access + Smart Scheduling (scroll normal) */}
        <div className="w-150 flex flex-col">
          {/* Remote Access */}
          <div className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center text-center max-w-md">
              <ControlPanelDrawSVG />
              <SectionText
                title="Intelligent HVAC Monitoring"
                paragraphs={[
                  "Control board is installed on the HVAC unit. Detects faults and auto-generates service orders.",
                  "Real-time alerts for changes, system status, and maintenance.",
                ]}
                titleClass="font-poppins font-semibold text-[24px] text-[#007AAE] mb-4 mt-8"
                paragraphClass="font-poppins font-medium text-[16px] text-[#009EE2] leading-relaxed"
              />
            </div>
          </div>

          {/* Smart Scheduling */}
          <div className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center text-center max-w-md">
              <BellDrawSVG />
              <SectionText
                title="AUTOMATIC SERVICE ORDER GENERATION"
                paragraphs={[
                  "When a fault is detected, the system instantly sends real-time alerts and automatically generates a service order, allowing maintenance teams to respond quickly before the issue affects guests, tenants, or daily operations.",
                 
                ]}
                titleClass="font-poppins font-semibold text-[24px] text-[#007AAE] mb-4 mt-8"
                paragraphClass="font-poppins font-medium text-[16px] text-[#009EE2] leading-relaxed mb-2"
              />
              
            </div>
          </div>
        </div>
      </div>
       {/* Quarta Seção - Fault Detection */}
      <section className="min-h-screen flex items-center justify-center px-16 pt-32">
        <FaultDetectionHeading />
      </section>         
      {/* Seção de Preços */}
      <section id="prices" className="min-h-screen flex items-center justify-center px-16 py-32 bg-[#EEF5FF]">
        <PricingCard />
      </section>

      {/* Seção de Contato */}
      <section id="contact" className="flex items-center justify-center px-16 py-40">
        <ContactForm />
      </section>

      <Footer />

    </div>
  );
}
