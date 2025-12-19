import "./contato.css";
import Linkedin from "../../assets/linkedin.png";
import Email from "../../assets/o-email.png";
import github from "../../assets/github.png";

const Contato = () => {
  return (
    <section id="contato" className="contato">
      <h2 className="contatos-titulo">Contato</h2>

      <div className="redes-sociais">
        <a
          href="https://www.linkedin.com/in/marcos-antonio-r-45ba0b10a"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Linkedin} alt="LinkedIn" className="icone-contato" />
        </a>

        <a href="mailto:marcos_russillo19@hotmail.com">
          <img src={Email} alt="Email" className="icone-contato" />
        </a>

        <a
          href="https://www.github.com/marcosrussillo"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="LinkedIn" className="icone-contato" />
        </a>

      </div>
    </section>
  );
};

export default Contato;
