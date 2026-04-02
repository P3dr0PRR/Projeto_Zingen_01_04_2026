import logo from "../assets/logo.svg";

export function Header() {
  return (
    <header className="bg-background px-[1rem] py-[2rem] md:px-[3rem] md:py-[2rem] flex items-center justify-between">
      <img src={logo} alt="Zingen Logo" className="h-6" />

      <div className="gap-[24px] flex items-center ">
        <ul className="gap-[24px] flex items-center">
          <li className="hidden md:block cursor-pointer text-text-secondary">
            Conheça o app
          </li>
          <li className="hidden md:block cursor-pointer text-text-secondary">
            Funcionalidades
          </li>
          <li className="hidden md:block cursor-pointer text-text-secondary">
            Planos e preços
          </li>
        </ul>
        <span className="cursor-pointer bg-text-primary text-background p-[1rem] rounded-[8px]">
          Baixar agora
        </span>
      </div>
    </header>
  );
}
