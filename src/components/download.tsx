import apple from "../assets/icons/applestore.svg";
import playStore from "../assets/icons/playStore.svg";
import personSinging from "../assets/icons/rapaz-ouvindo-musica-com-fones-de-ouvido-e-cantando-no-aplicativo-de-karaoke-removebg 1.png";

export function Download() {
  return (
    <section
      className="bg-background py-[48px] px-[1rem] md:px-[3rem]"
      id="download"
    >
      <div className="relative bg-surface rounded-2xl px-[2rem] pt-[3rem] pb-0 md:px-[5rem] md:py-[5rem] overflow-hidden">
        <div className="lg:w-[55%] space-y-[40px]">
          <header className="flex flex-col space-y-[8px]">
            <span className="text-brand-primary uppercase text-sm font-semibold">
              Download
            </span>
            <h2 className="text-text-primary">Bora cantar?</h2>
            <p className="text-text-secondary">
              Desperte seu potencial de estrela, liberte sua voz e faça parte da
              comunidade musical mais envolvente. Baixe o Zingen agora e
              transforme suas performances em experiências inesquecíveis!
            </p>
          </header>
          <div className="flex flex-col md:flex-row flex-wrap gap-[1rem]">
            <a href="#">
              <img src={apple} alt="Apple Store" />
            </a>
            <a href="#">
              <img src={playStore} alt="Play Store" />
            </a>
          </div>
        </div>
        <img
          src={personSinging}
          alt="Person Singing"
          className="w-[70%] mx-auto mt-[2rem] lg:w-auto lg:mx-0 lg:absolute lg:bottom-0 lg:right-0 lg:h-full lg:object-contain lg:object-bottom"
        />
      </div>
    </section>
  );
}
