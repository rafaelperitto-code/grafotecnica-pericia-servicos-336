import Header from "@/components/Header";
import { Award, BookOpen, Users, Briefcase } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Sobre Mim
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Profissional dedicado à análise grafotécnica com rigor científico
              e ética profissional exemplar
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-slate-200 to-blue-100 rounded-2xl h-96 flex items-center justify-center text-slate-400">
              <span className="text-center text-sm">Sua Foto Aqui</span>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Trajetória Profissional
              </h2>
              <p className="text-slate-600 mb-4">
                Com mais de 15 anos de experiência em perícia grafotécnica,
                desenvolvi expertise em análise forense de documentos,
                autenticação de assinatura e avaliação comportamental através
                da escrita.
              </p>
              <p className="text-slate-600 mb-6">
                Minha metodologia é fundamentada em neuropsicologia,
                caligrafia científica e análise comportamental, garantindo
                pareceres técnicos de alta qualidade e confiabilidade.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <Award className="text-blue-600 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-slate-900">
                      Certificações Internacionais
                    </p>
                    <p className="text-sm text-slate-600">
                      Membro de associações profissionais de relevância
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <BookOpen className="text-blue-600 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-slate-900">
                      Pesquisa Contínua
                    </p>
                    <p className="text-sm text-slate-600">
                      Atualização constante com as mais recentes descobertas
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Briefcase className="text-blue-600 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-slate-900">
                      Experiência Forense
                    </p>
                    <p className="text-sm text-slate-600">
                      Colaboração com instituições legais e investigativas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Áreas de Especialização
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Perícia Forense
              </h3>
              <p className="text-slate-600">
                Análise e autenticação de documentos para contextos legais,
                investigações e processos judiciais com relatórios válidos em
                juízo.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-8 border border-purple-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Análise Comportamental
              </h3>
              <p className="text-slate-600">
                Avaliação de características psicológicas, potencial
                comportamental e traços de personalidade através da escrita.
              </p>
            </div>

            <div className="bg-amber-50 rounded-xl p-8 border border-amber-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Consultoria Corporativa
              </h3>
              <p className="text-slate-600">
                Apoio em processos de recrutamento, seleção de pessoal e
                avaliação de compatibilidade para contextos empresariais.
              </p>
            </div>

            <div className="bg-emerald-50 rounded-xl p-8 border border-emerald-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Consultoria Especializada
              </h3>
              <p className="text-slate-600">
                Pareceres técnicos personalizados para situações complexas que
                exigem análise grafológica aprofundada e expertise específica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato para conhecer como posso ajudá-lo com seus
            desafios de análise grafotécnica
          </p>

          <button className="bg-white hover:bg-gray-100 text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors">
            Solicitar Serviço
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8">
        <div className="container mx-auto px-4 text-center text-slate-600 text-sm">
          <p>
            © 2024 Perícia Grafotécnica. Todos os direitos reservados. | Sigilo
            profissional garantido
          </p>
        </div>
      </footer>
    </div>
  );
}
