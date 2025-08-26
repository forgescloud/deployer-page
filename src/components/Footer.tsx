const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Links */}
                <div className="flex flex-wrap justify-center space-x-6 mb-6 text-sm text-gray-400">
                    <a href="/juridico/politica-de-cookies.pdf" target="_blank">Política de Cookies</a>
                    <a href="/juridico/politica-de-privacidade.pdf" target="_blank">Política de Privacidade</a>
                    <a href="/juridico/Termos-e-Condicoes-gerais.pdf" target="_blank">Termos e Condições</a>
                    <a href="/juridico/termos-de-servico-e-uso-do-site.pdf" target="_blank">Termos de Uso</a>
                    <a href="/juridico/cpd-e-lgpd.pdf" target="_blank">CPD e LGPD</a>
                    <a href="/juridico/PUA.pdf" target="_blank">PUA</a>
                    <a href="/juridico/SLA.pdf" target="_blank">SLA</a>
                </div>

                {/* Linha final */}
                <div className="border-t border-gray-800 pt-6 flex flex-wrap justify-center space-x-6 mb-6 text-sm text-gray-400">
                    <p className="text-gray-400 text-sm md:text-center">
                        © {new Date().getFullYear()} Deployer | Internettools CNPJ 23.360.326/0001-25 - Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
