import Footer from "@/components/Footer";
import HashNavLink from "@/components/HashNavLink";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { goToSection, usePendingSection } from "@/lib/navigation";
import {
  ArrowUpRight,
  CheckCircle2,
  FolderKanban,
  KeyRound,
  LifeBuoy,
  Rocket,
  ShieldCheck,
  TimerReset,
} from "lucide-react";

const sections = [
  { id: "visao-geral", label: "Visão geral" },
  { id: "preparacao", label: "Antes de começar" },
  { id: "passo-a-passo", label: "Passo a passo" },
  { id: "acompanhamento", label: "Acompanhamento" },
  { id: "erros-comuns", label: "Erros comuns" },
  { id: "boas-praticas", label: "Boas práticas" },
  { id: "faq", label: "Perguntas frequentes" },
];

const prerequisites = [
  "Um projeto pronto e salvo em um repositório no GitHub.",
  "Acesso aos dados da sua hospedagem.",
  "Um e-mail habilitado para usar o Deployer.",
  "Clareza sobre qual pasta da hospedagem recebe os arquivos do seu site.",
];

const flowSteps = [
  {
    title: "Entre com o seu e-mail",
    text: "Use o e-mail habilitado no Deployer. Se o acesso estiver liberado, a plataforma mostra o formulário e o consumo atual do seu plano.",
    icon: ShieldCheck,
  },
  {
    title: "Preencha os dados da hospedagem",
    text: "Informe servidor, porta, usuário, senha e a pasta pública onde o site deve ser publicado.",
    icon: KeyRound,
  },
  {
    title: "Cole o link do repositório",
    text: "Adicione a URL correta do projeto que deve ir para o ar. É essa referência que o Deployer vai usar no processamento.",
    icon: FolderKanban,
  },
  {
    title: "Inicie o deploy e acompanhe",
    text: "Depois do envio, o Deployer processa tudo e mostra o status em tempo real para você acompanhar do início ao fim.",
    icon: Rocket,
  },
];

const commonErrors = [
  "Dados da hospedagem preenchidos incorretamente.",
  "Pasta pública informada de forma errada.",
  "Repositório incorreto ou desatualizado.",
  "Falta de permissão no ambiente de destino.",
];

const goodPractices = [
  "Publique sempre a versão final do repositório.",
  "Confira a pasta pública antes de enviar.",
  "Evite alterar o projeto enquanto o deploy estiver em andamento.",
  "Use sempre o mesmo e-mail habilitado na plataforma.",
  "Mantenha os dados da hospedagem atualizados.",
];

const faq = [
  {
    question: "Preciso instalar alguma coisa?",
    answer: "Não. O fluxo foi desenhado para acontecer dentro da plataforma.",
  },
  {
    question: "Preciso saber programação para usar?",
    answer: "Não. O objetivo do Deployer é justamente reduzir o peso técnico do deploy.",
  },
  {
    question: "Posso acompanhar o progresso?",
    answer: "Sim. Depois de iniciar o deploy, você recebe uma tela de status para acompanhar cada etapa.",
  },
  {
    question: "O deploy é imediato?",
    answer: "Ele começa logo após o envio, mas o tempo total depende do projeto e do ambiente de destino.",
  },
];

