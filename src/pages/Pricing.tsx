import { useEffect, useState } from "react";
import { validateVerificationParams } from "@/utils/token";
import { Button } from "@/components/ui/button";

const PricingPage = () => {
  const [status, setStatus] = useState<
    | { type: "loading" }
    | { type: "success"; email: string }
    | { type: "error"; message: string }
  >({ type: "loading" });

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
    <section className="relative overflow-hidden bg-purple-50 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-violet-200/50"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            Planos e Preços
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Bem-vindo, <span className="font-semibold">{status.email}</span> 🎉
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Básico</h2>
              <p className="text-gray-600 mb-6">Ideal para projetos pessoais</p>
              <p className="text-3xl font-extrabold text-accent mb-6">R$29/mês</p>
              <Button className="w-full">Assinar</Button>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border-2 border-accent p-8 scale-105">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Profissional</h2>
              <p className="text-gray-600 mb-6">Para pequenas empresas</p>
              <p className="text-3xl font-extrabold text-accent mb-6">R$79/mês</p>
              <Button className="w-full">Assinar</Button>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Enterprise</h2>
              <p className="text-gray-600 mb-6">Soluções avançadas</p>
              <p className="text-3xl font-extrabold text-accent mb-6">R$199/mês</p>
              <Button className="w-full">Assinar</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
