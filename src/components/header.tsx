import logo from "../assets/logo.svg";

export function Header() {
  return (
    <header className="bg-background px-[1rem] py-[24px] flex items-center justify-between">
      <img src={logo} alt="Zingen Logo" className="h-6" />

      <div className="gap-[24px] flex items-center ">
        <p className="hidden md:block cursor-pointer text-text-secondary">
          Conheça o app
        </p>
        <p className="hidden md:block cursor-pointer text-text-secondary">
          Funcionalidades
        </p>
        <p className="hidden md:block cursor-pointer text-text-secondary">
          Planos e preços
        </p>
        <span
          type="button"
          className="cursor-pointer bg-text-primary text-background p-[1rem] rounded-[8px]"
        >
          Baixar agora
        </span>
      </div>
    </header>
  );
}
