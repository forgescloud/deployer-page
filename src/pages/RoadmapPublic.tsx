import Footer from "@/components/Footer";
import HashNavLink from "@/components/HashNavLink";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { goToSection, usePendingSection } from "@/lib/navigation";
import {
  ArrowRight,
  GitBranch,
  Layers3,
  Rocket,
  Shield,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";

const milestones = [
  {
    phase: "Origem",
    title: "Tudo começou para resolver uma dor operacional real",
    status: "Concluído",
    tone: "bg-slate-900 text-white",
    description:
      "Antes de existir como produto, o problema já era claro: publicar projetos estáticos em hospedagens tradicionais consumia tempo, gerava retrabalho e dependia de processos manuais que não escalavam bem.",
    bullets: [
      "Os deploys dependiam de repetição, conferência manual e muito cuidado operacional.",
      "Qualquer ajuste simples podia virar um novo ciclo de envio e validação.",
      "Sem automação, crescer o volume de publicações significava aumentar o atrito.",
    ],
  },
  {
    phase: "MVP interno",
    title: "Automatizamos o fluxo essencial de publicação",
    status: "Concluído",
    tone: "bg-primary text-white",
    description:
      "O MVP interno nasceu para provar que dava para sair do improviso e transformar a publicação em um processo mais previsível, com menos dependência de etapas manuais.",
    bullets: [
      "Estruturamos o backend de processamento com fila e acompanhamento de status.",
      "Validamos internamente o fluxo ponta a ponta de envio e publicação.",
      "Criamos a base que tirou o deploy do processo manual e repetitivo.",
    ],
  },
  {
    phase: "Release público",
    title: "Abrimos a plataforma para ganhar escala de verdade",
    status: "Em andamento",
    tone: "bg-accent text-white",
    description:
      "Com a base validada, entramos na fase de expansão pública: aumentar capacidade, simplificar a jornada do cliente e levar o Deployer para cenários reais de uso em mais projetos e mais hospedagens.",
    bullets: [
      "Escalamos a infraestrutura para suportar mais volume e mais projetos.",
      "Expandimos a publicação para qualquer hospedagem compatível com FTP e SFTP.",
      "Abrimos a jornada pública com planos, documentação e onboarding mais claros.",
    ],
  },
];

const futureTracks = [
  {
    icon: Workflow,
    title: "CI/CD nativo",
    text: "Queremos evoluir para uma camada de automação ainda mais forte, com gatilhos por atualização de repositório e fluxos mais próximos de uma esteira moderna.",
  },
  {
    icon: Shield,
    title: "Mais confiabilidade",
    text: "Reforço de segurança, consistência operacional, tratamento de falhas e maior previsibilidade no resultado final do deploy.",
  },
  {
    icon: Layers3,
    title: "Mais profundidade de produto",
    text: "Histórico por projeto, onboarding melhor, fluxos mais claros e uma experiência cada vez menos dependente de tentativa e erro.",
  },
  {
    icon: GitBranch,
    title: "Mais inteligência na publicação",
    text: "Ambientes, automações, regras mais flexíveis e evolução gradual para cenários que hoje ainda exigem acompanhamento mais manual.",
  },
];

const horizon = [
  {
    label: "Agora",
    title: "Tornar o deploy mais claro para qualquer cliente",
    text: "Mais clareza na jornada, mais confiança no fluxo e uma experiência pública que mostre exatamente como a plataforma ajuda a colocar projetos no ar.",
  },
  {
    label: "Próximo passo",
    title: "Escalar sem perder simplicidade",
    text: "Mais capacidade operacional, melhores retornos de status e uma base cada vez mais pronta para crescer com consistência.",
  },
  {
    label: "Visão maior",
    title: "Ir do deploy guiado à automação contínua",
    text: "CI/CD, mais inteligência de publicação e menos atrito entre o código pronto e o site online.",
  },
];

const RoadmapPublicPage = () => {
  usePendingSection("/roadmap");

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f7f4ff_0%,#fbfbff_28%,#ffffff_100%)] text-foreground">
      <section className="relative overflow-hidden border-b border-purple-100/70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.18),transparent_34%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0.94))]" />

        <div className="container relative z-10 mx-auto px-4 py-10 md:py-16">
          <div className="max-w-5xl">
            <Badge className="mb-6 rounded-full bg-white/80 px-4 py-1.5 text-sm text-primary shadow-sm backdrop-blur">
              Roadmap público
            </Badge>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
              O Deployer já resolve uma dor real. Agora estamos construindo uma operação muito maior.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              Este roadmap mostra de onde viemos, o que já colocamos de pé e para onde queremos
              levar a plataforma nos próximos ciclos. A direção é clara: menos atrito, mais
              capacidade e mais automação para publicar projetos com confiança.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="btn-hero">
                <HashNavLink to="/pricing">
                  Conhecer a plataforma
                  <ArrowRight className="h-4 w-4" />
                </HashNavLink>
              </Button>
              <Button
                type="button"
                variant="outline"
                className="border-primary/20 bg-white/80"
                onClick={() => goToSection("/roadmap", "marcos")}
              >
                Ver marcos
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container mx-auto space-y-8 px-4">
          <div className="grid gap-4 md:grid-cols-3">
            {horizon.map((item) => (
              <div
                key={item.label}
                className="rounded-[24px] border border-white/80 bg-white p-6 shadow-[0_20px_70px_-35px_rgba(91,33,182,0.35)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-700">
                  {item.label}
                </p>
                <h2 className="mt-3 text-2xl font-bold text-slate-900">{item.title}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>

          <section
            id="marcos"
            className="rounded-[32px] border border-purple-100 bg-gradient-to-br from-white via-white to-purple-50/60 p-6 md:p-10"
          >
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-700">
                Linha do tempo
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Os marcos que trouxeram o Deployer até aqui
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Mais do que uma lista de funcionalidades, este roadmap conta a história do produto:
                a dor operacional que existia, a primeira solução prática, a expansão da estrutura
                e a visão do que queremos entregar depois.
              </p>
            </div>

            <div className="mt-10 space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.title}
                  className="grid gap-4 md:grid-cols-[160px_minmax(0,1fr)] md:gap-6"
                >
                  <div className="relative flex items-start gap-4 md:block">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-md ring-8 ring-purple-50">
                      {index === 0 && <Target className="h-5 w-5 text-slate-700" />}
                      {index === 1 && <Workflow className="h-5 w-5 text-primary" />}
                      {index === 2 && <Rocket className="h-5 w-5 text-accent" />}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="absolute left-6 top-14 hidden h-[calc(100%+2rem)] w-px bg-gradient-to-b from-purple-300 via-purple-200 to-transparent md:block" />
                    )}
                    <div className="md:pt-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-700">
                        {milestone.phase}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[28px] border border-white/80 bg-white p-6 shadow-[0_20px_70px_-35px_rgba(91,33,182,0.35)]">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge className={`rounded-full px-3 py-1 text-sm ${milestone.tone}`}>
                        {milestone.status}
                      </Badge>
                    </div>

                    <h3 className="mt-4 text-2xl font-bold text-slate-900">{milestone.title}</h3>
                    <p className="mt-3 text-base leading-8 text-slate-600">
                      {milestone.description}
                    </p>

                    <div className="mt-6 grid gap-3">
                      {milestone.bullets.map((bullet) => (
                        <div
                          key={bullet}
                          className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4"
                        >
                          <p className="text-base leading-7 text-slate-700">{bullet}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[32px] border border-white/80 bg-white p-6 shadow-[0_20px_70px_-35px_rgba(91,33,182,0.35)] md:p-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-700">
                Próximas frentes
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                O que queremos colocar no ar nos próximos ciclos
              </h2>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {futureTracks.map((track) => (
                <div
                  key={track.title}
                  className="rounded-[24px] border border-purple-100 bg-gradient-to-br from-white to-purple-50/50 p-6 transition hover:border-primary/25 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <track.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-slate-900">{track.title}</h3>
                  <p className="mt-3 text-base leading-8 text-slate-600">{track.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[28px] border border-emerald-100 bg-emerald-50/80 p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-700">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-emerald-900">
                    CI/CD entra como um dos marcos mais importantes da visão
                  </h3>
                  <p className="mt-2 text-base leading-8 text-emerald-800">
                    Um dos nossos objetivos mais relevantes é evoluir do deploy manual guiado para
                    uma camada mais robusta de automação. Isso inclui gatilhos por atualização de
                    repositório, esteiras mais inteligentes e uma experiência que aproxime o cliente
                    de um fluxo de CI/CD sem perder simplicidade.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RoadmapPublicPage;
