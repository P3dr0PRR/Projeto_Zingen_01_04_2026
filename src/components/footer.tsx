import logo from "../assets/logo.svg";
import tiktok from "../assets/icons/ic_baseline-tiktok.svg";
import discord from "../assets/icons/ic_baseline-discord.svg";
import instagram from "../assets/icons/mdi_instagram.svg";
import x from "../assets/icons/ri_twitter-x-fill.svg";

export function Footer() {
  return (
    <section className="flex flex-col pb-5">
      <div className="grid grid-cols-1 md:grid-cols-4 space-y-[4rem]">
        <div>
          <a href="#">
            <img src={logo} alt="Zingen" className="w-[120px] h-auto" />
          </a>
        </div>
        <div className="flex flex-col space-y-[20px]">
          <span className="text-brand-primary">Produto</span>
          <span className="text-text-primary">Funcionalidades</span>
          <span className="text-text-primary">Planos e preços</span>
          <span className="text-text-primary">Download</span>
        </div>
        <div className="flex flex-col space-y-[20px]">
          <span className="text-brand-primary">Empresa</span>
          <span className="text-text-primary">Sobre nós</span>
          <span className="text-text-primary">Trabalhe conosco</span>
          <span className="text-text-primary">Blog</span>
        </div>
        <div className="flex flex-col space-y-[20px]">
          <span className="text-brand-primary">Legal</span>
          <span className="text-text-primary">Termos de uso</span>
          <span className="text-text-primary">Política de privacidade</span>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center mt-6">
        <div className="flex items-center gap-[24px] mb-4">
          <img
            src={tiktok}
            alt="TikTok"
            className="w-[24px] h-auto inline-block mr-4"
          />

          <img
            src={instagram}
            alt="Instagram"
            className="w-[24px] h-auto inline-block mr-4"
          />
          <img src={x} alt="X" className="w-[24px] h-auto inline-block" />
          <img
            src={discord}
            alt="Discord"
            className="w-[24px] h-auto inline-block mr-4"
          />
        </div>
        <div className="flex flex-col items-center gap-[24px]">
          <span className="text-text-secondary">
            Desenvolvido por Pedro Paulo
          </span>
          <span className="text-text-secondary">
            ©2024 Zingen Technologies, Inc.
          </span>
        </div>
      </div>
    </section>
  );
}
