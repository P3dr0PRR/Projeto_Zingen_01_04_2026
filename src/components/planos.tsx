import check from "../assets/icons/Check.svg";

export function Planos() {
  return (
    <section
      className="bg-background flex flex-col py-[48px] px-[1rem] md:px-[3rem] space-y-[2rem]"
      id="planos"
    >
      <header className="text-center">
        <span className="text-brand-primary">Escolha seu plano</span>
        <h2 className="text-text-primary text-[32px] font-bold mt-[8px]">
          Assine e tenha acesso ilimitado a todas as funcionalidades
        </h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2rem]">
        <div className="bg-surface rounded-2xl p-[2rem]">
          <div className="space-y-[24px]">
            <h3 className="text-text-primary">Básico</h3>
            <p className="text-text-secondary">
              Baixe o app e comece a cantar agora mesmo!
            </p>
            <h3 className="text-text-primary text-[32px] md:text-[40px]">
              Grátis
            </h3>
            <div className="group p-[2px] rounded-[8px] bg-text-primary hover:bg-brand-gradient cursor-pointer transition-all">
              <div className="text-center bg-background px-[1rem] py-4 rounded-[7px]">
                <a
                  href="#download"
                  className="text-text-primary group-hover:text-brand-gradient transition-colors"
                >
                  Baixar agora
                </a>
              </div>
            </div>
          </div>
          <div className="bg-separator h-[1px] my-[2rem]"></div>
          <div>
            <ul role="list" className="grid gap-1 text-text-secondary">
              <li>
                <img src={check} alt="Check" className="inline-block mr-2" />
                Com Anúncios
              </li>
              <li>
                <img src={check} alt="Check" className="inline-block mr-2" />
                Até 5 músicas por dia
              </li>
              <li>
                <img src={check} alt="Check" className="inline-block mr-2" />
                Cante apenas as músicas disponíveis no plano gratuito
              </li>
            </ul>
          </div>
        </div>

        <div className="relative p-[2px] rounded-2xl bg-brand-gradient">
          <div className="absolute top-0 left-0 bg-brand-gradient text-background text-xs font-bold px-3 py-1 rounded-tl-2xl rounded-br-xl">
            1 MÊS GRÁTIS
          </div>
          <div className="bg-surface rounded-2xl p-[2rem] pt-[3rem]">
            <div className="space-y-[24px]">
              <h3 className="text-text-primary">Premium</h3>
              <p className="text-text-secondary">
                Ideal para quem já cansou de passar vergonha no Karaokê
              </p>
              <h3 className="text-text-primary text-[32px] md:text-[40px]">
                R$ 24,90{" "}
                <small className="text-[16px] text-text-secondary"> /mês</small>
              </h3>
              <a
                href="#download"
                className="cursor-pointer flex justify-center items-center bg-text-primary hover:hover:bg-brand-gradient text-background p-[1rem] rounded-[8px]"
              >
                Experimente de graça
              </a>
            </div>
            <div className="bg-separator h-[1px] my-[2rem]"></div>
            <div>
              <ul role="list" className="grid gap-1 text-text-secondary">
                <li>
                  <img src={check} alt="Check" className="inline-block mr-2" />
                  Sem interrupção de anúncios
                </li>
                <li>
                  <img src={check} alt="Check" className="inline-block mr-2" />
                  Cante quantas músicas quiser
                </li>
                <li>
                  <img src={check} alt="Check" className="inline-block mr-2" />
                  Cante todas as músicas da biblioteca
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-surface rounded-2xl p-[2rem]">
          <div className="space-y-[24px]">
            <h3 className="text-text-primary">Família</h3>
            <p className="text-text-secondary">
              Para aquelas famílias que adoram se reunir pra cantar
            </p>
            <h3 className="text-text-primary text-[32px] md:text-[40px]">
              R$ 21,90{" "}
              <small className="text-[16px] text-text-secondary">
                /mês por pessoa
              </small>
            </h3>
            <div className="group p-[2px] rounded-[8px] bg-text-primary hover:bg-brand-gradient cursor-pointer transition-all">
              <div className="text-center bg-background px-[1rem] py-4 rounded-[7px]">
                <a
                  href="#download"
                  className="text-text-primary group-hover:text-brand-gradient transition-colors"
                >
                  Assinar agora
                </a>
              </div>
            </div>
          </div>
          <div className="bg-separator h-[1px] my-[2rem]"></div>
          <div>
            <ul role="list" className="grid gap-1 text-text-secondary">
              <li>
                <img src={check} alt="Check" className="inline-block mr-2" />
                Sem interrupção de anúncios
              </li>
              <li>
                <img src={check} alt="Check" className="inline-block mr-2" />
                Cante quantas músicas quiser
              </li>
              <li>
                <img src={check} alt="Check" className="inline-block mr-2" />
                Cante todas as músicas da biblioteca
              </li>
            </ul>
            <small className="text-text-secondary mt-[1rem] block">
              Mínimo de 4 pessoas no plano família.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}
