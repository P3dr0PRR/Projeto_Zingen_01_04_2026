import logo from "../assets/logo.svg";

export function Header() {
  return (
    <header className="bg-background px-[1rem] py-[2rem] md:px-[3rem] md:py-[2rem] flex items-center justify-between">
      <nav className="w-full flex items-center justify-between">
        <a href="#">
          <img src={logo} alt="Zingen" className="w-[120px] h-auto" />
        </a>

        <div className="gap-[24px] flex items-center ">
          <ul className="gap-[24px] flex items-center">
            <a
              href="#conheça"
              className="hidden md:block hover:text-brand-gradient cursor-pointer text-text-secondary"
            >
              Conheça o app
            </a>
            <a
              href="#funcionalidades"
              className="hidden md:block hover:text-brand-gradient cursor-pointer text-text-secondary"
            >
              Funcionalidades
            </a>
            <a
              href="#planos"
              className="hidden md:block hover:text-brand-gradient cursor-pointer text-text-secondary"
            >
              Planos e preços
            </a>
          </ul>
          <a
            href="#download"
            className="cursor-pointer flex justify-center items-center bg-text-primary hover:hover:bg-brand-gradient text-background p-[1rem] rounded-[8px]"
          >
            Baixar agora
          </a>
        </div>
      </nav>
    </header>
  );
}
