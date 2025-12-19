import "./projetos.css";
import Projeto1 from "../../assets/1.jpg";
import Projeto2 from "../../assets/2.jpg";

type Projeto = {
  titulo: string;
  descricao: string;
  imagem: string;
};

const projetos: Projeto[] = [
  {
    titulo: "Em Breve",
    descricao: "",
    imagem: Projeto1,
  },
  {
    titulo: "Em Breve",
    descricao: "",
    imagem: Projeto2,
  },
   {
    titulo: "Em Breve",
    descricao: "",
    imagem: Projeto2,
  },
   {
    titulo: "Em Breve",
    descricao: "",
    imagem: Projeto2,
  },
   {
    titulo: "Em Breve",
    descricao: "",
    imagem: Projeto2,
  },
   {
    titulo: "Em Breve",
    descricao: "",
    imagem: Projeto2,
  },
];

const Projetos = () => {
  return (
    <section id="projetos" className="projetos">
      <h2 className="projetos-titulo">Meus Projetos</h2>

      <div className="projetos-caixa">
        {projetos.map((projeto, index) => (
          <div className="projetos-card" key={index}>
            <img
              src={projeto.imagem}
              alt={projeto.titulo}
              className="projetos-imagem"
            />

            <div className="caixa-texto-projeto">
              <h3 className="info-projetos">{projeto.titulo}</h3>
              <p className="paragrafo-projetos">{projeto.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projetos;