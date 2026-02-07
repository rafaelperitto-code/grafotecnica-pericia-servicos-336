import Header from "@/components/Header";
import { Award, BookOpen, Users, Briefcase } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sobre Mim
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Profissional dedicado à análise grafotécnica com rigor científico
              e ética profissional exemplar
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 md:py-32 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-slate-700 to-blue-900 rounded-2xl h-96 flex items-center justify-center text-gray-400">
              <span className="text-center text-sm">Sua Foto Aqui</span>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Trajetória Profissional
              </h2>
              <p className="text-gray-300 mb-4">
                Com mais de 15 anos de experiência em perícia grafotécnica,
                desenvolvi expertise em análise forense de documentos,
                autenticação de assinatura e avaliação comportamental através
                da escrita.
              </p>
              <p className="text-gray-300 mb-6">
                Minha metodologia é fundamentada em neuropsicologia,
                caligrafia científica e análise comportamental, garantindo
                pareceres técnicos de alta qualidade e confiabilidade.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <Award className="text-blue-400 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-white">
                      Certificações Internacionais
                    </p>
                    <p className="text-sm text-gray-400">
                      Membro de associações profissionais de relevância
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <BookOpen className="text-blue-400 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-white">
                      Pesquisa Contínua
                    </p>
                    <p className="text-sm text-gray-400">
                      Atualização constante com as mais recentes descobertas
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Briefcase className="text-blue-400 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-white">
                      Experiência Forense
                    </p>
                    <p className="text-sm text-gray-400">
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
      <section className="py-20 md:py-32 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Áreas de Especialização
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-700 rounded-xl p-8 border border-blue-700">
              <h3 className="text-xl font-bold text-white mb-4">
                Parecer Técnico
              </h3>
              <p className="text-gray-300">
                Emissão de pareceres fundamentados em análise grafológica
                científica, válidos para contextos legais, corporativos e
                investigativos com documentação técnica completa.
              </p>
            </div>

            <div className="bg-slate-700 rounded-xl p-8 border border-purple-700">
              <h3 className="text-xl font-bold text-white mb-4">
                Formulação de Quesitos
              </h3>
              <p className="text-gray-300">
                Orientação especializada na formulação de quesitos periciais
                adequados, garantindo análise completa conforme normas
                técnicas e jurídicas aplicáveis.
              </p>
            </div>

            <div className="bg-slate-700 rounded-xl p-8 border border-amber-700">
              <h3 className="text-xl font-bold text-white mb-4">
                Consultoria Prévia
              </h3>
              <p className="text-gray-300">
                Avaliação exploratória inicial dos documentos e questões
                grafotécnicas, orientando sobre viabilidade, procedimentos e
                próximos passos sem compromisso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato para conhecer como posso ajudá-lo com seus
            desafios de análise grafotécnica
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Solicitar Serviço
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-blue-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>
            © 2024 Perícia Grafotécnica. Todos os direitos reservados. | Sigilo
            profissional garantido
          </p>
        </div>
      </footer>
    </div>
  );
}
