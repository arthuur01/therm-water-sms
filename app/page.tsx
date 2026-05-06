import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="relative min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{ backgroundImage: "url('/background-1.svg')" }}
        />
        <div className="relative flex items-center gap-2 p-6">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={40} 
            height={0}
            
            className="h-auto object-contain"
          />
          <h1 
            className="font-montserrat text-[16px] font-normal"
            style={{
              background: "radial-gradient(circle, #FFFFFF 0%, #A7ABD0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            THERM WATER
          </h1>
        </div>

        <div className="relative flex items-start min-h-screen pt-40">
          <div className="w-[45%] pl-8">
            <h2 className="font-gilroy text-[97px] font-extrabold leading-none text-left">
              <span className="text-white">Perfect Pool</span>
              <br/>
              <span className="text-[#0059FF]">Temperature</span>
            </h2>
            <p className="font-poppins text-[25px] font-normal text-white text-left mt-6 opacity-85">
              Remote monitoring and smart energy-efficient automation.
            </p>
            <div className="flex justify-center mr-25 mt-8">
              <button 
                className="animated-gradient-button flex items-center gap-3 px-8 py-3 rounded-[37px] w-fit cursor-pointer"
              >
                <Image 
                  src="/gift.svg" 
                  alt="Gift" 
                  width={24} 
                  height={24}
                  className="text-white"
                />
                <span className="font-poppins text-[18px] font-semibold text-white">
                  Claim your free instalation
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
