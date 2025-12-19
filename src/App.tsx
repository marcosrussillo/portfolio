import Navbar from "./components/Navbar/Navbar";
import Inicio from "./components/Inicio/Inicio";
import Sobre from "./components/Sobre/Sobre";
import Projetos from "./components/Projetos/Projetos";
import Contato from "./components/Contato/Contato";
import Footer from "./components/Footer/Footer";

import "../src/styles/global.css";


function App() {
  return (
    <div className="App">
      <div className="particulas"></div>
      <Navbar />
      <main>
        <Inicio />
        <Sobre />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App;