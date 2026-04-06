import bg from "../assets/bg-hero-section.svg";
import musicBar from "../assets/music-bar.svg";
import mobile from "../assets/icons/mobile.png";

export function HeroSection() {
  return (
    <section
      className="bg-background relative overflow-hidden px-[1rem] py-[24px] flex flex-col items-center justify-center md:px-[3rem] md:py-[48px]  "
      id="#"
    >
      <img
        src={bg}
        alt=""
        className="absolute bottom-0 md:bottom-[-4rem] left-0 w-full pointer-events-none select-none"
      />
      <div className="relative z-10 flex flex-col justify-center items-center md:mb-[6.25rem] mx-[24px] md:mx-[10.25rem]">
        <div className="flex flex-col justify-center items-center gap-[1rem]">
          <img src={musicBar} alt="Music Bar" className="w-full h-auto" />
          <h1 className="text-text-primary text-center ">
            Quem canta seus males espanta
          </h1>
          <span className="text-[20px] md:text-[40px] text-text-secondary">
            Cantar nunca foi tão fácil
          </span>
        </div>
        <div className="flex justify-between  gap-[1rem] w-fit mt-[2.25rem] md:mt-[3rem]">
          <div className="group p-[2px] rounded-[8px] bg-text-primary hover:bg-brand-gradient cursor-pointer transition-all">
            <div className="bg-background px-[1rem] py-4 rounded-[7px]">
              <a
                href="#pricing"
                className="text-text-primary group-hover:text-brand-gradient transition-colors"
              >
                Ver Planos
              </a>
            </div>
          </div>
          <a
            href="#download"
            className="cursor-pointer flex justify-center items-center bg-text-primary hover:hover:bg-brand-gradient text-background p-[1rem] rounded-[8px]"
          >
            Baixar agora
          </a>
        </div>
      </div>
      <div className="block md:hidden mx-[24px] md:mx-[10.25rem] z-10">
        <img
          src={mobile}
          alt="Mobile"
          className="w-full h-auto mt-[2.25rem] md:mt-[3rem]"
        />
      </div>
    </section>
  );
}
