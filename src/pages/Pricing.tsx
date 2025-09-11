import { useEffect, useMemo, useState } from "react";
import { validateVerificationParams } from "@/utils/token";
import { Button } from "@/components/ui/button";

type Status =
    | { type: "loading" }
    | { type: "success"; email: string }
    | { type: "error"; message: string };

type BillingCycle = "monthly" | "annual";

const BRL = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
});

type PlanOption = {
    billing: BillingCycle;
    price: number;            // preço exibido (mensal ou anual)
    deploys: number;          // cota de deploys (por mês no mensal, no ano no anual)
    checkoutUrl: string;      // link de checkout (Guru)
    savingsLabel?: string;    // ex: "2 meses grátis"
};

type Plan = {
    name: string;
    copy: string;
    popular?: boolean;
    options: PlanOption[];
};

const plans: readonly Plan[] = [
    {
        name: "Starting",
        copy: "Do GitHub ao ar em minutos. Automatize a publicação de sites estáticos com um processo simples e rápido, sem complicações manuais.",
        popular: false,
        options: [
            {
                billing: "monthly",
                price: 47,
                deploys: 20,
                checkoutUrl: "https://seguro.deployer.com.br/subscribe/plano-starting-mensal",
            },
            {
                billing: "annual",
                price: 470,
                deploys: 240,
                checkoutUrl: "https://seguro.deployer.com.br/subscribe/plano-starting-anual",
                savingsLabel: "2 meses grátis",
            },
        ],
    },
    {
        name: "Plus",
        copy: "Publique mais, gerencie menos. Escale seus projetos com eficiência. Mantenha o foco no que realmente importa.",
        popular: true,
        options: [
            {
                billing: "monthly",
                price: 129,
                deploys: 100,
                checkoutUrl: "https://seguro.deployer.com.br/subscribe/plano-plus-mensall",
            },
            {
                billing: "annual",
                price: 1290,
                deploys: 1200,
                checkoutUrl: "https://seguro.deployer.com.br/subscribe/deployer-plus-anual",
                savingsLabel: "2 meses grátis",
            },
        ],
    },
] as const;

const PricingPage = () => {
    const [status, setStatus] = useState<Status>({ type: "loading" });
    const [billing, setBilling] = useState<BillingCycle>("monthly");

    useEffect(() => {
        const result = validateVerificationParams();
        if (result.status === "success") {
            setStatus({ type: "success", email: result.email });
        } else {
            setStatus({ type: "error", message: result.message });
        }
    }, []);

    const savingsHint = useMemo(() => "2 meses grátis (~16,7%)", []);

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
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-violet-200/50" />
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Planos e Preços
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Obrigado por confirmar seu e-mail,{" "}
                        <span className="font-semibold">{status.email}</span>! Escolha o
                        plano ideal:
                    </p>

                    {/* Toggle de cobrança */}
                    <div className="inline-flex items-center gap-3 mb-12 bg-white/70 backdrop-blur border border-gray-200 rounded-full p-1 shadow-sm">
                        <button
                            type="button"
                            onClick={() => setBilling("monthly")}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition ${billing === "monthly"
                                ? "bg-accent text-white shadow"
                                : "text-gray-600 hover:text-gray-800"
                                }`}
                            aria-pressed={billing === "monthly"}
                        >
                            Mensal
                        </button>
                        <button
                            type="button"
                            onClick={() => setBilling("annual")}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition relative ${billing === "annual"
                                ? "bg-accent text-white shadow"
                                : "text-gray-600 hover:text-gray-800"
                                }`}
                            aria-pressed={billing === "annual"}
                        >
                            Anual
                            <span
                                className={`${billing === "annual" ? "bg-white/20 text-white" : "bg-accent/10 text-accent"
                                    } ml-2 inline-block rounded-full px-2 py-0.5 text-[11px] font-semibold align-middle`}
                                aria-hidden="true"
                                title={savingsHint}
                            >
                                {savingsHint}
                            </span>
                        </button>
                    </div>

                    {/* Cards */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {plans.map((plan) => {
                            const option = plan.options.find((o) => o.billing === billing)!;
                            const perMonthAnnual =
                                billing === "annual" ? option.price / 12 : null;

                            return (
                                <div
                                    key={plan.name}
                                    className={`bg-white rounded-2xl border p-8 flex flex-col relative ${plan.popular
                                        ? "shadow-2xl border-accent transform md:scale-105"
                                        : "shadow-lg border-gray-200"
                                        }`}
                                >
                                    {plan.popular && (
                                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                                            Mais escolhido
                                        </span>
                                    )}

                                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                        {plan.name}
                                    </h2>
                                    <p className="text-gray-600 mb-6">{plan.copy}</p>

                                    <div className="mb-6">
                                        <div className="flex items-end justify-center gap-2">
                                            <span className="text-4xl font-extrabold text-accent">
                                                {BRL.format(option.price)}
                                            </span>
                                            <span className="text-gray-500 mb-1 text-sm">
                                                {billing === "monthly" ? "/mês" : "/ano"}
                                            </span>
                                        </div>

                                        {perMonthAnnual && (
                                            <p className="text-xs text-gray-500 mt-1">
                                                equivalente a{" "}
                                                <strong>{BRL.format(perMonthAnnual)}</strong>/mês
                                                (cobrado anualmente)
                                            </p>
                                        )}

                                        <div className="mt-4 flex items-center justify-center gap-2">
                                            <span className="inline-flex items-center gap-1 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-sm text-accent">
                                                {option.deploys} deploy
                                                {option.deploys > 1 ? "s" : ""}{" "}
                                                {billing === "monthly" ? "por mês" : "no ano"}
                                            </span>
                                            {option.savingsLabel && billing === "annual" && (
                                                <span className="inline-flex items-center gap-1 rounded-full border border-green-600/20 bg-green-50 px-3 py-1 text-sm text-green-700">
                                                    {option.savingsLabel}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <Button
                                        className="w-full py-3 mt-auto"
                                        onClick={() => (window.location.href = option.checkoutUrl)}
                                        aria-label={`Contratar plano ${plan.name} no ciclo ${billing === "monthly" ? "mensal" : "anual"
                                            }`}
                                    >
                                        Contratar
                                    </Button>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-8 space-y-2">
                        <p className="text-sm text-gray-500">
                            {billing === "monthly"
                                ? "Pague mensalmente. Upgrade, downgrade ou cancelamento a qualquer momento."
                                : "Cobrança anual única com desconto equivalente a ~2 meses. Upgrade, downgrade ou cancelamento ao final do ciclo."}
                        </p>
                        {/* <p className="text-xs text-gray-400">
                            Impostos podem variar conforme a sua localidade.
                        </p> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingPage;