const DocsPage = () => {
  usePendingSection("/docs");

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f7f4ff_0%,#fbfbff_28%,#ffffff_100%)] text-foreground">
      <section className="relative overflow-hidden border-b border-purple-100/70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.18),transparent_34%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.75),rgba(255,255,255,0.92))]" />

        <div className="container relative z-10 mx-auto px-4 py-10 md:py-16">
          <div className="max-w-5xl">
            <Badge className="mb-6 rounded-full bg-white/80 px-4 py-1.5 text-sm text-primary shadow-sm backdrop-blur">
              Documentação pública
            </Badge>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
              Como usar o Deployer do início ao fim, com clareza e sem complicação
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              Este guia foi feito para clientes. Ele mostra o fluxo real de uso da plataforma,
              do momento em que você se prepara para publicar até a confirmação de que o seu
              site foi para o ar.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="btn-hero">
                <HashNavLink to="/pricing">
                  Ver planos
                  <ArrowUpRight className="h-4 w-4" />
                </HashNavLink>
              </Button>
              <Button
                type="button"
                variant="outline"
                className="border-primary/20 bg-white/80"
                onClick={() => goToSection("/docs", "passo-a-passo")}
              >
                Ir para o passo a passo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
          <aside className="lg:sticky lg:top-6 lg:h-fit">
            <div className="rounded-[24px] border border-purple-100 bg-white/90 p-5 shadow-[0_16px_45px_-30px_rgba(76,29,149,0.45)] backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-700">
                Neste guia
              </p>
              <nav className="mt-4 space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => goToSection("/docs", section.id)}
                    className="block w-full rounded-xl px-3 py-2 text-left text-sm font-medium text-slate-600 transition hover:bg-purple-50 hover:text-slate-900"
                  >
                    {section.label}
                  </button>
                ))}
              </nav>

              <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50/80 p-4">
                <p className="text-sm font-semibold text-emerald-800">Objetivo do Deployer</p>
                <p className="mt-2 text-sm leading-6 text-emerald-700">
                  Reduzir o atrito entre "meu projeto está pronto" e "meu site está publicado".
                </p>
              </div>
            </div>
          </aside>

          <main className="space-y-8">
            <section
              id="visao-geral"
              className="rounded-[28px] border border-white/80 bg-white p-6 shadow-[0_20px_70px_-35px_rgba(91,33,182,0.35)] md:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                  <Rocket className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-700">
                    Visão geral
                  </p>
                  <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                    O que você faz dentro da plataforma
                  </h2>
                </div>
              </div>

              <p className="text-lg leading-8 text-slate-600">
                O Deployer foi pensado para transformar um processo normalmente chato e técnico
                em um fluxo simples: entrar, preencher, publicar e acompanhar. Se você já tem o
                projeto pronto e os dados corretos da hospedagem, a plataforma cuida do resto com
                uma experiência guiada.
              </p>
            </section>

            <section
              id="preparacao"
              className="rounded-[28px] border border-purple-100 bg-gradient-to-br from-white to-purple-50/60 p-6 md:p-8"
            >
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Antes de começar</h2>
              <p className="mt-3 text-lg leading-8 text-slate-600">
                Antes de iniciar seu primeiro deploy, deixe estes itens preparados. Isso acelera o
                processo e reduz muito a chance de erro.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {prerequisites.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-purple-100 bg-white/90 p-5 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-accent" />
                      <p className="text-base leading-7 text-slate-700">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section
              id="passo-a-passo"
              className="rounded-[28px] border border-white/80 bg-white p-6 shadow-[0_20px_70px_-35px_rgba(91,33,182,0.35)] md:p-8"
            >
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Passo a passo de uso</h2>
              <p className="mt-3 text-lg leading-8 text-slate-600">
                Este é o fluxo ideal para usar o Deployer com segurança e confiança.
              </p>

              <div className="mt-8 space-y-5">
                {flowSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-[24px] border border-slate-200 bg-slate-50/70 p-5 transition hover:border-primary/25 hover:bg-white"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-start">
                      <div className="flex items-center gap-3 md:w-52 md:shrink-0">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <step.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-700">
                            Etapa {index + 1}
                          </p>
                          <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                        </div>
                      </div>

                      <p className="text-base leading-7 text-slate-600">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[24px] border border-amber-200 bg-amber-50/80 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
                  Atenção
                </p>
                <p className="mt-2 text-base leading-7 text-amber-800">
                  O ponto mais importante do processo é o preenchimento correto dos dados da
                  hospedagem e da pasta pública. Quando essas informações estão corretas, o fluxo
                  tende a ser muito mais tranquilo.
                </p>
              </div>
            </section>

            <section
              id="acompanhamento"
              className="rounded-[28px] border border-purple-100 bg-gradient-to-br from-indigo-50/70 via-white to-emerald-50/60 p-6 md:p-8"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-700">
                  <TimerReset className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                  Como acompanhar o andamento
                </h2>
              </div>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Depois que você envia o deploy, a plataforma abre uma tela de acompanhamento. Nela,
                você vê em que etapa o processo está e recebe o retorno final quando a publicação
                termina.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: "Recebido",
                    text: "Sua solicitação entrou na fila e foi aceita para processamento.",
                  },
                  {
                    title: "Em processamento",
                    text: "O projeto está sendo preparado e os arquivos estão sendo organizados.",
                  },
                  {
                    title: "Concluído ou erro",
                    text: "Você recebe a confirmação final ou um indicativo de que algo precisa ser revisado.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/80 bg-white/90 p-5 shadow-sm"
                  >
                    <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                    <p className="mt-2 text-base leading-7 text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section
              id="erros-comuns"
              className="rounded-[28px] border border-white/80 bg-white p-6 shadow-[0_20px_70px_-35px_rgba(91,33,182,0.35)] md:p-8"
            >
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Erros mais comuns</h2>
              <p className="mt-3 text-lg leading-8 text-slate-600">
                Quando algo dá errado, quase sempre a causa está em um destes pontos:
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {commonErrors.map((item) => (
                  <div key={item} className="rounded-2xl border border-rose-100 bg-rose-50/70 p-5">
                    <p className="text-base leading-7 text-rose-800">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[24px] border border-slate-200 bg-slate-50/70 p-5">
                <p className="text-base leading-7 text-slate-700">
                  Se o deploy falhar, revise os dados, confirme o repositório e tente novamente.
                  Se o erro continuar, vale acionar o suporte com o máximo de contexto possível.
                </p>
              </div>
            </section>

            <section
              id="boas-praticas"
              className="rounded-[28px] border border-purple-100 bg-gradient-to-br from-white to-purple-50/60 p-6 md:p-8"
            >
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Boas práticas para um deploy tranquilo
              </h2>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {goodPractices.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                      <p className="text-base leading-7 text-emerald-900">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section
              id="faq"
              className="rounded-[28px] border border-white/80 bg-white p-6 shadow-[0_20px_70px_-35px_rgba(91,33,182,0.35)] md:p-8"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                  <LifeBuoy className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                  Perguntas frequentes
                </h2>
              </div>

              <div className="mt-6 space-y-4">
                {faq.map((item) => (
                  <div
                    key={item.question}
                    className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5"
                  >
                    <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
                    <p className="mt-2 text-base leading-7 text-slate-600">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DocsPage;
