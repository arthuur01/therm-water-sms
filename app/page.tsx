import ScrollArrow from "./components/ScrollArrow";
import TemperatureDisplay from "./components/TemperatureDisplay";
import HeroHeader from "./components/HeroHeader";
import Navbar from "./components/Navbar";
import EverythingText from "./components/EverythingText";
import PhoneDrawSVG from "./components/PhoneDrawSVG";
import CalendarDrawSVG from "./components/CalendarDrawSVG";
import SectionText from "./components/SectionText";
import PricingCard from "./components/PricingCard";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

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
              <PhoneDrawSVG />
              <SectionText
                title="REMOTE ACCESS"
                paragraphs={[
                  "Control and monitor your pool from anywhere using our mobile app.",
                  "Real-time alerts for temperature changes, system status, and maintenance.",
                ]}
                titleClass="font-poppins font-semibold text-[24px] text-[#007AAE] mb-4 mt-8"
                paragraphClass="font-poppins font-medium text-[16px] text-[#009EE2] leading-relaxed"
              />
            </div>
          </div>

          {/* Smart Scheduling */}
          <div className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center text-center max-w-md">
              <CalendarDrawSVG />
              <SectionText
                title="SMART SCHEDULING"
                paragraphs={[
                  "Create custom heating schedules that match your lifestyle and save energy automatically.",
                  "Real-time alerts for temperature changes, system status, and maintenance.",
                  "Monthly reports on system usage, energy consumption, and optimization tips.",
                ]}
                titleClass="font-poppins font-semibold text-[24px] text-[#007AAE] mb-4 mt-8"
                paragraphClass="font-poppins font-medium text-[16px] text-[#009EE2] leading-relaxed mb-2"
              />
              
            </div>
          </div>
        </div>
      </div>
       {/* Quarta Seção - Temperature Control */}
      <section className="min-h-screen flex items-center justify-center px-16 pt-32">
        <TemperatureDisplay />
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
