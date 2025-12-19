import "./sobre.css";

const Sobre = () => {
  return (
    <section id="sobre" className="sobre">
      <h2 className="sobre-titulo">Sobre Mim</h2>

      <div className="sobre-caixa">
        <p className="sobre-paragrafo">
          Sou Analista de Testes (QA) com mais de 4 anos de
          experiência atuando na garantia da qualidade de sistemas e aplicações
          web. Ao longo da minha trajetória, venho trabalhando com testes
          manuais e automatizados, sempre focado em identificar falhas, otimizar
          processos e assegurar entregas com alto padrão de qualidade.
        </p>

        <p className="sobre-paragrafo">
          Possuo sólida experiência no planejamento e execução de casos de
          teste, reporte e acompanhamento de bugs, além da criação de testes
          automatizados E2E com Cypress. Também atuo com testes de API,
          validando integrações, contratos e respostas entre serviços,
          utilizando ferramentas como Postman.
        </p>

        <p className="sobre-paragrafo">
          Sou formado em Análise e Desenvolvimento de Sistemas e também em
          Comunicação Social, com habilitação em Publicidade e Propaganda, o que
          fortalece tanto minha base técnica quanto minhas habilidades de
          comunicação, organização e clareza na documentação.
        </p>

        <p className="sobre-paragrafo">
          Além disso, possuo certificações em Qualidade de Software, Testes
          Exploratórios, automação de testes com Cypress, testes de aplicações
          modernas, testes automatizados de API, fundamentos de JavaScript e
          modelagem de banco de dados com SQL Server, reforçando meu compromisso
          com aprendizado contínuo e boas práticas de qualidade.
        </p>
      </div>
    </section>
  );
};

export default Sobre;
