import { Header } from "./components/header";
import { HeroSection } from "./components/heroSection";
import { Conheca } from "./components/conheca";
import { Features } from "./components/features";

function App() {
  return (
    <div className="bg-background min-h-screen">
      <div className=" flex flex-col">
        <Header />
        <HeroSection />
        <Conheca />
      </div>
      <div className="px-[24px] md:px-[7rem]">
        <Features />
      </div>
    </div>
  );
}

export default App;
