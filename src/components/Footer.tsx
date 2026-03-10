import HashNavLink from "@/components/HashNavLink";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-300">
          <HashNavLink to="/" className="transition hover:text-white">
            Home
          </HashNavLink>
          <HashNavLink to="/" sectionId="pricing" className="transition hover:text-white">
            Planos
          </HashNavLink>
          <HashNavLink to="/docs" className="transition hover:text-white">
            Docs
          </HashNavLink>
          <HashNavLink to="/roadmap" className="transition hover:text-white">
            Roadmap
          </HashNavLink>
        </div>

        <div className="mb-6 flex flex-wrap justify-center space-x-6 text-sm text-gray-400">
          <a href="/juridico/politica-de-cookies.pdf" target="_blank" rel="noreferrer">
            Política de Cookies
          </a>
          <a href="/juridico/politica-de-privacidade.pdf" target="_blank" rel="noreferrer">
            Política de Privacidade
          </a>
          <a href="/juridico/Termos-e-Condicoes-gerais.pdf" target="_blank" rel="noreferrer">
            Termos e Condições
          </a>
          <a href="/juridico/termos-de-servico-e-uso-do-site.pdf" target="_blank" rel="noreferrer">
            Termos de Uso
          </a>
          <a href="/juridico/cpd-e-lgpd.pdf" target="_blank" rel="noreferrer">
            CPD e LGPD
          </a>
          <a href="/juridico/PUA.pdf" target="_blank" rel="noreferrer">
            PUA
          </a>
          <a href="/juridico/SLA.pdf" target="_blank" rel="noreferrer">
            SLA
          </a>
        </div>

        <div className="mb-6 flex flex-wrap justify-center space-x-6 border-t border-gray-800 pt-6 text-sm text-gray-400">
          <p className="text-center text-sm text-gray-400 md:text-center">
            © {new Date().getFullYear()} Deployer | Internettools Partner CNPJ 23.360.326/0001-25
            {" "} - Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
