import { Header } from "./components/header";
import { HeroSection } from "./components/heroSection";
import { Conheca } from "./components/conheca";
import { Features } from "./components/features";
import { Planos } from "./components/planos";

function App() {
  return (
    <div className="bg-background min-h-screen cursor-default">
      <div className=" flex flex-col">
        <Header />
        <HeroSection />
        <Conheca />
      </div>
      <div className="px-[24px] md:px-[7rem]">
        <Features />
        <Planos />
      </div>
    </div>
  );
}

export default App;
