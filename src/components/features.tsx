import magic from "../assets/icons/MagicWand.svg";
import game from "../assets/icons/GameController.svg";
import mic from "../assets/icons/MicrophoneStage.svg";
import users from "../assets/icons/UsersThree.svg";
import music from "../assets/icons/MusicNotes.svg";
import tela1 from "../assets/icons/Tela 1.png";
import tela2 from "../assets/icons/Tela 2.png";
import tela3 from "../assets/icons/Tela 3.png";

export function Features() {
  return (
    <section
      className="bg-background flex flex-col py-[48px] px-[1rem] md:px-[3rem]"
      id="funcionalidades"
    >
      <span className="text-brand-primary">Conheça o app</span>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[1rem] mt-10">
        <div className="bg-stroke rounded-xl p-[24px]">
          <img
            src={magic}
            alt="Magic Wand"
            className="w-[48px] h-auto mb-[16px]"
          />
          <h3 className="text-text-primary">
            A maior biblioteca de músicas de Karaokê!
          </h3>
          <p className="text-text-secondary">
            Nossa IA remove a voz de qualquer música e a deixa pronta pra
            cantar, num passe de mágica!
          </p>
        </div>

        <div className="xl:col-span-2 bg-stroke rounded-xl p-[24px] flex gap-[1rem] items-start">
          <div className="flex-1">
            <img
              src={game}
              alt="Game Controller"
              className="w-[48px] h-auto mb-[16px]"
            />
            <h3 className="text-text-primary">Experiência gamificada</h3>
            <p className="text-text-secondary">
              Sua performance é pontuada de acordo com nosso algoritmo ultra
              preciso. Desafie-se, ganhe reconhecimento e comemore sua evolução!
            </p>
          </div>
          <img
            src={tela2}
            alt="Tela 2"
            className="hidden xl:block w-[40%] h-auto object-contain self-end"
          />
        </div>

        <div className="bg-stroke rounded-xl p-[24px]">
          <img
            src={mic}
            alt="Microphone Stage"
            className="w-[48px] h-auto mb-[16px]"
          />
          <h3 className="text-text-primary">Grave suas performances</h3>
          <p className="text-text-secondary">
            Seja para compartilhar com os amigos ou para acompanhar sua
            evolução, nosso recurso de gravação de áudio e vídeo permite que
            você aproveite a experiência ao máximo!
          </p>
        </div>

        <div className="xl:col-span-2 bg-stroke rounded-xl p-[24px] flex gap-[1rem] items-start">
          <img
            src={tela1}
            alt="Tela 1"
            className="hidden xl:block w-[40%] h-auto object-contain self-end"
          />
          <div className="flex-1">
            <img
              src={users}
              alt="Users Three"
              className="w-[48px] h-auto mb-[16px]"
            />
            <h3 className="text-text-primary">Compartilhe com a comunidade</h3>
            <p className="text-text-secondary">
              Compartilhe suas gravações com a comunidade, interaja e explore a
              performance vocal de outras pessoas no seu feed!
            </p>
          </div>
        </div>

        <div className="md:col-span-2 xl:col-span-2 bg-stroke rounded-xl p-[24px] flex gap-[1rem] items-start">
          <div className="flex-1">
            <img
              src={music}
              alt="Music Notes"
              className="w-[48px] h-auto mb-[16px]"
            />
            <h3 className="text-text-primary">Letras em tempo-real</h3>
            <p className="text-text-secondary">
              Nunca perca o ritmo com as letras das músicas sincronizadas e
              exibidas em tempo real. Você também pode ativar a voz original da
              música para ajudar.
            </p>
          </div>
          <img
            src={tela3}
            alt="Tela 3"
            className="hidden xl:block w-[40%] h-auto object-contain self-end"
          />
        </div>
      </div>
    </section>
  );
}
