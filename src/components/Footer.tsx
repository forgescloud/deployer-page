
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} CME Cloud. Todos os direitos reservados.
                    </p>
                    <p className="text-gray-400 text-sm mt-4 md:mt-0">
                        Desenvolvido em conformidade com RDC 15/2012 ANVISA
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
