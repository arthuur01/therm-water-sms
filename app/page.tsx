import ScrollArrow from "./components/ScrollArrow";
import TemperatureDisplay from "./components/TemperatureDisplay";
import HeroHeader from "./components/HeroHeader";
import Navbar from "./components/Navbar";
import EverythingText from "./components/EverythingText";
import PhoneDrawSVG from "./components/PhoneDrawSVG";
import CalendarDrawSVG from "./components/CalendarDrawSVG";

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
              <h3 className="font-poppins font-semibold text-[24px] text-[#007AAE] mb-4">
                REMOTE ACCESS
              </h3>
              <p className="font-poppins font-medium text-[16px] text-[#009EE2] leading-relaxed">
                Control and monitor your pool from anywhere using our mobile app.
                <br />
                Real-time alerts for temperature changes, system status, and maintenance.
              </p>
            </div>
          </div>

          {/* Smart Scheduling */}
          <div className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center text-center max-w-md">
              <CalendarDrawSVG />
              <h3 className="font-poppins font-semibold text-[24px] text-[#007AAE] mb-6">
                SMART SCHEDULING
              </h3>
              <p className="font-poppins font-medium text-[16px] text-[#009EE2] leading-relaxed mb-8">
                Create custom heating schedules that match your lifestyle and save energy automatically.
                <br />
                Real-time alerts for temperature changes, system status, and maintenance.
              </p>
              <p className="font-poppins font-medium text-[16px] text-[#009EE2] leading-relaxed">
                Monthly reports on system usage, energy consumption, and optimization tips.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quarta Seção - Temperature Control */}
      <section className="min-h-screen flex items-center justify-center px-16 pt-32">
        <TemperatureDisplay />
      </section>
    </div>
  );
}
