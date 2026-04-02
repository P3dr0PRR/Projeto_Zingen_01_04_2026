import { Header } from "./components/header";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="bg-background flex-grow"></main>
    </div>
  );
}

export default App;
