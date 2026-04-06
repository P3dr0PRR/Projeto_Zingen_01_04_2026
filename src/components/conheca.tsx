import mobile from "../assets/icons/mobile.png";
export function Conheca() {
  return (
    <section
      className="bg-surface py-[24px] flex items-center justify-between"
      id="conheça"
    >
      <div className="flex items-center justify-center w-full gap-[24px] px-[24px] md:px-[2rem] py-[3rem] md:py-[5rem]">
        <div className="md:w-[40rem]">
          <span className="text-brand-primary">Conheça o app</span>
          <h2 className="text-text-primary">
            O aplicativo perfeito para aprender a cantar
          </h2>
          <p className="text-text-secondary">
            Nosso algoritmo de Inteligência Artificial permite remover a voz
            original e manter as melodias das músicas. Dessa forma, temos o
            maior repertório musical para Karaokê! Além disso, ao cantar, sua
            voz e afinação é comparada pelo algoritmo permitindo uma avaliação
            precisa da sua performance te ajudando a melhorar seu canto.
          </p>
        </div>
        <div className="hidden md:block w-[34rem]">
          <img
            src={mobile}
            alt="Mobile"
            className="w-full h-auto mt-[2.25rem] md:mt-[3rem]"
          />
        </div>
      </div>
    </section>
  );
}
