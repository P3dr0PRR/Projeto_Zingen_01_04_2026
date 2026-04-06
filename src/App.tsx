import { Header } from "./components/header";
import { HeroSection } from "./components/heroSection";
import { Conheca } from "./components/conheca";

function App() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <Conheca />
    </div>
  );
}

export default App;
