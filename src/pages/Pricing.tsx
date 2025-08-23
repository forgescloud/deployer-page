import { useEffect, useState } from "react";
import { validateVerificationParams } from "@/utils/token";
import { Button } from "@/components/ui/button";

const PricingPage = () => {
    const [status, setStatus] = useState<| { type: "loading" } | { type: "success"; email: string } | { type: "error"; message: string }>({ type: "loading" });

    useEffect(() => {
        const result = validateVerificationParams();
        if (result.status === "success") {
            setStatus({ type: "success", email: result.email });
        } else {
            setStatus({ type: "error", message: result.message });
        }
    }, []);

    if (status.type === "loading") {
        return (
            <div className="min-h-screen flex items-center justify-center bg-purple-50">
                <p className="text-lg font-medium text-gray-600">Validando...</p>
            </div>
        );
    }

    if (status.type === "error") {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-purple-50 px-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    Link inválido ou expirado
                </h1>
                <p className="text-gray-600 mb-6">{status.message}</p>
                <Button onClick={() => (window.location.href = "/")}>Voltar</Button>
            </div>
        );
    }

    return (
        <section className="relative bg-purple-50 min-h-screen flex items-center py-16">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-violet-200/50"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Planos e Preços
                    </h1>
                    <p className="text-lg text-gray-600 mb-12">
                        Obrigado por confirmar seu e-mail,{" "}
                        <span className="font-semibold">{status.email}</span>! Escolha o plano ideal:
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Plano Essencial */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 flex flex-col">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                Essencial
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Ideal para projetos pessoais ou pequenos
                            </p>
                            <p className="text-3xl font-extrabold text-accent mb-6">
                                R$49/mês
                            </p>
                            <ul className="text-gray-700 mb-6 space-y-2 flex-grow text-left list-disc list-inside">
                                <li>Deploy contínuo</li>
                                <li>Rollback em 1 clique</li>
                                <li>Monitoramento básico</li>
                            </ul>
                            <Button className="w-full py-3 mt-auto" >
                                Contratar
                            </Button>
                        </div>

                        {/* Plano Profissional */}
                        <div className="bg-white rounded-2xl shadow-2xl border-2 border-accent p-8 flex flex-col transform scale-105">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                Profissional
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Para equipes em crescimento e automações avançadas
                            </p>
                            <p className="text-3xl font-extrabold text-accent mb-6">
                                R$129/mês
                            </p>
                            <ul className="text-gray-700 mb-6 space-y-2 flex-grow text-left list-disc list-inside">
                                <li>Tudo do Essencial</li>
                                <li>Provisionamento de infraestrutura</li>
                                <li>Monitoramento avançado</li>
                                <li>Suporte prioritário</li>
                            </ul>
                            <Button className="w-full py-3 mt-auto">
                                Contratar
                            </Button>
                        </div>
                    </div>

                    <p className="text-sm text-gray-500 mt-8">
                        Pague mensalmente. Upgrade, downgrade ou cancelamento a qualquer momento.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PricingPage;
