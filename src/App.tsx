import { Header } from "./components/header";
import { HeroSection } from "./components/heroSection";

function App() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      <HeroSection />
    </div>
  );
}

export default App;
