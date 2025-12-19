import "./inicio.css";
import FotoPerfil from "../../assets/1703792976837.jpg";
import { FaDownload } from "react-icons/fa";

const Inicio = () => {
  // Função para download do CV
  const handleDownloadCV = () => {
    
    const cvUrl = "../../src/conteudo/Curriculo_Marcos_Russillo.pdf"; // Ajuste o caminho
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = "Curriculo_Marcos_Russillo.pdf"; // Nome do arquivo
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    
    
    const button = document.querySelector('.btn-download-cv');
    if (button) {
      // Salvar conteúdo original
      const originalContent = button.innerHTML;
      
      // Mostrar "Baixando..."
      button.innerHTML = '<FaDownload className="icone-download" /> Baixando...';
      
      // Voltar ao original após 2 segundos
      setTimeout(() => {
        button.innerHTML = originalContent;
      }, 2000);
    }
  };

  return (
    <section id="inicio" className="inicio">
      <div className="container">
        <div className="cabecalho-conteudo">
          <div className="foto-container">
            <div className="circulo-animado"></div>
            <img
              src={FotoPerfil}
              alt="Foto de Marcos Russillo"
              className="foto-perfil"
            />
          </div>

          <div className="texto-cabecalho">
            <h1>Marcos Russillo</h1>
            <span className="cabecalho-sub-titulo">
              Analista de Testes | QA
            </span>
            
            
            <div className="botoes-acao">
              <button 
                onClick={handleDownloadCV}
                className="btn-download-cv"
              >
                <FaDownload className="icone-download" />
                Baixar CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio;