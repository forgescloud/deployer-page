import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

type BillingCycle = "monthly" | "annual";

type PlanOption = {
  billing: BillingCycle;
  price: number;
  deploys: number;
  checkoutUrl: string;
  savingsLabel?: string;
};

type Plan = {
  name: string;
  copy: string;
  popular?: boolean;
  features: string[];
  options: PlanOption[];
};

const BRL = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const plans: readonly Plan[] = [
  {
    name: "Start",
    copy: "Ideal para quem quer publicar com agilidade, reduzir tarefas manuais e colocar sites estáticos no ar com um fluxo simples.",
    features: [
      "Fluxo guiado do GitHub até a hospedagem",
      "Acompanhamento do deploy por status",
      "Perfeito para landing pages e sites estáticos",
    ],
    options: [
      {
        billing: "monthly",
        price: 97,
        deploys: 20,
        checkoutUrl: "https://seguro.deployer.com.br/subscribe/start-mensal",
      },
      {
        billing: "annual",
        price: 970,
        deploys: 240,
        checkoutUrl: "https://seguro.deployer.com.br/subscribe/start-anuall",
        savingsLabel: "2 meses grátis",
      },
    ],
  },
  {
    name: "Plus",
    copy: "Para quem opera com mais volume, precisa de mais deploys e quer manter previsibilidade sem complicar a rotina.",
    popular: true,
    features: [
      "Mais capacidade para operações recorrentes",
      "Deploys com acompanhamento do início ao fim",
      "Compatível com hospedagens via FTP e SFTP",
    ],
    options: [
      {
        billing: "monthly",
        price: 197,
        deploys: 100,
        checkoutUrl: "https://seguro.deployer.com.br/subscribe/plano-plus-mensall",
      },
      {
        billing: "annual",
        price: 1197,
        deploys: 1200,
        checkoutUrl: "https://seguro.deployer.com.br/subscribe/plus-anual-1",
        savingsLabel: "2 meses grátis",
      },
    ],
  },
];

const highlights = [
  "Do GitHub para a hospedagem com menos atrito",
  "Compatível com hospedagens via FTP e SFTP",
  "Acompanhamento do deploy em cada etapa",
];

const PricingSection = () => {
  const [billing, setBilling] = useState<BillingCycle>("monthly");
  const savingsHint = useMemo(() => "2 meses grátis (~16,7%)", []);

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f7f4ff_40%,#f1efff_100%)] py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_26%)]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="rounded-full bg-white/90 px-4 py-1.5 text-sm text-primary shadow-sm">
            Planos e preços
          </Badge>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Escolha o plano ideal para publicar com velocidade e previsibilidade
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Do primeiro site às operações com mais volume, o Deployer foi pensado para tirar o
            projeto do repositório e colocá-lo no ar com um processo mais simples, rápido e
            confiável.
          </p>
        </div>

        <div className="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-3">
          {highlights.map((item) => (
            <div
              key={item}
              className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur"
            >
              <Sparkles className="h-4 w-4 text-accent" />
              {item}
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white/80 p-1 shadow-sm backdrop-blur">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                billing === "monthly"
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
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${
                billing === "annual"
                  ? "bg-accent text-white shadow"
                  : "text-gray-600 hover:text-gray-800"
              }`}
              aria-pressed={billing === "annual"}
            >
              Anual
              <span
                className={`ml-2 inline-block rounded-full px-2 py-0.5 text-[11px] font-semibold align-middle ${
                  billing === "annual"
                    ? "bg-white/20 text-white"
                    : "bg-accent/10 text-accent"
                }`}
                aria-hidden="true"
                title={savingsHint}
              >
                {savingsHint}
              </span>
            </button>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2">
          {plans.map((plan) => {
            const option = plan.options.find((item) => item.billing === billing)!;
            const perMonthAnnual = billing === "annual" ? option.price / 12 : null;

            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-[28px] border p-8 ${
                  plan.popular
                    ? "border-accent bg-slate-950 text-white shadow-[0_30px_80px_-30px_rgba(79,70,229,0.65)]"
                    : "border-white/80 bg-white text-slate-900 shadow-[0_24px_70px_-35px_rgba(91,33,182,0.35)]"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white shadow">
                    Mais escolhido
                  </span>
                )}

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p
                      className={`mt-3 text-base leading-7 ${
                        plan.popular ? "text-white/80" : "text-slate-600"
                      }`}
                    >
                      {plan.copy}
                    </p>
                  </div>
                  <Badge
                    className={`rounded-full px-3 py-1 text-xs ${
                      plan.popular
                        ? "bg-white/10 text-white"
                        : "bg-purple-50 text-purple-700"
                    }`}
                  >
                    {billing === "monthly" ? "Cobrança mensal" : "Cobrança anual"}
                  </Badge>
                </div>

                <div className="mt-8">
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-extrabold">{BRL.format(option.price)}</span>
                    <span className={plan.popular ? "mb-1 text-white/70" : "mb-1 text-slate-500"}>
                      {billing === "monthly" ? "/mês" : "/ano"}
                    </span>
                  </div>

                  {perMonthAnnual && (
                    <p className={`mt-2 text-sm ${plan.popular ? "text-white/70" : "text-slate-500"}`}>
                      Equivalente a <strong>{BRL.format(perMonthAnnual)}</strong>/mês no plano anual.
                    </p>
                  )}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-sm ${
                      plan.popular
                        ? "border border-white/15 bg-white/10 text-white"
                        : "border border-accent/20 bg-accent/5 text-accent"
                    }`}
                  >
                    {option.deploys} deploy{option.deploys > 1 ? "s" : ""}{" "}
                    {billing === "monthly" ? "por mês" : "no ano"}
                  </span>

                  {option.savingsLabel && billing === "annual" && (
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-sm ${
                        plan.popular
                          ? "border border-emerald-300/20 bg-emerald-400/10 text-emerald-200"
                          : "border border-emerald-600/20 bg-emerald-50 text-emerald-700"
                      }`}
                    >
                      {option.savingsLabel}
                    </span>
                  )}
                </div>

                <div className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div
                        className={`mt-0.5 flex h-5 w-5 items-center justify-center rounded-full ${
                          plan.popular ? "bg-white/15 text-white" : "bg-accent/10 text-accent"
                        }`}
                      >
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <p className={plan.popular ? "text-white/80" : "text-slate-600"}>{feature}</p>
                    </div>
                  ))}
                </div>

                <Button
                  className={`mt-8 w-full py-3 ${
                    plan.popular ? "bg-white text-slate-950 hover:bg-white/90" : ""
                  }`}
                  onClick={() => {
                    window.location.href = option.checkoutUrl;
                  }}
                  aria-label={`Contratar plano ${plan.name} no ciclo ${
                    billing === "monthly" ? "mensal" : "anual"
                  }`}
                >
                  Contratar {plan.name}
                </Button>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-8 max-w-3xl text-center">
          <p className="text-sm text-slate-500">
            {billing === "monthly"
              ? "Flexibilidade para começar agora e ajustar o plano conforme a evolução da sua operação."
              : "Melhor custo-benefício para operações recorrentes, com economia equivalente a aproximadamente 2 meses no comparativo mensal."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
